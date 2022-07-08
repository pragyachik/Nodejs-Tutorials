import Link from "next/link";

function Navigation(){
    return (
        <>
            <nav className="flex bg-teal-600 drop-shadow-lg h-16 items-center text-lg text-pink-50 font-mono">
                <div className="basis-1/4 justify-center px-20">
                    <div><a>Company Name</a></div>
                </div>
                <div className="basis-1/2"></div>
                <div className="flex basis-1/4 justify-around px-5">
                    <div>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div><a>About</a></div>
                    <div><a>Posts</a></div>
                </div>
            </nav>
        </>
    )
}

function Body(){
    return (
        <>
            <div className="flex flex-col items-center ml-64 mr-64 mt-8 mb-8 p-3 bg-white border-2 border-teal-600">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold underline">
                    Hello world!
                    </h1>
                </div>
                <div>
                    <center>
                    <p>Welcome to this website! We are testing Tailwind CSS. Please click the button below if you like the site</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Like!
                    </button>
                    </center>
                </div>
                <div>
                    -{` `}Developer P
                </div>
            </div>
            <center>
            <table class="table-auto">
  <thead>
    <tr>
      <th>M</th>
      <th>O</th>
      <th>M</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fruit</td>
      <td>apple</td>
      <td>pinapple</td>
    </tr>
    <tr>
      <td>bed</td>
      <td>sofa</td>
      <td>chair</td>
    </tr>
    <tr>
      <td>biryani</td>
      <td>kebab</td>
      <td>pizza</td>
    </tr>
  </tbody>
</table>
</center>

        </>
    )
}

export default function FirstPost() {
    return (
        <>
            <div className="bg-teal-100 h-screen w-screen">
                <Navigation />
                <Body />
            </div>
        </>
    );
  }  