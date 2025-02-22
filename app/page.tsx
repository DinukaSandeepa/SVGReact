'use client';

import { useState } from 'react';
import { CodeBlock } from '@/components/ui/code-block';
import { transformSvg } from '@/lib/transformSvg';
import { AlertCircle } from 'lucide-react';

export default function Home() {
  const [svgData, setSvgData] = useState<{
    componentCode: string;
    exportCode: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const processSvgCode = (code: string) => {
    try {
      if (!code.includes('<svg')) {
        throw new Error('No SVG code found');
      }

      const transformed = transformSvg(code);
      if (!transformed) {
        throw new Error('Invalid SVG format. Make sure it includes a Lucide class name.');
      }

      setSvgData(transformed);
      setError(null);
      setInputValue('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to transform SVG');
      setSvgData(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processSvgCode(inputValue);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">SVG to React Transformer</h1>
          <p className="text-muted-foreground mb-6">
            Paste your SVG code in the input field below
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your SVG code here..."
              className="w-full h-32 px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Transform SVG
            </button>
          </form>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-4 mb-6 bg-destructive/10 text-destructive rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        {svgData && (
          <div className="space-y-6">
            <CodeBlock
              label="React Component"
              code={svgData.componentCode}
              className="mb-4"
            />
            <CodeBlock
              label="Export Statement"
              code={svgData.exportCode}
              className="mb-4"
            />
          </div>
        )}
      </div>
    </div>
  );
}