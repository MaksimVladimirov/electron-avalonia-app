export const trimLine = (line: string) => {
    const newLine = line.slice(0, 15).trim().split('');
    newLine.push('...');
    return newLine.join('');
};
