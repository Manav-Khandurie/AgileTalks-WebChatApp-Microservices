// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const About = () => {
	return (
		<>
			<div className="container mx-auto bg-slate-200 dark:bg-gray-900 min-h-screen flex justify-center items-center my-24 md:my-0">
				<div className="text-center">
					<br />
					<br />
					<br />
					<br />
					<h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
						About This Project
					</h1>
					<p className="text-gray-500 dark:text-gray-300 px-2 md:px-36 pt-2">
						In this application concept, we are focusing on building a microservices-based system to enhance user interactions. The first microservice, the User Service, will be responsible for managing user profiles, including usernames and relevant user information. The second microservice, the Search Service, will handle efficient and relevant user searches, possibly utilizing search engines like Elasticsearch.

						To integrate these services into the user interface, we will add a user-friendly search bar where users can input usernames, and then make requests to the Search Service to retrieve matching user profiles. Finally, for real-time communication, the Chat Service will come into play. When a user selects another user from the search results, the Chat Service can create a new chat room or thread, enabling seamless messaging between users.

						Overall, this architecture enhances user experience by providing a comprehensive system for user management, search functionality, and real-time communication, making it a powerful and efficient platform.
					</p>
					{/* container 2 grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mx-3">
							<div className="flex flex-col items-center">
								<img
									className="w-32 h-32 rounded-full mt-2"
									src="https://www.seguetech.com/wp-content/uploads/2015/08/segue-blog-segue-blog-problems-adopting-agile-development.png"
									alt="profile"
								/>
								<div className="mt-4">
									<h2 className="text-xl font-medium dark:text-white">
										Agile Talks Team |{" "}
										<span className="text-slate-400 text-sm font-light">
											Web Developers{" "}
										</span>
									</h2>
									<p className="text-sm text-gray-500 dark:text-gray-300 p-4 text-justify">
										Our vision for a microservices-based chat application entails building a modular and highly scalable communication platform. This approach involves dividing the application into independent services, including User, Search, and Chat Services, each serving a specific function. Users can create profiles with usernames and other details, efficiently find and connect with others through advanced search capabilities, and engage in real-time messaging with security and resilience.

										{/* Hello! I&apos;m Alvalens, junior
										fullstack web developer. I&apos;m from
										Indonesia. I&apos;m currently learning
										React JS and Node JS. I&apos;m also
										interested in UI/UX Design, Mobile and
										AI developement. If you want to know
										more about me, you can visit my website
										or contact me via social. */}
									</p>
								</div>
							</div>
						</div>
						{/* social */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mx-3">
							<div className="flex flex-col items-center">
								{/* head icon */}
								<div className="flex flex-col justify-center items-center pb-5">
									<FontAwesomeIcon
										icon={faAddressBook}
										className="text-8xl text-gray-500 dark:text-gray-300 py-3"
									/>
									<h2 className="text-xl font-semibold dark:text-white pt-4">
										Contact Me
									</h2>
								</div>
								<div className="flex items-center justify-center space-x-2 pt-2 flex-wrap">
									<a
										href="mailto:500097663@stu.upes.ac.in?subject=Hello&amp;body=Hello Alvalens, "
										className="my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										<FontAwesomeIcon
											icon={faEnvelope}
											className="text-3xl px-2"
										/>{" "}
										Email
									</a>
									<a
										href="https://github.com/prathamkandari"
										className="my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										<FontAwesomeIcon
											icon={faGithub}
											className="text-3xl px-2"
										/>{" "}
										Github
									</a>
									<a
										href="https://www.instagram.com/pratham__kandari03/"
										className="my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										<FontAwesomeIcon
											icon={faInstagram}
											className="text-3xl px-2"
										/>{" "}
										Instagram
									</a>
									<a
										href="https://www.linkedin.com/in/pratham-kandari/"
										className="my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-3xl px-2"
										/>{" "}
										Linkedin
									</a>
									<a
										href="https://discordapp.com/users/PrathamKandari#7576"
										className="my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										<FontAwesomeIcon
											icon={faDiscord}
											className="text-3xl px-2"
										/>{" "}
										Discord
									</a>
								</div>
							</div>
						</div>
						{/* stack used */}
						<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mx-3">
							<div className="flex flex-col items-center">
								<div className="flex flex-col justify-center items-center pb-5">
									<FontAwesomeIcon
										icon={faLayerGroup}
										className="text-8xl text-gray-500 dark:text-gray-300 py-3"
									/>
									<h2 className="text-xl font-semibold dark:text-white pt-4">
										Stack Used
									</h2>
								</div>
								<div className="flex items-center justify-center space-x-2 pt-2 flex-wrap">
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										React JS
									</button>
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										Firebase
									</button>
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										Tailwind CSS
									</button>
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										Daisy UI
									</button>
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										React Router
									</button>
									<button className="btn capitalize my-1 dark:text-gray-300 hover:text-gray-600 flex items-center bg-slate-600 hover:bg-white py-2 px-3 rounded-lg text-white">
										Font Awsome
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
