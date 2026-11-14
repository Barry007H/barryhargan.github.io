import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-20">
      <!-- Open Profile & Summary Section (Unboxed) -->
      <section class="pt-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-8 space-y-6">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block">
              Profile &amp; Summary
            </span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About <span class="text-sky-400">Barry Hargan</span>
            </h1>
            <p class="text-base md:text-lg text-slate-200 leading-relaxed">
              I am an innovative Software Engineer with a proven track record of creating efficient and maintainable systems primarily using <strong class="font-semibold text-white">C#</strong> and <strong class="font-semibold text-white">.NET</strong>. With over 6 years in the software industry, I specialise in .NET and C# for backend systems and APIs, <strong class="font-semibold text-white">Angular</strong> with TypeScript for frontend applications, and <strong class="font-semibold text-white">SQL Server</strong> and <strong class="font-semibold text-white">Cosmos DB</strong> for database systems.
            </p>
            <p class="text-base text-slate-300 leading-relaxed">
              Throughout my career, spanning Formula 1 engineering operations at Red Bull Racing, healthcare platforms at ESO, high-concurrency backend systems at Marmalade Game Studio, public-sector digital services at Civica, and commercial PC titles at RocketFlair Studios, I have focused on solving complex problems with clean, practical, and scalable solutions.
            </p>

            <!-- Inline Metadata Strip (No Boxes) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div>
                <p class="text-xs font-semibold text-sky-400 uppercase tracking-wider">Location</p>
                <p class="text-sm font-bold text-white mt-1">Northampton, UK</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-sky-400 uppercase tracking-wider">Current Role</p>
                <p class="text-sm font-bold text-white mt-1">Software Engineer @ Red Bull Racing</p>
              </div>
              <div>
                <p class="text-xs font-semibold text-sky-400 uppercase tracking-wider">Education</p>
                <p class="text-sm font-bold text-white mt-1">BEng (Hons) 2:1 • Ulster University</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4">
            <div class="rounded-2xl overflow-hidden bg-slate-800/60 border border-slate-700/80 shadow-xl">
              <img
                src="images/Barry.jpeg"
                alt="Barry Hargan"
                class="w-full h-80 object-cover object-top"
              />
              <div class="p-4 bg-slate-900/95 border-t border-slate-800 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-400">Email</span>
                  <a href="mailto:barry7892013@gmail.com" class="font-semibold text-sky-400 hover:underline">barry7892013&#64;gmail.com</a>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-400">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/barry-hargan-556b5b134/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-semibold text-sky-400 hover:underline"
                  >
                    /in/barry-hargan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Approach (Open 3-Column Layout, No Cards) -->
      <section class="border-t border-slate-800 pt-14 space-y-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-sky-400">How I Work</span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">Engineering Principles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="border-t-2 border-sky-500/60 pt-4">
            <h3 class="text-lg font-bold text-white mb-2">End-to-End Solution Ownership</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              I work directly with stakeholders across the business to gather requirements, design system architecture, and deliver complete solutions spanning SQL databases, .NET APIs, and Angular frontends.
            </p>
          </div>

          <div class="border-t-2 border-sky-500/60 pt-4">
            <h3 class="text-lg font-bold text-white mb-2">High-Volume Data &amp; Efficiency</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Whether managing SQL Server tables with millions of rows via optimised stored procedures or handling millions of player documents in Cosmos DB, I build systems engineered for speed and reliability.
            </p>
          </div>

          <div class="border-t-2 border-sky-500/60 pt-4">
            <h3 class="text-lg font-bold text-white mb-2">Maintainable Code &amp; DevOps</h3>
            <p class="text-sm text-slate-300 leading-relaxed">
              Compliant with Microsoft C# coding standards and modern Angular conventions, backed by automated CI/CD release pipelines in Azure DevOps, Git, Perforce, and Jenkins.
            </p>
          </div>
        </div>
      </section>

      <!-- Work Experience Section (Clean Editorial Timeline instead of 5 Giant Cards) -->
      <section class="border-t border-slate-800 pt-14 space-y-10">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Career History</span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">Work Experience</h2>
        </div>

        <div class="divide-y divide-slate-800 border-t border-b border-slate-800">
          <!-- 1. Red Bull Racing -->
          <article class="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold">Current Role</span>
                <span class="text-xs font-semibold text-slate-400">April 2025 – Present</span>
              </div>
              <h3 class="text-xl font-extrabold text-white">Software Engineer</h3>
              <p class="text-sm font-bold text-sky-400">Red Bull Racing &amp; Red Bull Technology Group</p>
              <p class="text-xs text-slate-400">Milton Keynes, UK</p>
              <div class="pt-2">
                <span class="inline-flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                  <img src="images/Red-Bull-Racing.png" alt="Red Bull Racing Logo" class="h-7 w-auto object-contain" />
                </span>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <p class="text-sm md:text-base text-slate-200 leading-relaxed">
                Full-stack software engineering using Angular with TypeScript, .NET, and SQL Server—building and maintaining scalable internal applications that support the team and wider business at the highest level of motorsport:
              </p>

              <ul class="space-y-2.5 text-sm text-slate-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Full system design, architecture, and development of a new .NET MVC application to modernise and streamline multiple HR systems throughout the business.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Maintaining and improving mission-critical internal applications including custom timesheet software and budget planning tools handling applications and financial data in relation to <strong class="font-semibold text-white">FIA Cost Cap regulations</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Engineered integrations with <strong class="font-semibold text-white">Oracle's HR system</strong> to supply reliable HR data across a wide array of internal applications and automated business processes.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Designing applications and REST APIs from concept and requirements gathering through architecture and development—operating in a combined developer and technical project delivery role across business departments.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Managing and optimising large <strong class="font-semibold text-white">SQL Server</strong> database tables with millions of rows, writing and maintaining stored procedures for high-performance data reading and writing.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Creating and managing <strong class="font-semibold text-white">Power BI</strong> reports and dashboards to surface user metrics, HR data, and business performance insights.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Managing Azure DevOps repositories, CI/CD pipelines, releases, and sprints, while providing responsive multi-application support across the organisation.</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">C# &amp; .NET</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">ASP.NET MVC</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Angular &amp; TypeScript</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">SQL Server &amp; Stored Procedures</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Oracle HR Integration</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Power BI</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure DevOps</span>
              </div>
            </div>
          </article>

          <!-- 2. ESO -->
          <article class="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <span class="text-xs font-semibold text-slate-400 block">July 2024 – April 2025</span>
              <h3 class="text-xl font-extrabold text-white">Software Development Engineer</h3>
              <p class="text-sm font-bold text-sky-400">ESO</p>
              <p class="text-xs text-slate-400">Belfast, UK</p>
              <div class="pt-2">
                <span class="inline-flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                  <img src="images/ESO.png" alt="ESO Logo" class="h-7 w-auto object-contain" />
                </span>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <p class="text-sm md:text-base text-slate-200 leading-relaxed">
                Full-stack development building and maintaining core internal and customer-supporting platforms used across American healthcare and emergency response services:
              </p>

              <ul class="space-y-2.5 text-sm text-slate-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Full-stack development using <strong class="font-semibold text-white">Angular with TypeScript</strong>, <strong class="font-semibold text-white">.NET</strong>, <strong class="font-semibold text-white">Microsoft Azure</strong>, <strong class="font-semibold text-white">Azure Functions</strong>, and <strong class="font-semibold text-white">SQL Server</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Maintained and expanded a suite of shared internal applications relied upon by all company product lines.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Engineered .NET server-side services primarily leveraging serverless Azure Functions backed by SQL Server databases and stored procedures.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Developed and maintained frontend features across both modern <strong class="font-semibold text-white">Angular 14</strong> applications and legacy <strong class="font-semibold text-white">AngularJS</strong> projects.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Managed DevOps release pipelines and multi-environment deployments while collaborating within a highly technical engineering team.</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">C# &amp; .NET</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure Functions</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Angular 14 &amp; AngularJS</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">TypeScript</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">SQL Server &amp; Stored Procedures</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure DevOps Pipelines</span>
              </div>
            </div>
          </article>

          <!-- 3. Marmalade Game Studio -->
          <article class="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <span class="text-xs font-semibold text-slate-400 block">June 2023 – July 2024</span>
              <h3 class="text-xl font-extrabold text-white">Backend Engineer</h3>
              <p class="text-sm font-bold text-sky-400">Marmalade Game Studio</p>
              <p class="text-xs text-slate-400">London, UK</p>
              <div class="pt-2">
                <span class="inline-flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
                  <img src="images/Marmalade-Game-Studio.png" alt="Marmalade Game Studio Logo" class="h-8 w-auto object-contain" />
                </span>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <p class="text-sm md:text-base text-slate-200 leading-relaxed">
                Engineered scalable cloud backend systems supporting a portfolio of multi-platform commercial games—including <strong class="font-semibold text-white">Monopoly</strong> and <strong class="font-semibold text-white">Ticket to Ride</strong>—as well as an in-house cross-game social application:
              </p>

              <ul class="space-y-2.5 text-sm text-slate-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Developed and maintained C# <strong class="font-semibold text-white">Azure Function Apps</strong> serving high-concurrency game clients and the studio's unified social application.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Implemented parental consent and account verification workflows using <strong class="font-semibold text-white">Kids Web Services (KWS)</strong> APIs integrated with multiple external login providers.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Built and maintained <strong class="font-semibold text-white">Unity UPM packages</strong> in C#, enabling game teams across mobile, PC, and console platforms to integrate cleanly with backend services.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Utilised <strong class="font-semibold text-white">Azure Cosmos DB</strong> and SQL to manage millions of user accounts, social profiles, and game data documents.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Collaborated with game teams on backend integration and managed project depots and version control using <strong class="font-semibold text-white">Perforce (P4V)</strong>.</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">C#</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure Function Apps</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure Cosmos DB</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Unity UPM Packages</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Kids Web Services (KWS)</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Perforce P4V</span>
              </div>
            </div>
          </article>

          <!-- 4. Civica UK -->
          <article class="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <span class="text-xs font-semibold text-slate-400 block">March 2022 – May 2023</span>
              <h3 class="text-xl font-extrabold text-white">Software Engineer</h3>
              <p class="text-sm font-bold text-sky-400">Civica UK</p>
              <p class="text-xs text-slate-400">Belfast, UK</p>
              <div class="pt-2">
                <span class="inline-flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm">
                  <img src="images/Civica.png" alt="Civica Logo" class="h-6 w-auto object-contain" />
                </span>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <p class="text-sm md:text-base text-slate-200 leading-relaxed">
                Full-stack C# and .NET MVC engineer delivering web applications and APIs for local government contracts across Northern Ireland, including AccessNI account services:
              </p>

              <ul class="space-y-2.5 text-sm text-slate-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Full-stack C# development using <strong class="font-semibold text-white">.NET MVC with Razor</strong> and Microsoft Azure across public-sector web applications used throughout Northern Ireland.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Built a custom C# command-line tool interacting with Azure to automate and streamline the creation of new application registrations and client secrets across specific tenants.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Created a C# REST API handling secure document storage, retrieval, and serving backed by <strong class="font-semibold text-white">Azure Blob Storage</strong> and <strong class="font-semibold text-white">Azure Cosmos DB</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Collaborated across multiple delivery teams on local government contracts, using <strong class="font-semibold text-white">Azure DevOps</strong> to manage repositories, sprint boards, and deployment pipelines.</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">C# &amp; .NET MVC</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Razor Views</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure Blob Storage</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Cosmos DB</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure App Registrations CLI</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Azure DevOps</span>
              </div>
            </div>
          </article>

          <!-- 5. RocketFlair Studios -->
          <article class="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 space-y-3">
              <span class="text-xs font-semibold text-slate-400 block">May 2020 – March 2022</span>
              <h3 class="text-xl font-extrabold text-white">Gameplay Developer</h3>
              <p class="text-sm font-bold text-sky-400">RocketFlair Studios</p>
              <p class="text-xs text-slate-400">Belfast, UK</p>
              <div class="pt-2">
                <span class="inline-flex items-center bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 shadow-sm">
                  <img src="images/Rocket-Flair-Studios.png" alt="RocketFlair Studios Logo" class="h-9 w-auto object-contain" />
                </span>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <p class="text-sm md:text-base text-slate-200 leading-relaxed">
                Worked on commercial PC strategy and management game projects from initial design through vertical slice and beta phase release preparation:
              </p>

              <ul class="space-y-2.5 text-sm text-slate-300">
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Developed core gameplay systems and features in C# and Unity for the Paradox Interactive title <a href="https://www.youtube.com/watch?v=njF-9qjGw_4" target="_blank" rel="noopener noreferrer" class="font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-2">Surviving the Abyss</a> (released on Steam) and contributed bug fixing and features to <strong class="font-semibold text-white">Dynasty of the Sands</strong>.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Built navigation, quest, and Point of Interest (POI) systems from scratch, and refactored performance-critical features causing frame-rate degradation over long sessions to meet target FPS requirements.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Wrote clean, maintainable C# code compliant with Microsoft coding standards while collaborating closely with 3D artists, designers, and project managers in an agile environment.</span>
                </li>
                <li class="flex items-start gap-2.5">
                  <span class="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Managed source control workflows with <strong class="font-semibold text-white">Git &amp; GitHub</strong> and maintained automated continuous integration build pipelines using <strong class="font-semibold text-white">Jenkins</strong> with Unity projects.</span>
                </li>
              </ul>

              <div class="pt-1">
                <a
                  href="https://www.youtube.com/watch?v=njF-9qjGw_4"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all"
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch Surviving the Abyss Trailer on YouTube
                  <span>↗</span>
                </a>
              </div>

              <div class="flex flex-wrap gap-2 pt-2">
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">C#</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Unity 3D</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Gameplay &amp; Navigation Systems</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Performance Profiling</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Git &amp; GitHub</span>
                <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium">Jenkins CI</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Education & References Grid (2 Clean Cards) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Education -->
        <div class="lg:col-span-7 bg-slate-800/45 rounded-2xl p-7 border border-slate-700/70">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Education</span>
            <span class="text-xs font-medium text-slate-400">September 2016 – May 2020</span>
          </div>
          <h2 class="text-xl font-extrabold text-white">BEng (Hons) Computer Games Development</h2>
          <p class="text-sm font-semibold text-sky-400 mt-1">University of Ulster • Derry / Londonderry • 2:1 with Honours</p>

          <ul class="mt-5 space-y-2.5 text-sm text-slate-300">
            <li class="flex items-start gap-2.5">
              <span class="text-sky-400 font-bold mt-0.5">•</span>
              <span>Graduated with Second Class Honours, Upper Division (2:1).</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-sky-400 font-bold mt-0.5">•</span>
              <span>Worked within and assumed a team leadership role across multiple collaborative group software projects.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-sky-400 font-bold mt-0.5">•</span>
              <span>Engineered networked socket endpoints to integrate and utilize voice AI in interactive projects.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="text-sky-400 font-bold mt-0.5">•</span>
              <span>Extensive software engineering coursework and project development using <strong class="font-semibold text-white">C#</strong> and <strong class="font-semibold text-white">Java</strong>.</span>
            </li>
          </ul>
        </div>

        <!-- Professional References -->
        <div class="lg:col-span-5 bg-slate-800/45 rounded-2xl p-7 border border-slate-700/70 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block">References</span>
            <h2 class="text-xl font-extrabold text-white">Professional References</h2>

            <div class="divide-y divide-slate-700/70">
              <div class="pb-4">
                <h3 class="text-base font-bold text-white">Nicholas Sheehan</h3>
                <p class="text-xs font-semibold text-sky-400 mt-0.5">Marmalade Game Studio</p>
                <a
                  href="mailto:nicholassheehan@marmalademail.com"
                  class="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-sky-400 mt-1.5 font-medium"
                >
                  nicholassheehan&#64;marmalademail.com
                </a>
              </div>

              <div class="pt-4">
                <h3 class="text-base font-bold text-white">Andrew Fletcher</h3>
                <p class="text-xs font-semibold text-sky-400 mt-0.5">Civica UK</p>
                <p class="text-xs text-slate-400 mt-1">
                  Contact details available upon request.
                </p>
              </div>
            </div>
          </div>

          <a
            routerLink="/contact"
            class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all cursor-pointer"
          >
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {}
