import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-14">
      <!-- Page Header -->
      <section class="bg-white rounded-3xl border border-sky-200/80 shadow-sm shadow-sky-900/5 p-8 md:p-10">
        <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
          Technical Stack &amp; Capabilities
        </span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Technical <span class="text-sky-600">Skills</span>
        </h1>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mt-4 leading-relaxed">
          Over 6 years of commercial software engineering experience centred on <strong class="font-semibold text-slate-800">C#</strong> and <strong class="font-semibold text-slate-800">.NET</strong>, combined with modern <strong class="font-semibold text-slate-800">Angular</strong> frontends, <strong class="font-semibold text-slate-800">SQL Server</strong> &amp; <strong class="font-semibold text-slate-800">Cosmos DB</strong> data platforms, and <strong class="font-semibold text-slate-800">Microsoft Azure</strong> cloud infrastructure.
        </p>

        <!-- Domain Summary Matrix -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-sky-100">
          <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-700">Backend &amp; APIs</h2>
            <p class="text-sm font-bold text-slate-900 mt-1">C#, .NET, ASP.NET MVC, REST APIs, Serverless Functions</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-700">Frontend &amp; Web</h2>
            <p class="text-sm font-bold text-slate-900 mt-1">Angular, TypeScript, JavaScript, Razor, Tailwind CSS</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-700">Data &amp; Cloud</h2>
            <p class="text-sm font-bold text-slate-900 mt-1">SQL Server, Stored Procs, Cosmos DB, Azure, Power BI</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-700">DevOps &amp; Engines</h2>
            <p class="text-sm font-bold text-slate-900 mt-1">Azure DevOps, Git, Perforce P4V, Jenkins, Unity &amp; UPM</p>
          </div>
        </div>
      </section>

      <!-- Detailed Skills Grid -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Experience Breakdown</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Core Technologies</h2>
          </div>
          <p class="text-xs font-medium text-slate-500">Years of commercial experience as listed on CV</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 1. C# -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-base">
                  C#
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  6 Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">C# Programming</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Primary programming language across my entire career. Writing clean, object-oriented, standards-compliant C# for enterprise backend services, web APIs, CLI tooling, and Unity systems.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">RocketFlair</span>
            </div>
          </div>

          <!-- 2. .NET Framework & Core -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  .NET
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  5+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">.NET &amp; ASP.NET MVC</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Architecting and maintaining full-stack .NET applications, MVC web platforms with Razor views, and high-availability backend services supporting internal business and public-sector systems.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
            </div>
          </div>

          <!-- 3. Creating APIs -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  API
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  4+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Creating REST APIs</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                End-to-end API design, implementation, and security—ranging from document storage APIs on Azure Blob Storage to high-concurrency game backend endpoints and internal enterprise services.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
            </div>
          </div>

          <!-- 4. Angular & TypeScript -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  NG
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  2+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Angular, TypeScript &amp; JS</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Full-stack frontend development using modern Angular (Angular 14 through Standalone Components) with TypeScript, as well as maintaining and modernising legacy AngularJS applications.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
            </div>
          </div>

          <!-- 5. SQL Server & Cosmos DB -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  SQL
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  2+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">SQL Server &amp; Cosmos DB</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Database management, writing and optimising complex stored procedures for SQL Server tables with millions of rows, and managing millions of NoSQL user and game documents in Azure Cosmos DB.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
            </div>
          </div>

          <!-- 6. Microsoft Azure & Function Apps -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  AZ
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  2+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Azure &amp; Function Apps</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Building serverless .NET backends with Azure Function Apps, managing document storage on Azure Blob Storage, and automating Azure tenant app registrations and client secrets via custom CLI tools.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
            </div>
          </div>

          <!-- 7. Azure DevOps, Git & Version Control -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  OPS
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  3+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Azure DevOps, Git &amp; CI/CD</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Managing repositories, build and release pipelines, multi-environment deployments, and agile sprints using Azure DevOps, Git &amp; GitHub, Perforce (P4V), and Jenkins CI.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">ESO</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">RocketFlair</span>
            </div>
          </div>

          <!-- 8. 3rd Party Service & SDK Integration -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  SDK
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  2+ Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">3rd Party &amp; SDK Integration</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Connecting internal platforms with external services and SDKs—including Oracle HR data pipelines, Kids Web Services (KWS) parental verification, external login providers, and Azure SDKs.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Civica</span>
            </div>
          </div>

          <!-- 9. Unity & UPM Packages -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  U3D
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  3 Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Unity &amp; UPM Packages</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Building core gameplay systems (navigation, quests, POI), profiling and fixing frame-rate bottlenecks, and creating reusable Unity Package Manager (UPM) packages across PC, Mobile, and Console platforms.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Marmalade</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">RocketFlair</span>
            </div>
          </div>

          <!-- 10. Power BI -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  PBI
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  1+ Year
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Power BI &amp; Reporting</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Designing and managing Power BI reports and dashboards backed by HR and operational SQL data to provide clear visibility into user metrics and business performance.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Red Bull Racing</span>
            </div>
          </div>

          <!-- 11. Multi-Platform Delivery -->
          <div class="rounded-2xl p-6 bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  SYS
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-800">
                  6 Years
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Web, Mobile, PC &amp; Console</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Delivering production software across enterprise web browsers, serverless cloud environments, Windows CLI tools, and cross-platform PC, mobile, and console game clients.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-100 flex flex-wrap gap-1.5">
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Enterprise Web</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Cloud APIs</span>
              <span class="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">Cross-Platform Games</span>
            </div>
          </div>

          <!-- 12. Requirements & Architecture -->
          <div class="rounded-2xl p-6 bg-sky-50/80 border border-sky-200 shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <div class="h-11 w-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-sky-700 font-extrabold text-sm">
                  ARC
                </div>
                <span class="px-3 py-1 rounded-full bg-white border border-sky-200 text-xs font-bold text-sky-800">
                  Full Lifecycle
                </span>
              </div>
              <h3 class="text-lg font-extrabold text-slate-900">Architecture &amp; Stakeholder Delivery</h3>
              <p class="text-sm text-slate-600 leading-relaxed mt-2">
                Gathering business requirements directly from teams, designing database and application architectures, managing sprint delivery, and providing responsive operational support.
              </p>
            </div>
            <div class="mt-5 pt-3 border-t border-sky-200/70">
              <a routerLink="/about" class="text-xs font-bold text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 cursor-pointer">
                See how I apply these in my roles <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class SkillsComponent {}
