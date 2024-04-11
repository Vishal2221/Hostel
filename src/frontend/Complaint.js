
import Footer from './Footer';
import Navbar from './Navbar';

function Complaint() {

    return (

        <>
            <Navbar />
            <div class="flex justify-center items-center h-screen">
                <form class="bg-white p-6 rounded-lg shadow-md w-96">
                    <select class="w-full mb-4 p-2 border rounded-md">
                        <option value="service">Service</option>
                        <option value="complaint">Complaint</option>
                    </select>
                    <textarea class="w-full h-32 p-2 border rounded-md resize-y" placeholder="Write here"></textarea>
                    <button class="w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit">Submit</button>
                </form>
               
            </div>


            <Footer />

        </>

    )


}

export default Complaint