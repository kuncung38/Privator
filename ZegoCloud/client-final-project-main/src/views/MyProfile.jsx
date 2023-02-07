import "../index.css"

const MyProfile = () => {
    return (
        <section className="px-9 py-7 helvetica-bold">
            <div className="flex border ">
                <div className="w-3/12 border-r p-4">
                    <div className="flex flex-col items-center gap-y-4">
                        <div className="rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className="w-44"/>
                        </div>
                        <h1 className="font-bold">Heisenberg</h1>
                    </div>
                    <div></div>
                </div>
                <div className="w-9/12 py-4">
                    <div className="flex flex-col items-center gap-y-3 border-b pb-4 px-10">
                        <h1 className="text-2xl font-bold">Public Profile</h1>
                        <p className="font-extralight">Add information about yourself</p>
                    </div>
                    <div className="px-10 pt-4">
                        <form action="">
                        <div className="my-4 flex flex-col gap-y-3">
                            <label htmlFor="" className="">Full Name</label>
                            <input type="text" className="w-full border px-5 py-2 font-normal" placeholder="Heisenberg" />
                        </div>
                        <div className="my-4 flex flex-col gap-y-3">
                            <label htmlFor="" className="">Email</label>
                            <input type="text" className="w-full border px-5 py-2 font-normal" placeholder="Heisenberg" value={"Heisenberg"} />
                        </div>
                        <div className="my-4 flex flex-col gap-y-3">
                            <label htmlFor="" className="">Password</label>
                            <input type="password" className="w-full border px-5 py-2 font-normal" placeholder="Heisenberg" value={"Heisenberg"} />
                        </div>
                        <div className="my-4 flex flex-col gap-y-3">
                            <label htmlFor="" className="">Address</label>
                            <input type="text" className="w-full border px-5 py-2 font-normal" placeholder="Heisenberg" />
                        </div>
                        <div className="my-4 flex flex-col gap-y-3">
                            <label htmlFor="" className="">Phone Number</label>
                            <input type="text" className="w-full border px-5 py-2 font-normal" placeholder="Heisenberg" />
                        </div>
                        <div className="my-4">
                            <button className="p-4 px-10 text-white bg-black">Save</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyProfile