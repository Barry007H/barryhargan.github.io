import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-16">
      <!-- Open Page Header (Unboxed) -->
      <section class="pt-4 max-w-3xl space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block">
          Technical Stack &amp; Capabilities
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Technical <span class="text-sky-400">Skills</span>
        </h1>
        <p class="text-base md:text-lg text-slate-300 leading-relaxed">
          Over 6 years of commercial software engineering experience centred on <strong class="font-semibold text-white">C#</strong> and <strong class="font-semibold text-white">.NET</strong>, combined with modern <strong class="font-semibold text-white">Angular</strong> frontends, <strong class="font-semibold text-white">SQL Server</strong> &amp; <strong class="font-semibold text-white">Cosmos DB</strong> data platforms, and <strong class="font-semibold text-white">Microsoft Azure</strong> cloud infrastructure.
        </p>
      </section>

      <!-- 4 Consolidated Domain Cards (Replacing 17 Separate Cards) -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Domain 1: Backend & Core Languages -->
        <div class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70">
          <div class="pb-5 border-b border-slate-700/70">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">01 • Core Stack</span>
            <h2 class="text-2xl font-extrabold text-white mt-1">Backend &amp; API Engineering</h2>
          </div>

          <div class="divide-y divide-slate-700/60">
            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">C# Programming</h3>
                <span class="text-xs font-bold text-sky-400">6 Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Primary language across my entire career. Writing clean, object-oriented, standards-compliant C# for enterprise backend services, web APIs, CLI tooling, and Unity systems.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">.NET Framework &amp; ASP.NET MVC</h3>
                <span class="text-xs font-bold text-sky-400">5+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Architecting and maintaining full-stack .NET applications, MVC platforms, and high-availability backend services supporting internal business and public-sector systems.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Creating REST APIs</h3>
                <span class="text-xs font-bold text-sky-400">4+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                End-to-end API design, implementation, and security—from document storage APIs on Azure Blob Storage to high-concurrency game backend endpoints and enterprise services.
              </p>
            </div>

            <div class="pt-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">3rd Party Service &amp; SDK Integration</h3>
                <span class="text-xs font-bold text-sky-400">2+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Connecting internal platforms with external services and SDKs—including Oracle HR data pipelines, Kids Web Services (KWS) parental verification, login providers, and Azure SDKs.
              </p>
            </div>
          </div>
        </div>

        <!-- Domain 2: Data, Cloud & Analytics -->
        <div class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70">
          <div class="pb-5 border-b border-slate-700/70">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">02 • Data &amp; Cloud</span>
            <h2 class="text-2xl font-extrabold text-white mt-1">Databases, Azure &amp; Analytics</h2>
          </div>

          <div class="divide-y divide-slate-700/60">
            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">SQL Server &amp; Stored Procedures</h3>
                <span class="text-xs font-bold text-sky-400">2+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Database management, schema design, and authoring/optimising stored procedures for reading and writing across large SQL Server tables containing millions of rows.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Microsoft Azure &amp; Function Apps</h3>
                <span class="text-xs font-bold text-sky-400">2+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Building serverless .NET backends with Azure Function Apps, managing document storage on Azure Blob Storage, and automating Azure tenant app registrations via CLI tools.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Azure Cosmos DB</h3>
                <span class="text-xs font-bold text-sky-400">2+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Managing millions of NoSQL user accounts, social profiles, game state records, and document metadata at scale.
              </p>
            </div>

            <div class="pt-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Power BI &amp; Business Reporting</h3>
                <span class="text-xs font-bold text-sky-400">1+ Year</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Designing and managing Power BI reports and dashboards backed by HR and operational SQL data to surface user metrics and business performance insights.
              </p>
            </div>
          </div>
        </div>

        <!-- Domain 3: Frontend & Web -->
        <div class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70">
          <div class="pb-5 border-b border-slate-700/70">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">03 • Web Interfaces</span>
            <h2 class="text-2xl font-extrabold text-white mt-1">Frontend &amp; Web Development</h2>
          </div>

          <div class="divide-y divide-slate-700/60">
            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Angular</h3>
                <span class="text-xs font-bold text-sky-400">2 Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Full-stack frontend development using modern Angular (Angular 14 through Standalone Components) paired with .NET backends, plus maintaining legacy AngularJS applications.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">TypeScript &amp; JavaScript</h3>
                <span class="text-xs font-bold text-sky-400">1–2 Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Type-safe frontend engineering, component architecture, and state management for internal enterprise tools and customer-facing web applications.
              </p>
            </div>

            <div class="pt-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">ASP.NET Razor &amp; Modern CSS</h3>
                <span class="text-xs font-bold text-sky-400">5+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Building server-rendered .NET MVC Razor views as well as responsive single-page interfaces styled with modern CSS and Tailwind.
              </p>
            </div>
          </div>
        </div>

        <!-- Domain 4: DevOps & Game Engineering -->
        <div class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70">
          <div class="pb-5 border-b border-slate-700/70">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-400">04 • Delivery &amp; Engines</span>
            <h2 class="text-2xl font-extrabold text-white mt-1">DevOps, Tooling &amp; Unity</h2>
          </div>

          <div class="divide-y divide-slate-700/60">
            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Azure DevOps, Git &amp; Perforce (P4V)</h3>
                <span class="text-xs font-bold text-sky-400">3+ Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Managing repositories, automated CI/CD build and release pipelines, multi-environment deployments, and agile sprint workflows across Azure DevOps, Git/GitHub, Perforce, and Jenkins.
              </p>
            </div>

            <div class="py-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Unity 3D &amp; Custom UPM Packages</h3>
                <span class="text-xs font-bold text-sky-400">3 Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Developing core gameplay systems (navigation, quests, POI), profiling and resolving frame-rate bottlenecks, and creating reusable Unity Package Manager (UPM) packages.
              </p>
            </div>

            <div class="pt-5">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-base font-bold text-white">Multi-Platform Delivery</h3>
                <span class="text-xs font-bold text-sky-400">6 Years</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed mt-1.5">
                Shipping production software across enterprise web browsers, cloud serverless environments, Windows CLI tools, and Mobile, PC, and Console platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Clean Footer Link Row -->
      <section class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-sm text-slate-400">
          Want to see how these technologies were applied in each role?
        </p>
        <a
          routerLink="/about"
          class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
        >
          View Full Work Experience
          <span>→</span>
        </a>
      </section>
    </div>
  `
})
export class SkillsComponent {}
