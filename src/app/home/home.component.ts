import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-16">
      <!-- Hero Section -->
      <section class="bg-white rounded-3xl border border-sky-200/80 shadow-sm shadow-sky-900/5 p-8 md:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-semibold">
              <span class="h-2 w-2 rounded-full bg-sky-600"></span>
              Software Engineer at Red Bull Racing • Milton Keynes, UK
            </div>

            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I'm <span class="text-sky-600">Barry Hargan</span> — Full-Stack &amp; Backend Software Engineer.
            </h1>

            <p class="text-base md:text-lg text-slate-600 leading-relaxed">
              Innovative Software Engineer with over 6 years of commercial experience designing and maintaining efficient, scalable systems primarily using <strong class="font-semibold text-slate-800">C#</strong> and <strong class="font-semibold text-slate-800">.NET</strong>, paired with <strong class="font-semibold text-slate-800">Angular</strong> frontends, <strong class="font-semibold text-slate-800">SQL Server</strong> and <strong class="font-semibold text-slate-800">Cosmos DB</strong> databases, and <strong class="font-semibold text-slate-800">Microsoft Azure</strong> cloud infrastructure.
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">C# (6 Years)</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">.NET &amp; ASP.NET MVC (5+ Years)</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">Angular &amp; TypeScript</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">SQL Server &amp; Stored Procedures</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">Azure &amp; Function Apps</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">REST APIs</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">Power BI</span>
              <span class="px-3 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-xs font-semibold text-sky-800">Unity &amp; UPM</span>
            </div>

            <div class="flex flex-wrap items-center gap-4 pt-3">
              <a
                routerLink="/about"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold shadow-sm shadow-sky-600/20 transition-all cursor-pointer"
              >
                View Experience &amp; CV
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                routerLink="/skills"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-sm font-semibold transition-all cursor-pointer"
              >
                Explore Technical Skills
              </a>
              <a
                routerLink="/contact"
                class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-600 hover:text-sky-700 hover:bg-slate-50 text-sm font-semibold transition-all cursor-pointer"
              >
                Contact Details
              </a>
            </div>
          </div>

          <!-- Portrait Column -->
          <div class="lg:col-span-5">
            <div class="relative rounded-2xl overflow-hidden bg-sky-50 border-2 border-sky-100 shadow-md">
              <img
                src="images/Barry.jpeg"
                alt="Barry Hargan at Oracle Red Bull Racing"
                class="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div class="bg-white/95 backdrop-blur-sm px-5 py-3.5 border-t border-sky-100 flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs font-bold text-slate-900">Barry Hargan</p>
                  <p class="text-xs text-slate-500">Oracle Red Bull Racing • Milton Keynes</p>
                </div>
                <img
                  src="images/Red-Bull-Racing.png"
                  alt="Red Bull Racing"
                  class="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Metrics Bar -->
      <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-6 border border-sky-200/70 shadow-sm">
          <p class="text-3xl font-extrabold text-sky-600">6+ Years</p>
          <p class="text-sm font-bold text-slate-800 mt-1">C# &amp; .NET Engineering</p>
          <p class="text-xs text-slate-500 mt-1">Commercial backend, API, and full-stack software delivery</p>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-sky-200/70 shadow-sm">
          <p class="text-3xl font-extrabold text-sky-600">Full-Stack</p>
          <p class="text-sm font-bold text-slate-800 mt-1">Angular, .NET &amp; SQL</p>
          <p class="text-xs text-slate-500 mt-1">End-to-end architecture from database stored procs to web UIs</p>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-sky-200/70 shadow-sm">
          <p class="text-3xl font-extrabold text-sky-600">Azure Cloud</p>
          <p class="text-sm font-bold text-slate-800 mt-1">Serverless &amp; DevOps</p>
          <p class="text-xs text-slate-500 mt-1">Function Apps, Cosmos DB, Blob Storage &amp; CI/CD pipelines</p>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-sky-200/70 shadow-sm">
          <p class="text-3xl font-extrabold text-sky-600">BEng (Hons)</p>
          <p class="text-sm font-bold text-slate-800 mt-1">2:1 Honours Degree</p>
          <p class="text-xs text-slate-500 mt-1">Computer Games Development, Ulster University</p>
        </div>
      </section>

      <!-- Career History Snapshot -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Career Track Record</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Experience Across Industries</h2>
          </div>
          <a
            routerLink="/about"
            class="text-sm font-semibold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1.5 cursor-pointer"
          >
            Read full project breakdowns
            <span>→</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          <!-- Red Bull Racing -->
          <a
            routerLink="/about"
            class="group bg-white rounded-2xl p-5 border-2 border-sky-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold">Current</span>
                <span class="text-[11px] font-medium text-slate-500">Apr 2025 – Present</span>
              </div>
              <div class="h-10 flex items-center mb-3">
                <img src="images/Red-Bull-Racing.png" alt="Red Bull Racing" class="h-7 w-auto object-contain" />
              </div>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Red Bull Racing</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Software Engineer</p>
              <p class="text-xs text-slate-500 mt-2">Milton Keynes • Angular, .NET, SQL Server &amp; Power BI</p>
            </div>
          </a>

          <!-- ESO -->
          <a
            routerLink="/about"
            class="group bg-white rounded-2xl p-5 border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-[11px] font-medium text-slate-500">Jul 2024 – Apr 2025</span>
              </div>
              <div class="h-10 flex items-center mb-3">
                <img src="images/ESO.png" alt="ESO" class="h-8 w-auto object-contain" />
              </div>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">ESO</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Software Development Engineer</p>
              <p class="text-xs text-slate-500 mt-2">Belfast • Angular, .NET, Azure Functions &amp; SQL Server</p>
            </div>
          </a>

          <!-- Marmalade Game Studio -->
          <a
            routerLink="/about"
            class="group bg-white rounded-2xl p-5 border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-[11px] font-medium text-slate-500">Jun 2023 – Jul 2024</span>
              </div>
              <div class="h-10 flex items-center mb-3">
                <img src="images/Marmalade-Game-Studio.png" alt="Marmalade Game Studio" class="h-8 w-auto object-contain" />
              </div>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Marmalade Game Studio</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Backend Engineer</p>
              <p class="text-xs text-slate-500 mt-2">London • C#, Azure Functions, Cosmos DB &amp; Unity UPM</p>
            </div>
          </a>

          <!-- Civica UK -->
          <a
            routerLink="/about"
            class="group bg-white rounded-2xl p-5 border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-[11px] font-medium text-slate-500">Mar 2022 – May 2023</span>
              </div>
              <div class="h-10 flex items-center mb-3">
                <img src="images/Civica.png" alt="Civica UK" class="h-6 w-auto object-contain" />
              </div>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">Civica UK</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Software Engineer</p>
              <p class="text-xs text-slate-500 mt-2">Belfast • C#, .NET Razor, Azure Blob &amp; Cosmos DB</p>
            </div>
          </a>

          <!-- RocketFlair Studios -->
          <a
            routerLink="/about"
            class="group bg-white rounded-2xl p-5 border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-[11px] font-medium text-slate-500">May 2020 – Mar 2022</span>
              </div>
              <div class="h-10 flex items-center mb-3">
                <span class="inline-flex items-center justify-center bg-slate-900 rounded-lg px-2.5 py-1">
                  <img src="images/Rocket-Flair-Studios.png" alt="RocketFlair Studios" class="h-7 w-auto object-contain" />
                </span>
              </div>
              <h3 class="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">RocketFlair Studios</h3>
              <p class="text-xs font-semibold text-sky-700 mt-0.5">Gameplay Developer</p>
              <p class="text-xs text-slate-500 mt-2">Belfast • C#, Unity, Jenkins CI &amp; Performance</p>
            </div>
          </a>
        </div>
      </section>

      <!-- Section Navigation Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Experience & Education Card -->
        <a
          routerLink="/about"
          class="group rounded-2xl p-7 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all block cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">Experience &amp; Education</span>
            <span class="text-sky-600 group-hover:translate-x-1 transition-transform font-bold">→</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
            Full Work History &amp; Background
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed mt-2">
            Detailed overview of my roles at Red Bull Racing, ESO, Marmalade Game Studio, Civica UK, and RocketFlair Studios, along with my BEng (Hons) degree from Ulster University.
          </p>
        </a>

        <!-- Technical Skills Card -->
        <a
          routerLink="/skills"
          class="group rounded-2xl p-7 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all block cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">Core Competencies</span>
            <span class="text-sky-600 group-hover:translate-x-1 transition-transform font-bold">→</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
            Technical Skills &amp; Tooling
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed mt-2">
            Breakdown of my commercial experience across C#, .NET Framework &amp; Core, Angular, TypeScript, SQL Server, Cosmos DB, Azure Function Apps, Azure DevOps, Power BI, and Unity.
          </p>
        </a>

        <!-- Interests Card -->
        <a
          routerLink="/interests"
          class="group rounded-2xl p-7 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all block cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">Outside of Work</span>
            <span class="text-sky-600 group-hover:translate-x-1 transition-transform font-bold">→</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
            Personal Interests &amp; Hobbies
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed mt-2">
            What keeps me active and sharp away from the keyboard — from long-distance running and strength training at the gym to competitive sim racing and Dungeons &amp; Dragons.
          </p>
        </a>

        <!-- Contact Card -->
        <a
          routerLink="/contact"
          class="group rounded-2xl p-7 bg-sky-50/90 border border-sky-200 shadow-sm hover:border-sky-400 hover:bg-sky-100/60 hover:shadow-md transition-all block cursor-pointer"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="px-3 py-1 rounded-full bg-white text-sky-800 border border-sky-200 text-xs font-semibold">Direct Contact</span>
            <span class="text-sky-600 group-hover:translate-x-1 transition-transform font-bold">→</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
            Get in Touch
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed mt-2">
            Based in Milton Keynes. Reach out directly via email, phone, or LinkedIn to discuss engineering opportunities, architecture, or collaboration.
          </p>
        </a>
      </section>
    </div>
  `
})
export class HomeComponent {}
