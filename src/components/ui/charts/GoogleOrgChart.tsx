import React, { useEffect, useState } from 'react';
import masterDb from '../../../../public/masterDb.tsx';

declare global {
    interface Window {
        google: any;
    }
}

type Row = [string | { v: string; f: string }, string, string];

const convertToGoogleChartData = (input: {
    name_en: string;
    teacher: string;
    sect: string;
    color?: string;
}[]): Row[] => {
    return input.map(item => {
        const formatted = item.color
            ? { v: item.name_en, f: `${item.name_en}<div style="color:${item.color ?? 'blue'}">${item.sect}</div>` }
            : item.name_en;
        return [formatted, item.teacher, item.sect];
    });
};

const chartData: Row[] = convertToGoogleChartData(masterDb);
const OrgChart: React.FC = () => {
    const [chart, setChart] = useState<any>(null);
    const [originalRows] = useState<Row[]>(chartData);
    const [visibleRows, setVisibleRows] = useState<Row[]>([]);

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
                    setVisibleRows(originalRows); // mặc định hiển thị đầy đủ
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
        // Chỉ hiển thị root + các node dưới root
        const collapsed = originalRows.filter(
            ([name, parent]) => parent === '' || parent === 'Mike'
        );
        setVisibleRows(collapsed);
    };

    const expandAll = () => {
        setVisibleRows(originalRows);
    };
    const viewOtherChart = () => {
        window.location.href = '/vi/masters/cytoscape-chart';
    };

    return (
        <div>
            <div className="controls" style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
                <button
                    onClick={expandAll}
                    style={{
                        position: 'fixed',
                        top: '150px',
                        left: '150px',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#10b981',
                        color: '#fff',
                        border: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                    <span className="button-text">Expand All</span>
                    <span className="button-icon">Expand All</span>
                </button>
                <button
                    onClick={collapseAll}
                    style={{
                        position: 'fixed',
                        top: '150px',
                        left: '300px',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        border: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                    Collapse All
                </button>
                <button
                    onClick={viewOtherChart}
                    style={{
                        position: 'fixed',
                        top: '150px',
                        left: '450px',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        backgroundColor: '#042773',
                        color: '#fff',
                        border: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                >
                    View Other Chart
                </button>
            </div>
            <div id="chart_div"></div>
        </div>
    );
};

export default OrgChart;
