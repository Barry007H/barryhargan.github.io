import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-16">
      <!-- Open Page Header (Unboxed) -->
      <section class="pt-4 max-w-3xl space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block">
          Outside of Software Engineering
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Personal <span class="text-sky-400">Interests</span>
        </h1>
        <p class="text-base md:text-lg text-slate-300 leading-relaxed">
          Away from writing C# and building web applications, I spend my time staying active outdoors and in the gym, competing on the virtual track in sim racing, and running tabletop campaigns with friends.
        </p>
      </section>

      <!-- 4 Clean, Understated Cards -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 1. Sim Racing & Motorsport -->
        <article class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Motorsport &amp; Telemetry</span>
                <h2 class="text-2xl font-extrabold text-white mt-1">Sim Racing</h2>
              </div>
              <div class="h-12 w-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4.5 10.5h5.7M13.8 10.5h5.7M12 14v6.5" />
                </svg>
              </div>
            </div>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed">
              Competitive sim racing sits right at the intersection of motorsport, hardware, and data analysis. Studying telemetry traces, dialling in car setups, and finding tenths of a second through consistency on track is a rewarding challenge—and pairs naturally with working in Formula 1 at Red Bull Racing.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Telemetry Analysis</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Race Craft</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Motorsport</span>
          </div>
        </article>

        <!-- 2. Running -->
        <article class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Endurance &amp; Outdoors</span>
                <h2 class="text-2xl font-extrabold text-white mt-1">Running</h2>
              </div>
              <div class="h-12 w-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed">
              Getting out for a run is my favourite way to reset after a focused day of software development. Pacing through long-distance sessions builds discipline, clears the head when thinking through tricky architectural problems, and provides a great balance to desk work.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Distance Running</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Pacing &amp; Consistency</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Outdoor Trails</span>
          </div>
        </article>

        <!-- 3. The Gym -->
        <article class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Strength &amp; Routine</span>
                <h2 class="text-2xl font-extrabold text-white mt-1">The Gym</h2>
              </div>
              <div class="h-12 w-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12" />
                </svg>
              </div>
            </div>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed">
              Regular strength training and functional fitness are an anchor in my weekly routine. Tracking progressive overload, sticking to a structured programme, and staying physically active keeps energy and focus high throughout demanding engineering sprints.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Strength Training</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Functional Fitness</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Structured Progression</span>
          </div>
        </article>

        <!-- 4. Dungeons & Dragons -->
        <article class="rounded-2xl p-7 bg-slate-800/45 border border-slate-700/70 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400">Tabletop &amp; Strategy</span>
                <h2 class="text-2xl font-extrabold text-white mt-1">Dungeons &amp; Dragons</h2>
              </div>
              <div class="h-12 w-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 2v20M3.34 7l17.32 10M20.66 7L3.34 17" />
                </svg>
              </div>
            </div>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed">
              Having studied Computer Games Development and started my career in game studios, I have always loved interactive systems and world-building. Playing Dungeons &amp; Dragons with friends brings together creative storytelling, improvisation, and collaborative problem-solving around the table.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-700/60">
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">World-Building</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Tabletop RPGs</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium">Collaborative Strategy</span>
          </div>
        </article>
      </section>

      <!-- Open Bottom Row (No Card) -->
      <section class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-sm text-slate-400">
          Want to chat about software engineering, sim racing, or a new role?
        </p>
        <a
          routerLink="/contact"
          class="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
        >
          Get in Touch
          <span>→</span>
        </a>
      </section>
    </div>
  `
})
export class InterestsComponent {}
