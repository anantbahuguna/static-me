import { exec } from 'child_process';
import { join } from 'path';
import { readdir } from 'fs/promises';

// Directory where markdown files are stored
const contentFolder = join(process.cwd(), 'src/content');

// Function to convert .md file to .html using Pandoc
function convertMarkdownToHTML(file) {
    const outputFile = file.replace('src', 'public').replace('.md', '.html');
    exec(`pandoc "${file}" -o "${outputFile}"`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error converting ${file}:`, stderr);
            return;
        }
        console.log(`Converted ${file} to ${outputFile}`);
    });
}

// Function to convert all .md files in the content folder
async function convertAllMarkdown() {
    try {
        const files = await readdir(contentFolder);
        files.forEach(file => {
            const filePath = join(contentFolder, file);
            if (file.endsWith('.md')) {
                convertMarkdownToHTML(filePath);
            }
        });
    } catch (err) {
        console.error('Error reading content folder:', err);
    }
}

// Convert all markdown files on script execution
convertAllMarkdown();
