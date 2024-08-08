import fs from 'fs';
import path from 'path';

export function getPages() {
    const pagesDir = path.join(process.cwd(), 'app/blog_posts');
    let pageFiles: string[] = [];

    try {
        pageFiles = fs.readdirSync(pagesDir);
    } catch (error) {
        console.error('Error reading pages directory:', error);
        return [];
    }

    const pages = pageFiles.filter((file) => {
        const isDirectory = fs.lstatSync(path.join(pagesDir, file)).isDirectory();

        return isDirectory;
    });

    return pages.map((page) => page.replace('-', ' ').replace('-', ' ').replace('_', '/'));
}
