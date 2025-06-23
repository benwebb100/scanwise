
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Brain, Plus, Calendar, FileText, User, Settings, LogOut, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

// Mock data for demonstration
const mockReports = [
  {
    id: "RPT-001",
    patientName: "Sarah Johnson",
    patientId: "PAT-12345",
    scanDate: "2024-01-15",
    status: "Completed",
    teethAnalyzed: 8,
    conditions: ["Caries", "Periapical Lesion"],
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "RPT-002", 
    patientName: "Michael Chen",
    patientId: "PAT-12346",
    scanDate: "2024-01-14",
    status: "In Progress",
    teethAnalyzed: 12,
    conditions: ["Root Piece", "Missing Tooth"],
    createdAt: "2024-01-14T14:20:00Z"
  },
  {
    id: "RPT-003",
    patientName: "Emma Wilson",
    patientId: "PAT-12347", 
    scanDate: "2024-01-13",
    status: "Completed",
    teethAnalyzed: 6,
    conditions: ["Caries"],
    createdAt: "2024-01-13T09:15:00Z"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = mockReports.filter(report =>
    report.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Scanwise
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                Dashboard
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Reports
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Analytics
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Dr. Smith
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Dr. Smith
            </h1>
            <p className="text-gray-600">
              Bright Smile Dental Clinic • Last login: Today at 9:30 AM
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Reports</p>
                    <p className="text-2xl font-bold text-gray-900">247</p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">This Month</p>
                    <p className="text-2xl font-bold text-gray-900">23</p>
                  </div>
                  <Calendar className="h-8 w-8 text-teal-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg. Processing</p>
                    <p className="text-2xl font-bold text-gray-900">2.3min</p>
                  </div>
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-2xl font-bold text-gray-900">98.5%</p>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Action Button */}
          <div className="mb-8">
            <Button 
              size="lg"
              onClick={() => navigate("/create-report")}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8 py-4"
            >
              <Plus className="mr-2 h-5 w-5" />
              Create New Report
            </Button>
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>
                    Your latest AI-generated diagnostic reports
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search patients..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{report.patientName}</h3>
                          <p className="text-sm text-gray-600">Patient ID: {report.patientId}</p>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">Report {report.id}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(report.scanDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span>{report.teethAnalyzed} teeth analyzed</span>
                        <span>•</span>
                        <span>{report.conditions.join(", ")}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Report
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredReports.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600">No reports found matching your search.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
