import { useEffect, useState } from 'react';
import { FileTree } from '@astrojs/starlight/components';

interface Disciple {
    id: string;
    name_en: string;
    teacher?: string;
    disciples?: Disciple[];
}

interface FileTreeItem {
    label: string;
    children?: FileTreeItem[];
}

function convertToFileTree(node: Disciple): FileTreeItem {
    const item: FileTreeItem = { label: node.name_en };

    if (Array.isArray(node.disciples) && node.disciples.length > 0) {
        item.children = node.disciples.map(convertToFileTree);
    }

    return item;
}

const JsonToFileTree = () => {
    const [items, setItems] = useState<FileTreeItem[]>([]);

    useEffect(() => {
        fetch('/masterTreeDb.json') // đặt JSON bạn đưa vào public/
            .then((res) => res.json())
            .then((data: Disciple) => setItems([convertToFileTree(data)]));
    }, []);

    return items.length > 0 ? {items} : <p>Loading...</p>;
}
export default JsonToFileTree;
