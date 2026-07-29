import React from 'react';

interface Props {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export default function Table({ headers, rows, caption }: Props) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        {caption && (
          <caption className="mb-2 text-left font-medium text-gray-700 dark:text-gray-300">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-primary/10 dark:bg-primary/20">
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-semibold text-primary dark:text-primary-300 border border-gray-300 dark:border-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 
                ? 'bg-white dark:bg-gray-800' 
                : 'bg-gray-50 dark:bg-gray-700/50'
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}