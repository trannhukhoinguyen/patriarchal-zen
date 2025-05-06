import { useEffect, useState } from 'react';
import {FileTree} from "@astrojs/starlight/components";

interface Disciple {
    id: string;
    name_en: string;
    teacher?: string;
    disciples?: Record<string, Disciple>;
}

function normalizeNested(node: any): Disciple {
    const { id, name_en, teacher, disciples } = node;
    const result: Disciple = { id, name_en, teacher };

    if (Array.isArray(disciples)) {
        result.disciples = {};
        for (const d of disciples) {
            if (typeof d === 'object' && d.id) {
                result.disciples[d.id] = normalizeNested(d);
            }
        }
    }

    return result;
}

function TreeNode({ node }: { node: Disciple }) {
    return (
        <li>
            {node.name_en}
            {node.disciples && Object.keys(node.disciples).length > 0 && (
                <ul>
                    {Object.values(node.disciples).map((child) => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function MasterFileTree() {
    const [tree, setTree] = useState<Disciple | null>(null);

    useEffect(() => {
        fetch('/masterTreeDb.json')
            .then((res) => res.json())
            .then((data) => setTree(normalizeNested(data)));
    }, []);

    return tree
        ? <ul><TreeNode node={tree} /></ul>
        : <p>Loading...</p>;
}
