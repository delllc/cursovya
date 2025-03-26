import AdminLayout from '@/layouts/admin/admin-layout';

interface DashboardStats {
    totalVisits: number;
    uniqueVisitors: number;
    totalBooks: number;
    totalUsers: number;
    totalNews: number;
    totalEvents: number;
}

export default function AdminDashboard() {
    // This would come from your backend
    const stats: DashboardStats = {
        totalVisits: 1234,
        uniqueVisitors: 789,
        totalBooks: 456,
        totalUsers: 234,
        totalNews: 45,
        totalEvents: 12
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                        title="Total Visits"
                        value={stats.totalVisits}
                        icon="👥"
                    />
                    <StatCard
                        title="Unique Visitors"
                        value={stats.uniqueVisitors}
                        icon="👤"
                    />
                    <StatCard
                        title="Total Books"
                        value={stats.totalBooks}
                        icon="📚"
                    />
                    <StatCard
                        title="Total Users"
                        value={stats.totalUsers}
                        icon="👥"
                    />
                    <StatCard
                        title="Total News"
                        value={stats.totalNews}
                        icon="📰"
                    />
                    <StatCard
                        title="Total Events"
                        value={stats.totalEvents}
                        icon="🎉"
                    />
                </div>

                {/* Add charts or additional statistics here */}
            </div>
        </AdminLayout>
    );
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: string }) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-500 text-sm">{title}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>
                <span className="text-3xl">{icon}</span>
            </div>
        </div>
    );
} 