// File: FileTree.tsx
import React from 'react';

// Định nghĩa kiểu cho Node
type TreeNodeType = {
    name_en: string;
    teacher: string;
    disciples?: TreeNodeType[]; // disciples là mảng các node con
};

// Hàm render TreeNode
const TreeNode: React.FC<{ node: TreeNodeType }> = ({ node }) => {
    return (
        <li>
            <a href={node.teacher}>{node.name_en}</a>
            {node.disciples && node.disciples.length > 0 && (
                <ul>
                    {node.disciples.map((child) => (
                        <TreeNode key={child.teacher} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

// Component chính
interface FileTreeProps {
    treeData: TreeNodeType[];
}

const DataTree: React.FC<FileTreeProps> = ({ treeData }) => {
    return (
        <ul>
            {treeData && treeData.length > 0 ? (
                treeData.map((node) => (
                    <TreeNode key={node.teacher} node={node} />
                ))
            ) : (
                <p>No data available</p> // Fallback khi không có dữ liệu
            )}
        </ul>
    );
};

export default DataTree;
