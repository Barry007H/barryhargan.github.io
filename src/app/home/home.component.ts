import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-20">
      <!-- Open Hero Section (Unboxed) -->
      <section class="pt-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2.5 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <span class="h-2 w-2 rounded-full bg-sky-400"></span>
              Software Engineer at Red Bull Racing • Northampton / Milton Keynes
            </div>

            <h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Barry Hargan
              <span class="block text-2xl md:text-3xl font-bold text-sky-400 mt-2">
                Full-Stack &amp; Backend Software Engineer
              </span>
            </h1>

            <p class="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Software Engineer with over 6 years of commercial experience designing and maintaining efficient, scalable systems primarily using <strong class="font-semibold text-white">C#</strong> and <strong class="font-semibold text-white">.NET</strong>, paired with <strong class="font-semibold text-white">Angular</strong> frontends, <strong class="font-semibold text-white">SQL Server</strong> and <strong class="font-semibold text-white">Cosmos DB</strong> databases, and <strong class="font-semibold text-white">Microsoft Azure</strong> cloud infrastructure.
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">C# (6 Years)</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">.NET &amp; ASP.NET MVC</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">Angular &amp; TypeScript</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">SQL Server &amp; Stored Procs</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">Azure &amp; Function Apps</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">REST APIs</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">Power BI</span>
              <span class="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200">Unity &amp; UPM</span>
            </div>

            <div class="flex flex-wrap items-center gap-4 pt-3">
              <a
                routerLink="/about"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold transition-all cursor-pointer"
              >
                View Experience &amp; CV
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                routerLink="/skills"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 border border-slate-700 text-sm font-semibold transition-all cursor-pointer"
              >
                Technical Skills
              </a>
              <a
                routerLink="/contact"
                class="inline-flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-sky-400 text-sm font-semibold transition-colors cursor-pointer"
              >
                Get in Touch →
              </a>
            </div>
          </div>

          <!-- Portrait Image -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl overflow-hidden bg-slate-800/60 border border-slate-700/80 shadow-2xl">
              <img
                src="images/Barry.jpeg"
                alt="Barry Hargan at Oracle Red Bull Racing"
                class="w-full h-80 sm:h-96 object-cover object-top"
              />
              <div class="px-5 py-3.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-3">
                <div>
                  <p class="text-xs font-bold text-white">Barry Hargan</p>
                  <p class="text-xs text-slate-400">Oracle Red Bull Racing • Milton Keynes</p>
                </div>
                <span class="bg-white rounded-md px-2.5 py-1 inline-flex items-center">
                  <img
                    src="images/Red-Bull-Racing.png"
                    alt="Red Bull Racing"
                    class="h-4 w-auto object-contain"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Key Metrics Strip (Dividers instead of 4 separate boxes) -->
      <section class="border-y border-slate-800 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p class="text-3xl font-extrabold text-white">6+ Years</p>
          <p class="text-sm font-semibold text-sky-400 mt-1">C# &amp; .NET Engineering</p>
          <p class="text-xs text-slate-400 mt-1">Backend, APIs &amp; full-stack delivery</p>
        </div>
        <div>
          <p class="text-3xl font-extrabold text-white">Full-Stack</p>
          <p class="text-sm font-semibold text-sky-400 mt-1">Angular, .NET &amp; SQL</p>
          <p class="text-xs text-slate-400 mt-1">Database stored procs to web UIs</p>
        </div>
        <div>
          <p class="text-3xl font-extrabold text-white">Azure Cloud</p>
          <p class="text-sm font-semibold text-sky-400 mt-1">Serverless &amp; DevOps</p>
          <p class="text-xs text-slate-400 mt-1">Function Apps, Cosmos DB &amp; CI/CD</p>
        </div>
        <div>
          <p class="text-3xl font-extrabold text-white">BEng (Hons)</p>
          <p class="text-sm font-semibold text-sky-400 mt-1">2:1 Honours Degree</p>
          <p class="text-xs text-slate-400 mt-1">Ulster University</p>
        </div>
      </section>

      <!-- Career Track Record (Clean Horizontal Rows instead of 5 cramped cards) -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Career Track Record</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-1">Experience Across Industries</h2>
          </div>
          <a
            routerLink="/about"
            class="text-sm font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 cursor-pointer"
          >
            Read full project breakdowns
            <span>→</span>
          </a>
        </div>

        <div class="divide-y divide-slate-800 border-y border-slate-800">
          <!-- Red Bull Racing -->
          <a
            routerLink="/about"
            class="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/30 px-3 -mx-3 rounded-xl transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="w-28 h-11 rounded-lg bg-white px-3 flex items-center justify-center shrink-0">
                <img src="images/Red-Bull-Racing.png" alt="Red Bull Racing" class="max-h-6 w-auto object-contain" />
              </div>
              <div>
                <div class="flex items-center gap-2.5">
                  <h3 class="text-base font-bold text-white group-hover:text-sky-400 transition-colors">Red Bull Racing</h3>
                  <span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[11px] font-semibold">Current</span>
                </div>
                <p class="text-sm text-slate-300">Software Engineer • Milton Keynes</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end text-xs text-slate-400">
              <span class="font-semibold text-slate-200">April 2025 – Present</span>
              <span>Angular, .NET, SQL Server, Oracle HR &amp; Power BI</span>
            </div>
          </a>

          <!-- ESO -->
          <a
            routerLink="/about"
            class="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/30 px-3 -mx-3 rounded-xl transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="w-28 h-11 rounded-lg bg-white px-3 flex items-center justify-center shrink-0">
                <img src="images/ESO.png" alt="ESO" class="max-h-7 w-auto object-contain" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-sky-400 transition-colors">ESO</h3>
                <p class="text-sm text-slate-300">Software Development Engineer • Belfast</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end text-xs text-slate-400">
              <span class="font-semibold text-slate-200">July 2024 – April 2025</span>
              <span>Angular, .NET, Azure Functions &amp; SQL Server</span>
            </div>
          </a>

          <!-- Marmalade Game Studio -->
          <a
            routerLink="/about"
            class="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/30 px-3 -mx-3 rounded-xl transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="w-28 h-11 rounded-lg bg-white px-3 flex items-center justify-center shrink-0">
                <img src="images/Marmalade-Game-Studio.png" alt="Marmalade Game Studio" class="max-h-7 w-auto object-contain" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-sky-400 transition-colors">Marmalade Game Studio</h3>
                <p class="text-sm text-slate-300">Backend Engineer • London</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end text-xs text-slate-400">
              <span class="font-semibold text-slate-200">June 2023 – July 2024</span>
              <span>C#, Azure Functions, Cosmos DB, KWS &amp; Unity UPM</span>
            </div>
          </a>

          <!-- Civica UK -->
          <a
            routerLink="/about"
            class="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/30 px-3 -mx-3 rounded-xl transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="w-28 h-11 rounded-lg bg-white px-3 flex items-center justify-center shrink-0">
                <img src="images/Civica.png" alt="Civica UK" class="max-h-5 w-auto object-contain" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-sky-400 transition-colors">Civica UK</h3>
                <p class="text-sm text-slate-300">Software Engineer • Belfast</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end text-xs text-slate-400">
              <span class="font-semibold text-slate-200">March 2022 – May 2023</span>
              <span>C#, .NET MVC / Razor, Azure Blob Storage &amp; Cosmos DB</span>
            </div>
          </a>

          <!-- RocketFlair Studios -->
          <a
            routerLink="/about"
            class="group py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/30 px-3 -mx-3 rounded-xl transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="w-28 h-11 rounded-lg bg-slate-950 border border-slate-700 px-3 flex items-center justify-center shrink-0">
                <img src="images/Rocket-Flair-Studios.png" alt="RocketFlair Studios" class="max-h-8 w-auto object-contain" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white group-hover:text-sky-400 transition-colors">RocketFlair Studios</h3>
                <p class="text-sm text-slate-300">Gameplay Developer • Belfast</p>
              </div>
            </div>
            <div class="flex flex-col md:items-end text-xs text-slate-400">
              <span class="font-semibold text-slate-200">May 2020 – March 2022</span>
              <span>C#, Unity 3D, Performance Optimization &amp; Jenkins CI</span>
            </div>
          </a>
        </div>
      </section>

      <!-- 3 Focused Navigation Cards -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          routerLink="/about"
          class="group rounded-2xl p-6 bg-slate-800/50 border border-slate-700/70 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all block cursor-pointer"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-sky-400">01 • Background</span>
          <h3 class="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mt-2">
            Experience &amp; Education
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed mt-2">
            Full project breakdowns from Red Bull Racing, ESO, Marmalade, Civica, and RocketFlair, plus my BEng (Hons) at Ulster University.
          </p>
        </a>

        <a
          routerLink="/skills"
          class="group rounded-2xl p-6 bg-slate-800/50 border border-slate-700/70 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all block cursor-pointer"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-sky-400">02 • Capabilities</span>
          <h3 class="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mt-2">
            Technical Skills
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed mt-2">
            Detailed overview of my commercial stack: C#, .NET, Angular, TypeScript, SQL Server, Cosmos DB, Azure, Power BI, and Unity.
          </p>
        </a>

        <a
          routerLink="/interests"
          class="group rounded-2xl p-6 bg-slate-800/50 border border-slate-700/70 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all block cursor-pointer"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-sky-400">03 • Personal</span>
          <h3 class="text-lg font-bold text-white group-hover:text-sky-400 transition-colors mt-2">
            Interests &amp; Hobbies
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed mt-2">
            Life outside software development—competitive sim racing, distance running, strength training at the gym, and tabletop D&amp;D.
          </p>
        </a>
      </section>
    </div>
  `
})
export class HomeComponent {}
