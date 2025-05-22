import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import masterDb from "../../../../public/masterDb.tsx";

type RawNode = {
    name_vi: string;
    name_en: string;
    teacher: string;
    sect: string;
};
// Thêm type cho prop
type CytoscapeOrgChartProps = {
    lang: 'vi' | 'en'; // hoặc string nếu không giới hạn
};

type CytoscapeElement =
    | { data: { id: string; label: string } }
    | { data: { source: string; target: string } };

function convertToCytoscape(data: RawNode[]): CytoscapeElement[] {
    const elements: CytoscapeElement[] = [];

    // Tạo node
    data.forEach(({ name_en }) => {
        elements.push({
            data: { id: name_en, label: name_en }
        });
    });

    // Tạo edge
    data.forEach(({ name_en, teacher }) => {
        if (teacher) {
            elements.push({
                data: { source: teacher, target: name_en }
            });
        }
    });

    return elements;
}
const CytoscapeOrgChart: React.FC<CytoscapeOrgChartProps> = ({ lang }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const chartData: CytoscapeElement[] = convertToCytoscape(
      masterDb.map((node) => ({
          ...node,
          // Lấy label theo ngôn ngữ
          name_en: lang === 'vi' ? node.name_vi : node.name_en,
      }))
    );

    useEffect(() => {
        if (!containerRef.current) return;

        const cy = cytoscape({
            container: containerRef.current,
            elements: chartData,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#4f46e5',
                        label: 'data(label)',
                        color: '#fff',
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'font-size': '12px',
                        'width': 'label',
                        'height': 'label',
                        'padding': '10px',
                        'shape': 'roundrectangle',
                    },
                },
                {
                    selector: 'edge',
                    style: {
                        width: 2,
                        'line-color': '#999',
                        'target-arrow-color': '#999',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier',
                    },
                },
            ],
            layout: {
                name: 'breadthfirst',
                directed: true,
                padding: 20,
            },
        });

        return () => {
            cy.destroy();
        };
    }, [lang]); // lang thay đổi => vẽ lại chart

    return <div>
        <div ref={containerRef} style={{ width: '100%', height: '500px' }} />
    </div>
};

export default CytoscapeOrgChart;
