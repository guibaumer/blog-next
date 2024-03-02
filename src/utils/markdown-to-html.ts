import remark from 'remark'
import remarkHtml from 'remark-html'

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

export async function getText(content) {
    let text: BlocksContent = content;

    return text;
}
