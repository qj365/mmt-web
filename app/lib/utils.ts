/**
 * Formats a date string to a localized format
 */
export function formatDate(dateString: string, locale: string = 'vi'): string {
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date);
    } catch (error) {
        console.error('Error formatting date:', error);
        return '';
    }
}

// Types for Lexical format
interface LexicalNode {
    type: string;
    [key: string]: unknown;
}

interface LexicalTextNode extends LexicalNode {
    type: 'text';
    text: string;
    format?: number;
}

interface LexicalParagraphNode extends LexicalNode {
    type: 'paragraph';
    children?: LexicalNode[];
}

interface LexicalHeadingNode extends LexicalNode {
    type: 'heading';
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: LexicalNode[];
}

interface LexicalListNode extends LexicalNode {
    type: 'list';
    listType: 'bullet' | 'number';
    children?: LexicalNode[];
}

interface LexicalListItemNode extends LexicalNode {
    type: 'listitem';
    children?: LexicalNode[];
}

interface LexicalLinkNode extends LexicalNode {
    type: 'link';
    url: string;
    target?: string;
    children?: LexicalNode[];
}

interface LexicalImageNode extends LexicalNode {
    type: 'image';
    src: string;
    altText?: string;
}

interface LexicalQuoteNode extends LexicalNode {
    type: 'quote';
    children?: LexicalNode[];
}

type LexicalNodeTypes =
    | LexicalTextNode
    | LexicalParagraphNode
    | LexicalHeadingNode
    | LexicalListNode
    | LexicalListItemNode
    | LexicalLinkNode
    | LexicalImageNode
    | LexicalQuoteNode
    | LexicalNode;

/**
 * Converts Lexical editor JSON format to HTML
 */
export function lexicalToHtml(lexicalJson: string): string {
    try {
        const content = JSON.parse(lexicalJson);
        let html = '';

        // Process the root node
        if (content && content.root && content.root.children) {
            html = processLexicalNodes(content.root.children);
        }

        return html;
    } catch (error) {
        console.error('Error parsing Lexical content:', error);
        return '';
    }
}

function processLexicalNodes(nodes: LexicalNodeTypes[]): string {
    let html = '';

    nodes.forEach(node => {
        if (!node) return;

        switch (node.type) {
            case 'paragraph':
                html += `<p>${processLexicalNodes(
                    (node as LexicalParagraphNode).children || []
                )}</p>`;
                break;
            case 'heading':
                const hLevel = (node as LexicalHeadingNode).tag || 'h2';
                html += `<${hLevel}>${processLexicalNodes(
                    (node as LexicalHeadingNode).children || []
                )}</${hLevel}>`;
                break;
            case 'list':
                const listTag =
                    (node as LexicalListNode).listType === 'number'
                        ? 'ol'
                        : 'ul';
                html += `<${listTag}>${processLexicalNodes(
                    (node as LexicalListNode).children || []
                )}</${listTag}>`;
                break;
            case 'listitem':
                html += `<li>${processLexicalNodes(
                    (node as LexicalListItemNode).children || []
                )}</li>`;
                break;
            case 'link':
                html += `<a href="${(node as LexicalLinkNode).url}" ${
                    (node as LexicalLinkNode).target
                        ? `target="${(node as LexicalLinkNode).target}"`
                        : ''
                }>${processLexicalNodes(
                    (node as LexicalLinkNode).children || []
                )}</a>`;
                break;
            case 'image':
                html += `<img src="${(node as LexicalImageNode).src}" alt="${
                    (node as LexicalImageNode).altText || ''
                }" style="max-width: 100%; height: auto;" />`;
                break;
            case 'text':
                let textContent = (node as LexicalTextNode).text || '';

                // Apply text formatting
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 1)
                )
                    textContent = `<strong>${textContent}</strong>`; // Bold
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 2)
                )
                    textContent = `<em>${textContent}</em>`; // Italic
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 4)
                )
                    textContent = `<u>${textContent}</u>`; // Underline
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 8)
                )
                    textContent = `<code>${textContent}</code>`; // Code
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 16)
                )
                    textContent = `<s>${textContent}</s>`; // Strikethrough
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 32)
                )
                    textContent = `<sub>${textContent}</sub>`; // Subscript
                if (
                    (node as LexicalTextNode).format &&
                    ((node as LexicalTextNode).format as number & 64)
                )
                    textContent = `<sup>${textContent}</sup>`; // Superscript

                html += textContent;
                break;
            case 'quote':
                html += `<blockquote>${processLexicalNodes(
                    (node as LexicalQuoteNode).children || []
                )}</blockquote>`;
                break;
            default:
                // Process children for unknown node types
                if ('children' in node && Array.isArray(node.children)) {
                    html += processLexicalNodes(
                        node.children as LexicalNodeTypes[]
                    );
                }
        }
    });

    return html;
}
