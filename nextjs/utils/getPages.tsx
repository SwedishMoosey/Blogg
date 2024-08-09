import fs from 'fs';
import path from 'path';

export function getPages() {
    const blogPostDir = path.join(process.cwd(), 'app/blog_posts');
    let blogPosts: string[] = [];

    try {
        blogPosts = fs.readdirSync(blogPostDir);
    } catch (error) {
        console.error('Error reading blog posts directory:', error);
        return [];
    }

    blogPosts = blogPosts.filter((blogPost) => {
        const isDirectory = fs.lstatSync(path.join(blogPostDir, blogPost)).isDirectory();

        return isDirectory;
    });

    return blogPosts.map((blogPost) => blogPost.replace('-', ' ').replace('-', ' ').replace('_', '/'));
}
