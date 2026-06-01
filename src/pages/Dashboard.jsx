import { ferrets } from "../data/seedData";
import DashboardStat from "../components/DashboardStat";

function Dashboard() {
    const totalFerrets = ferrets.length;

    const activeFerrets = ferrets.filter(
        (ferret) => ferret.status === "Active").length;

    const retiredFerrets = ferrets.filter(
        (ferret) => ferret.status === "Retired").length;

    const inactiveFerrets = ferrets.filter(
        (ferret) => ferret.status === "Inactive").length;

    const rehomedFerrets = ferrets.filter(
        (ferret) => ferret.status === "Rehomed").length;

    const deceasedFerrets = ferrets.filter(
        (ferret) => ferret.status === "Deceased").length;
    
    

    return (
        <div>
            <h1>Dashboard</h1>

            <DashboardStat
                title="Total Ferrets"
                value={totalFerrets}
            />

            <DashboardStat
                title="Active Breeders"
                value={activeFerrets}
            />

            <DashboardStat
                title="Inactive Breeders"
                value={inactiveFerrets}
            />

            <DashboardStat
                title="Retired Breeders"
                value={retiredFerrets}
            />

            <DashboardStat
                title="Rehomed Ferrets"
                value={rehomedFerrets}
            />

            <DashboardStat
                title="Deceased Ferrets"
                value={deceasedFerrets}
            />

        </div>
    );
}

export default Dashboard;