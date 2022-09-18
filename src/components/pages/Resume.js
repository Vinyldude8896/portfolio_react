import React from 'react'
import kevinResume from '../../Assets/Kevin_Reid_Resume_Development.pdf'


import KevinResume from '../../Assets/Kevin_Reid_Resume_Development.pdf'

const Resume = () => {
  return (
 <section>
<div class="overflow-hidden bg-white shadow sm:rounded-lg ">
  <div class="px-4 py-5 sm:px-6 ">
    <h3 class="text-lg font-medium leading-6 text-black-300">Kevin Reid</h3>
    <p class="mt-1 max-w-2xl text-lg font-medium text-black-300">Full Stack Web Developer</p>
  </div>
  <div class="border-t border-gray-200 dark:bg-gray-900">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300  dark:bg-gray-900">Oshawa, ON| (289)688-8896</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0 dark:bg-gray-900"></dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">University of Toronto</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0">Certificate - Full Stack Web Development</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Languages</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0">JavaScript, HTML, CSS</dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Libraries</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0"> jQuery, Bootstrap, Express.js, Node.js, Hanndlebars.js, Chart.js, React.js</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Databases</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0">MySQL, MongoDB, IndexedDB</dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Tools</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0">Git, Web API, Third-Party API, RESTful API, Sequelize, Mongoose, Webpack</dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Architecture</dt>
        <dd class="mt-1 text-lg font-medium text-gray-300  sm:col-span-2 sm:mt-0">Model-View-Controller, Object-Relational-Mapping, Test Driven Deployment</dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 dark:bg-gray-900">
        <dt class="text-lg font-medium text-gray-300 ">Download my resume here</dt>
        <dd class="mt-1 text-lg font-medium text-gray-900 sm:col-span-2 sm:mt-0">
          <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
            <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate text-gray-400">kevin_reid_full_stack_developer.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href={kevinResume} download="Kevin Reid Resume.pdf" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li>
            {/* <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
              <div class="flex w-0 flex-1 items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
                <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
              </div>
            </li> */}
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</div>

 </section>
    );
  }
 export default Resume;