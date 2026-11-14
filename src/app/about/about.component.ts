import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-16">
      <!-- Profile & Summary Section -->
      <section class="bg-white rounded-3xl border border-sky-200/80 shadow-sm shadow-sky-900/5 p-8 md:p-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-8 space-y-5">
            <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider">
              Profile &amp; Summary
            </span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              About <span class="text-sky-600">Barry Hargan</span>
            </h1>
            <p class="text-base md:text-lg text-slate-700 leading-relaxed">
              I am an innovative Software Engineer with a proven track record of creating efficient and maintainable systems primarily using <strong class="font-semibold text-slate-900">C#</strong> and <strong class="font-semibold text-slate-900">.NET</strong>. With over 6 years in the software industry, I specialise in .NET and C# for backend systems and APIs, <strong class="font-semibold text-slate-900">Angular</strong> with TypeScript for frontend applications, and <strong class="font-semibold text-slate-900">SQL Server</strong> and <strong class="font-semibold text-slate-900">Cosmos DB</strong> for database systems.
            </p>
            <p class="text-base text-slate-600 leading-relaxed">
              Throughout my career, spanning Formula 1 engineering operations at Red Bull Racing, healthcare platforms at ESO, high-concurrency backend systems at Marmalade Game Studio, public-sector digital services at Civica, and commercial PC titles at RocketFlair Studios. I have focused on solving complex problems with clean, practical, and scalable solutions.
            </p>

            <!-- Quick Metadata Pills -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div class="p-4 rounded-xl bg-sky-50/80 border border-sky-200/70">
                <p class="text-xs font-semibold text-sky-700 uppercase">Location</p>
                <p class="text-sm font-bold text-slate-900 mt-0.5">Northampton, UK</p>
              </div>
              <div class="p-4 rounded-xl bg-sky-50/80 border border-sky-200/70">
                <p class="text-xs font-semibold text-sky-700 uppercase">Current Role</p>
                <p class="text-sm font-bold text-slate-900 mt-0.5">Software Engineer @ Red Bull Racing</p>
              </div>
              <div class="p-4 rounded-xl bg-sky-50/80 border border-sky-200/70">
                <p class="text-xs font-semibold text-sky-700 uppercase">Education</p>
                <p class="text-sm font-bold text-slate-900 mt-0.5">BEng (Hons) 2:1 • Ulster University</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4">
            <div class="rounded-2xl overflow-hidden bg-sky-50 border-2 border-sky-100 shadow-sm">
              <img
                src="images/Barry.jpeg"
                alt="Barry Hargan"
                class="w-full h-80 object-cover object-top"
              />
              <div class="p-4 bg-white border-t border-sky-100 space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-500">Email</span>
                  <a href="mailto:barry7892013@gmail.com" class="font-semibold text-sky-700 hover:underline">barry7892013&#64;gmail.com</a>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-slate-500">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/barry-hargan-556b5b134/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-semibold text-sky-700 hover:underline"
                  >
                    /in/barry-hargan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Engineering Approach -->
      <section class="space-y-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-sky-700">How I Work</span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Engineering Principles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm">
            <div class="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">End-to-End Solution Ownership</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              I work directly with stakeholders across the business to gather requirements, design system architecture, and deliver complete solutions spanning SQL databases, .NET APIs, and Angular frontends.
            </p>
          </div>

          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm">
            <div class="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">High-Volume Data &amp; Efficiency</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Whether managing SQL Server tables with millions of rows via optimised stored procedures or handling millions of player documents in Cosmos DB, I build systems engineered for speed and reliability.
            </p>
          </div>

          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm">
            <div class="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-4">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">Maintainable Code &amp; DevOps</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Compliant with Microsoft C# coding standards and modern Angular conventions, backed by automated CI/CD release pipelines in Azure DevOps, Git, Perforce, and Jenkins.
            </p>
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section class="space-y-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Career History</span>
          <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Work Experience</h2>
        </div>

        <div class="space-y-6">
          <!-- 1. Red Bull Racing -->
          <article class="bg-white rounded-2xl p-6 md:p-8 border-2 border-sky-300 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sky-100">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="px-2.5 py-0.5 rounded-full bg-sky-600 text-white text-xs font-semibold">Current Role</span>
                  <span class="text-xs font-semibold text-sky-700">April 2025 – Present</span>
                  <span class="text-xs text-slate-400">•</span>
                  <span class="text-xs font-medium text-slate-500">Milton Keynes, UK</span>
                </div>
                <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">Software Engineer</h3>
                <p class="text-base font-bold text-sky-700">Red Bull Racing &amp; Red Bull Technology Group</p>
              </div>
              <div class="shrink-0 bg-sky-50/70 border border-sky-100 rounded-xl px-4 py-2.5 flex items-center justify-center self-start sm:self-center">
                <img src="images/Red-Bull-Racing.png" alt="Red Bull Racing Logo" class="h-9 w-auto object-contain" />
              </div>
            </div>

            <p class="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Full-stack software engineering using Angular with TypeScript, .NET, and SQL Server—building and maintaining scalable internal applications that support the team and wider business at the highest level of motorsport:
            </p>

            <ul class="mt-4 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Full system design, architecture, and development of a new .NET MVC application to modernise and streamline multiple HR systems throughout the business.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Maintaining and improving mission-critical internal applications including custom timesheet software and budget planning tools handling applications and financial data in relation to <strong class="font-semibold text-slate-900">FIA Cost Cap regulations</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Engineered integrations with <strong class="font-semibold text-slate-900">Oracle's HR system</strong> to supply reliable HR data across a wide array of internal applications and automated business processes.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Designing applications and REST APIs from concept and requirements gathering through architecture and development—operating in a combined developer and technical project delivery role across business departments.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Managing and optimising large <strong class="font-semibold text-slate-900">SQL Server</strong> database tables with millions of rows, writing and maintaining stored procedures for high-performance data reading and writing.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Creating and managing <strong class="font-semibold text-slate-900">Power BI</strong> reports and dashboards to surface user metrics, HR data, and business performance insights.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Managing Azure DevOps repositories, CI/CD pipelines, releases, and sprints, while providing responsive multi-application support across the organisation.</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">C# &amp; .NET</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">ASP.NET MVC</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Angular &amp; TypeScript</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">SQL Server &amp; Stored Procedures</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Oracle HR Integration</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Power BI</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure DevOps</span>
            </div>
          </article>

          <!-- 2. ESO -->
          <article class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sky-100">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-xs font-semibold text-sky-700">July 2024 – April 2025</span>
                  <span class="text-xs text-slate-400">•</span>
                  <span class="text-xs font-medium text-slate-500">Belfast, UK</span>
                </div>
                <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">Software Development Engineer</h3>
                <p class="text-base font-bold text-sky-700">ESO</p>
              </div>
              <div class="shrink-0 bg-sky-50/70 border border-sky-100 rounded-xl px-4 py-2.5 flex items-center justify-center self-start sm:self-center">
                <img src="images/ESO.png" alt="ESO Logo" class="h-8 w-auto object-contain" />
              </div>
            </div>

            <p class="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Full-stack development building and maintaining core internal and customer-supporting platforms used across American healthcare and emergency response services:
            </p>

            <ul class="mt-4 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Full-stack development using <strong class="font-semibold text-slate-900">Angular with TypeScript</strong>, <strong class="font-semibold text-slate-900">.NET</strong>, <strong class="font-semibold text-slate-900">Microsoft Azure</strong>, <strong class="font-semibold text-slate-900">Azure Functions</strong>, and <strong class="font-semibold text-slate-900">SQL Server</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Maintained and expanded a suite of shared internal applications relied upon by all company product lines.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Engineered .NET server-side services primarily leveraging serverless Azure Functions backed by SQL Server databases and stored procedures.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Developed and maintained frontend features across both modern <strong class="font-semibold text-slate-900">Angular 14</strong> applications and legacy <strong class="font-semibold text-slate-900">AngularJS</strong> projects.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Managed DevOps release pipelines and multi-environment deployments while collaborating within a highly technical engineering team.</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">C# &amp; .NET</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure Functions</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Angular 14 &amp; AngularJS</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">TypeScript</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">SQL Server &amp; Stored Procedures</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure DevOps Pipelines</span>
            </div>
          </article>

          <!-- 3. Marmalade Game Studio -->
          <article class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sky-100">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-xs font-semibold text-sky-700">June 2023 – July 2024</span>
                  <span class="text-xs text-slate-400">•</span>
                  <span class="text-xs font-medium text-slate-500">London, UK</span>
                </div>
                <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">Backend Engineer</h3>
                <p class="text-base font-bold text-sky-700">Marmalade Game Studio</p>
              </div>
              <div class="shrink-0 bg-sky-50/70 border border-sky-100 rounded-xl px-4 py-2.5 flex items-center justify-center self-start sm:self-center">
                <img src="images/Marmalade-Game-Studio.png" alt="Marmalade Game Studio Logo" class="h-9 w-auto object-contain" />
              </div>
            </div>

            <p class="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Engineered scalable cloud backend systems supporting a portfolio of multi-platform commercial games—including <strong class="font-semibold text-slate-800">Monopoly</strong> and <strong class="font-semibold text-slate-800">Ticket to Ride</strong>—as well as an in-house cross-game social application:
            </p>

            <ul class="mt-4 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Developed and maintained C# <strong class="font-semibold text-slate-900">Azure Function Apps</strong> serving high-concurrency game clients and the studio's unified social application.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Implemented parental consent and account verification workflows using <strong class="font-semibold text-slate-900">Kids Web Services (KWS)</strong> APIs integrated with multiple external login providers.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Built and maintained <strong class="font-semibold text-slate-900">Unity UPM packages</strong> in C#, enabling game teams across mobile, PC, and console platforms to integrate cleanly with backend services.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Utilised <strong class="font-semibold text-slate-900">Azure Cosmos DB</strong> and SQL to manage millions of user accounts, social profiles, and game data documents.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Collaborated with game teams on backend integration and managed project depots and version control using <strong class="font-semibold text-slate-900">Perforce (P4V)</strong>.</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">C#</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure Function Apps</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure Cosmos DB</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Unity UPM Packages</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Kids Web Services (KWS)</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Perforce P4V</span>
            </div>
          </article>

          <!-- 4. Civica UK -->
          <article class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sky-100">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-xs font-semibold text-sky-700">March 2022 – May 2023</span>
                  <span class="text-xs text-slate-400">•</span>
                  <span class="text-xs font-medium text-slate-500">Belfast, UK</span>
                </div>
                <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">Software Engineer</h3>
                <p class="text-base font-bold text-sky-700">Civica UK</p>
              </div>
              <div class="shrink-0 bg-sky-50/70 border border-sky-100 rounded-xl px-4 py-2.5 flex items-center justify-center self-start sm:self-center">
                <img src="images/Civica.png" alt="Civica Logo" class="h-7 w-auto object-contain" />
              </div>
            </div>

            <p class="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Full-stack C# and .NET MVC engineer delivering web applications and APIs for local government contracts across Northern Ireland, including AccessNI account services:
            </p>

            <ul class="mt-4 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Full-stack C# development using <strong class="font-semibold text-slate-900">.NET MVC with Razor</strong> and Microsoft Azure across public-sector web applications used throughout Northern Ireland.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Built a custom C# command-line tool interacting with Azure to automate and streamline the creation of new application registrations and client secrets across specific tenants.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Created a C# REST API handling secure document storage, retrieval, and serving backed by <strong class="font-semibold text-slate-900">Azure Blob Storage</strong> and <strong class="font-semibold text-slate-900">Azure Cosmos DB</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Collaborated across multiple delivery teams on local government contracts, using <strong class="font-semibold text-slate-900">Azure DevOps</strong> to manage repositories, sprint boards, and deployment pipelines.</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">C# &amp; .NET MVC</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Razor Views</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure Blob Storage</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Cosmos DB</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure App Registrations CLI</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Azure DevOps</span>
            </div>
          </article>

          <!-- 5. RocketFlair Studios -->
          <article class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-sky-100">
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                  <span class="text-xs font-semibold text-sky-700">May 2020 – March 2022</span>
                  <span class="text-xs text-slate-400">•</span>
                  <span class="text-xs font-medium text-slate-500">Belfast, UK</span>
                </div>
                <h3 class="text-xl md:text-2xl font-extrabold text-slate-900">Gameplay Developer</h3>
                <p class="text-base font-bold text-sky-700">RocketFlair Studios</p>
              </div>
              <div class="shrink-0 bg-slate-900 rounded-xl px-4 py-2 flex items-center justify-center self-start sm:self-center">
                <img src="images/Rocket-Flair-Studios.png" alt="RocketFlair Studios Logo" class="h-9 w-auto object-contain" />
              </div>
            </div>

            <p class="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Worked on commercial PC strategy and management game projects from initial design through vertical slice and beta phase release preparation:
            </p>

            <ul class="mt-4 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Developed core gameplay systems and features in C# and Unity for the Paradox Interactive title <a href="https://www.youtube.com/watch?v=njF-9qjGw_4" target="_blank" rel="noopener noreferrer" class="font-semibold text-sky-700 hover:text-sky-800 underline underline-offset-2">Surviving the Abyss</a> (released on Steam) and contributed bug fixing and features to <strong class="font-semibold text-slate-900">Dynasty of the Sands</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Built navigation, quest, and Point of Interest (POI) systems from scratch, and refactored performance-critical features causing frame-rate degradation over long sessions to meet target FPS requirements.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Wrote clean, maintainable C# code compliant with Microsoft coding standards while collaborating closely with 3D artists, designers, and project managers in an agile environment.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Managed source control workflows with <strong class="font-semibold text-slate-900">Git &amp; GitHub</strong> and maintained automated continuous integration build pipelines using <strong class="font-semibold text-slate-900">Jenkins</strong> with Unity projects.</span>
              </li>
            </ul>

            <div class="mt-5">
              <a
                href="https://www.youtube.com/watch?v=njF-9qjGw_4"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-sm shadow-sky-600/20 transition-all"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Surviving the Abyss Trailer on YouTube
                <span>↗</span>
              </a>
            </div>

            <div class="flex flex-wrap gap-2 mt-6 pt-4 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">C#</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Unity 3D</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Gameplay &amp; Navigation Systems</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Performance Profiling</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Git &amp; GitHub</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/70 text-xs font-semibold">Jenkins CI</span>
            </div>
          </article>
        </div>
      </section>

      <!-- Education & References Grid -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Education -->
        <div class="lg:col-span-7 space-y-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Academic Background</span>
            <h2 class="text-2xl font-extrabold text-slate-900 mt-1">Education</h2>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm h-full">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">2:1 with Honours</span>
              <span class="text-xs font-semibold text-slate-500">September 2016 – May 2020</span>
            </div>
            <h3 class="text-xl font-extrabold text-slate-900">BEng (Hons) Computer Games Development</h3>
            <p class="text-sm font-bold text-sky-700 mt-0.5">University of Ulster • Derry / Londonderry</p>

            <ul class="mt-5 space-y-2.5 text-sm text-slate-700">
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Graduated with Second Class Honours, Upper Division (2:1).</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Worked within and assumed a team leadership role across multiple collaborative group software projects.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Engineered networked socket endpoints to integrate and utilize voice AI in interactive projects.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-sky-600 font-bold mt-0.5">•</span>
                <span>Extensive software engineering coursework and project development using <strong class="font-semibold text-slate-900">C#</strong> and <strong class="font-semibold text-slate-900">Java</strong>.</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Professional References -->
        <div class="lg:col-span-5 space-y-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Endorsements</span>
            <h2 class="text-2xl font-extrabold text-slate-900 mt-1">Professional References</h2>
          </div>

          <div class="bg-white rounded-2xl p-6 md:p-8 border border-sky-200/80 shadow-sm space-y-5">
            <div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200/70">
              <h3 class="text-base font-bold text-slate-900">Nicholas Sheehan</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Marmalade Game Studio</p>
              <a
                href="mailto:nicholassheehan@marmalademail.com"
                class="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-sky-700 mt-2 font-medium"
              >
                <svg class="w-3.5 h-3.5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nicholassheehan&#64;marmalademail.com
              </a>
            </div>

            <div class="p-4 rounded-xl bg-sky-50/70 border border-sky-200/70">
              <h3 class="text-base font-bold text-slate-900">Andrew Fletcher</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Civica UK</p>
              <p class="text-xs text-slate-500 mt-2">
                Direct phone contact available on request / via CV.
              </p>
            </div>

            <div class="pt-2">
              <a
                routerLink="/contact"
                class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Request Full CV or Get in Touch
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {}
