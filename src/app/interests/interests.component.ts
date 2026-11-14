import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="px-6 animate-fade-in space-y-14">
      <!-- Header -->
      <section class="bg-white rounded-3xl border border-sky-200/80 shadow-sm shadow-sky-900/5 p-8 md:p-10">
        <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
          Outside of Software Engineering
        </span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Personal <span class="text-sky-600">Interests</span>
        </h1>
        <p class="text-base md:text-lg text-slate-600 max-w-3xl mt-4 leading-relaxed">
          Away from writing C# and building web applications, I spend my time staying active outdoors and in the gym, competing on the virtual track in sim racing, and running tabletop campaigns with friends.
        </p>
      </section>

      <!-- Interests Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 1. Sim Racing & Motorsport -->
        <article class="rounded-2xl overflow-hidden bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col">
          <div class="h-44 bg-gradient-to-br from-sky-100 via-sky-50 to-white border-b border-sky-100 px-8 flex items-center justify-between relative overflow-hidden">
            <div class="space-y-1.5 relative z-10">
              <span class="px-2.5 py-1 rounded-md bg-white/90 border border-sky-200 text-xs font-bold text-sky-800">
                Motorsport &amp; Telemetry
              </span>
              <h2 class="text-2xl font-extrabold text-slate-900 pt-1">Sim Racing</h2>
            </div>
            <!-- Steering Wheel / Track SVG Icon -->
            <div class="h-20 w-20 rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center justify-center text-sky-600 relative z-10">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4.5 10.5h5.7M13.8 10.5h5.7M12 14v6.5" />
              </svg>
            </div>
          </div>
          <div class="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-5">
            <p class="text-sm md:text-base text-slate-600 leading-relaxed">
              Competitive sim racing sits right at the intersection of motorsport, hardware, and data analysis. Studying telemetry traces, dialling in car setups, and finding tenths of a second through consistency on track is a rewarding challenge—and pairs naturally with working in Formula 1 at Red Bull Racing.
            </p>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Telemetry Analysis</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Race Craft</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Motorsport</span>
            </div>
          </div>
        </article>

        <!-- 2. Running -->
        <article class="rounded-2xl overflow-hidden bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col">
          <div class="h-44 bg-gradient-to-br from-sky-100 via-sky-50 to-white border-b border-sky-100 px-8 flex items-center justify-between relative overflow-hidden">
            <div class="space-y-1.5 relative z-10">
              <span class="px-2.5 py-1 rounded-md bg-white/90 border border-sky-200 text-xs font-bold text-sky-800">
                Endurance &amp; Outdoors
              </span>
              <h2 class="text-2xl font-extrabold text-slate-900 pt-1">Running</h2>
            </div>
            <!-- Running Route / Pulse SVG Icon -->
            <div class="h-20 w-20 rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center justify-center text-sky-600 relative z-10">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <div class="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-5">
            <p class="text-sm md:text-base text-slate-600 leading-relaxed">
              Getting out for a run is my favourite way to reset after a focused day of software development. Pacing through long-distance sessions builds discipline, clears the head when thinking through tricky architectural problems, and provides a great balance to desk work.
            </p>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Distance Running</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Pacing &amp; Consistency</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Outdoor Trails</span>
            </div>
          </div>
        </article>

        <!-- 3. The Gym -->
        <article class="rounded-2xl overflow-hidden bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col">
          <div class="h-44 bg-gradient-to-br from-sky-100 via-sky-50 to-white border-b border-sky-100 px-8 flex items-center justify-between relative overflow-hidden">
            <div class="space-y-1.5 relative z-10">
              <span class="px-2.5 py-1 rounded-md bg-white/90 border border-sky-200 text-xs font-bold text-sky-800">
                Strength &amp; Routine
              </span>
              <h2 class="text-2xl font-extrabold text-slate-900 pt-1">The Gym</h2>
            </div>
            <!-- Dumbbell / Fitness SVG Icon -->
            <div class="h-20 w-20 rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center justify-center text-sky-600 relative z-10">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 10v4M6 7v10M18 7v10M21 10v4M6 12h12" />
              </svg>
            </div>
          </div>
          <div class="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-5">
            <p class="text-sm md:text-base text-slate-600 leading-relaxed">
              Regular strength training and functional fitness are an anchor in my weekly routine. Tracking progressive overload, sticking to a structured programme, and staying physically active keeps energy and focus high throughout demanding engineering sprints.
            </p>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Strength Training</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Functional Fitness</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Structured Progression</span>
            </div>
          </div>
        </article>

        <!-- 4. Dungeons & Dragons -->
        <article class="rounded-2xl overflow-hidden bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all flex flex-col">
          <div class="h-44 bg-gradient-to-br from-sky-100 via-sky-50 to-white border-b border-sky-100 px-8 flex items-center justify-between relative overflow-hidden">
            <div class="space-y-1.5 relative z-10">
              <span class="px-2.5 py-1 rounded-md bg-white/90 border border-sky-200 text-xs font-bold text-sky-800">
                Tabletop &amp; Strategy
              </span>
              <h2 class="text-2xl font-extrabold text-slate-900 pt-1">Dungeons &amp; Dragons</h2>
            </div>
            <!-- D20 / Polyhedral Die SVG Icon -->
            <div class="h-20 w-20 rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center justify-center text-sky-600 relative z-10">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 2v20M3.34 7l17.32 10M20.66 7L3.34 17" />
              </svg>
            </div>
          </div>
          <div class="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-5">
            <p class="text-sm md:text-base text-slate-600 leading-relaxed">
              Having studied Computer Games Development and started my career in game studios, I have always loved interactive systems and world-building. Playing Dungeons &amp; Dragons with friends brings together creative storytelling, improvisation, and collaborative problem-solving around the table.
            </p>
            <div class="flex flex-wrap gap-2 pt-2 border-t border-sky-100">
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">World-Building</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Tabletop RPGs</span>
              <span class="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-semibold">Collaborative Strategy</span>
            </div>
          </div>
        </article>
      </section>

      <!-- Bottom Callout -->
      <section class="rounded-2xl p-7 bg-sky-50/90 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-lg font-bold text-slate-900">Want to chat about software engineering, sim racing, or a new role?</h3>
          <p class="text-sm text-slate-600 mt-1">Feel free to drop me an email or connect with me on LinkedIn.</p>
        </div>
        <a
          routerLink="/contact"
          class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-all cursor-pointer"
        >
          Get in Touch
          <span>→</span>
        </a>
      </section>
    </div>
  `
})
export class InterestsComponent {}
