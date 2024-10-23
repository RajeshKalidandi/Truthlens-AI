import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload as UploadIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      simulateUpload();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const removeFile = () => {
    setFile(null);
    setProgress(0);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto">
        <div
          className={cn(
            'border-2 border-dashed rounded-lg p-8 transition-colors',
            isDragging
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-300 dark:border-gray-700',
            'relative'
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium">
              {file ? file.name : 'Upload your media'}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Drag and drop or click to select
            </p>
            {!file && (
              <Button className="mt-4" onClick={() => document.getElementById('file-upload')?.click()}>
                Select File
              </Button>
            )}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
          </div>

          {file && (
            <>
              <div className="mt-4">
                <Progress value={progress} />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={removeFile}
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}