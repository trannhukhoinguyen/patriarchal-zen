import React, { useEffect, useState } from 'react';
import masterDb from '../../../../public/masterDb.tsx';

declare global {
  interface Window {
    google: any;
  }
}

type Row = [string | { v: string; f: string }, string, string];

const convertToGoogleChartData = (
  input: {
    name_vi: string;
    name_en: string;
    teacher: string;
    sect: string;
    color?: string;
  }[],
  lang: 'vi' | 'en'
): Row[] => {
  return input.map(item => {
    const name = lang === 'vi' ? item.name_vi : item.name_en;
    const formatted = item.color
      ? { v: name, f: `${name}<div style="color:${item.color ?? 'blue'}">${item.sect}</div>` }
      : name;
    return [formatted, item.teacher, item.sect];
  });
};

type OrgChartProps = {
  lang: 'vi' | 'en';
};

const OrgChart: React.FC<OrgChartProps> = ({ lang }) => {
  const [chart, setChart] = useState<any>(null);
  const [originalRows, setOriginalRows] = useState<Row[]>([]);
  const [visibleRows, setVisibleRows] = useState<Row[]>([]);

  useEffect(() => {
    const rows = convertToGoogleChartData(masterDb, lang);
    setOriginalRows(rows);
    setVisibleRows(rows);
  }, [lang]);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.async = true;
      script.onload = () => {
        window.google.charts.load('current', { packages: ['orgchart'] });
        window.google.charts.setOnLoadCallback(() => {
          const orgChart = new window.google.visualization.OrgChart(
            document.getElementById('chart_div')!
          );
          setChart(orgChart);
        });
      };
      document.head.appendChild(script);
    };

    if (!window.google || !window.google.charts) {
      loadScript();
    }
  }, []);

  useEffect(() => {
    if (chart && visibleRows.length > 0) {
      const data = new window.google.visualization.DataTable();
      data.addColumn('string', 'Name');
      data.addColumn('string', 'Manager');
      data.addColumn('string', 'ToolTip');
      data.addRows(visibleRows);
      chart.draw(data, { allowHtml: true, allowCollapse: true });
    }
  }, [chart, visibleRows]);

  const collapseAll = () => {
    const collapsed = originalRows.filter(
      ([, parent]) => parent === '' || parent === 'Mike'
    );
    setVisibleRows(collapsed);
  };

  const expandAll = () => {
    setVisibleRows(originalRows);
  };

  const viewOtherChart = () => {
    window.location.href = '/masters/cytoscape-chart';
  };

  return (
    <div>
      <div className="controls" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
        <button onClick={expandAll} style={{ position: 'fixed', top: '300px', left: '10px' }}>⏬</button>
        <button onClick={collapseAll} style={{ position: 'fixed', top: '300px', left: '40px' }}>⏫</button>
        <button onClick={viewOtherChart} style={{ position: 'fixed', top: '300px', left: '70px' }}>📊</button>
      </div>
      <div id="chart_div"></div>
    </div>
  );
};

export default OrgChart;
