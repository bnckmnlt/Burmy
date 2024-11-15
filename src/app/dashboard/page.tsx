import React from "react";
import SensorDataContainer from "./(components)/sensor-data-container";
import StatusBadge from "./(components)/status-badge";
import MaterialDataContainer from "./(components)/material-data-container";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="mx-auto my-8 w-full max-w-7xl space-y-16">
      <div className="mx-6 flex items-center justify-between space-x-6">
        <div className="flex flex-row items-center gap-3">
          <h1 className="mx-auto text-3xl">Vermicomposting</h1>
        </div>
        <div className="flex items-center gap-x-3">
          <StatusBadge title="Security Issues" status={true} />
          <StatusBadge title="System Status" status={true} />
        </div>
      </div>
      <div className="mx-6" />
      {/* Sensor Reading */}
      <SensorDataContainer />
      {/* Material Validity */}
      <MaterialDataContainer />
    </div>
  );
};

export default Dashboard;
