import DataTable from "react-data-table-component";

function App() {
  const columns = [
    {
      name: "Arrival",
      selector: row => row.arrival
    },
    {
      name: "Model",
      selector: row => row.model
    },
    {
      name: "Time",
      selector: row => row.time,
      sortable: true
    },
    {
      name: "Departure",
      selector: row => row.departure
    },
  ]
  const data = [
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
    {
      arrival: "ACE",
      model: "Boeing 737",
      time: "14:30",
      departure: "ZAZ"
    },
    {
      arrival: "ALC",
      model: "Boeing 737",
      time: "11:30",
      departure: "SCQ"
    },
  ]
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
      />
    </div>
  )
}
export default App;
