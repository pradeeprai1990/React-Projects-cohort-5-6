import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [tableRows, setTablerow] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  let [editData,setEditData]=useState(null)

  let saveEnquiry = (e) => {
    e.preventDefault();
    let checkEmail = tableRows.find((obj) => obj.email == e.target.email.value);
    if (checkEmail) {
      toast.error("Email Id Already Exist...");
      return;
    }
    let obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    if (editIndex) {
      //Update Query
    } else {
      setTablerow([...tableRows, obj]);
      toast.success("Data Saved");
      e.target.reset();
      console.log(obj);
    }
  };

  //index= 1

  // let color=["red","blue","yellow"]

  // color.splice(1,1)

  let deleteRow = (currentIndex) => {
    if (confirm("Are your Sure want delete")) {
      let data = [...tableRows];
      data.splice(currentIndex, 1);
      setTablerow(data);
    }
  };

  let editRow = (index) => {
    setEditIndex(index);


      setEditData(tableRows[index])
   
   

  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <ToastContainer />

      <section className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-3xl bg-white shadow-xl lg:flex-row">
        <div className="w-full bg-slate-900 px-6 py-8 text-white lg:w-[30%] lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Contact Form
            </p>
            <h1 className="mt-3 text-3xl font-bold">User Details</h1>
            <p className="mt-3 text-sm text-slate-300">
              Static form layout with fields for name, email, and phone.
            </p>
          </div>

          <form onSubmit={saveEnquiry} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                defaultValue={editData?.name}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                 defaultValue={editData?.email}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-200"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                  defaultValue={editData?.phone}
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {editIndex!=null ? "Update" : "Submit" }
            </button>
          </form>
        </div>

        <div className="w-full px-6 py-8 lg:w-[70%] lg:px-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
                Display Table
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Submitted Records
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-700">
                    Sr No.
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-700">
                    Email
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-700">
                    Phone
                  </th>
                  <th className="px-5 py-4 text-left text-sm font-semibold text-slate-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {tableRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {index + 1}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {row.name}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {row.email}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-700">
                      {row.phone}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-700">
                      <button
                        onClick={() => deleteRow(index)}
                        className=" bg-cyan-400 px-2 py-2 text-sm font-semibold text-slate-950"
                      >
                        Delete
                      </button>{" "}
                      |
                      <button
                        onClick={() => editRow(index)}
                        className=" bg-cyan-400 px-2 py-2 text-sm font-semibold text-slate-950"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
