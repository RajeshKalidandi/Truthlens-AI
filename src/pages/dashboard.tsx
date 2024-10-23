import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Upload from '@/components/sections/upload';
import Results from '@/components/sections/results';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, FileText, Upload as UploadIcon, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Analyses',
      value: '2,345',
      icon: BarChart,
    },
    {
      title: 'Files Processed',
      value: '1,234',
      icon: FileText,
    },
    {
      title: 'Upload Success Rate',
      value: '99.9%',
      icon: UploadIcon,
    },
    {
      title: 'Active Users',
      value: '12.5K',
      icon: Users,
    },
  ];

  return (
    <div className="py-8 space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>
        <TabsContent value="upload" className="space-y-4">
          <Upload />
        </TabsContent>
        <TabsContent value="results" className="space-y-4">
          <Results />
        </TabsContent>
      </Tabs>
    </div>
  );
}