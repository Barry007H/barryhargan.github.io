import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="px-6 animate-fade-in max-w-5xl mx-auto space-y-12">
      <!-- Header -->
      <section class="bg-white rounded-3xl border border-sky-200/80 shadow-sm shadow-sky-900/5 p-8 md:p-10">
        <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
          Contact Details
        </span>
        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Get in <span class="text-sky-600">Touch</span>
        </h1>
        <p class="text-base md:text-lg text-slate-600 max-w-2xl mt-4 leading-relaxed">
          Based in <strong class="font-semibold text-slate-800">Milton Keynes</strong>. Whether you would like to discuss a software engineering role, a project, or just connect, feel free to reach out directly via email, phone, or LinkedIn.
        </p>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Direct Contact Cards (Left Column) -->
        <div class="lg:col-span-5 space-y-4">
          <h2 class="text-lg font-extrabold text-slate-900 px-1">Direct Channels</h2>

          <!-- Email Card -->
          <div class="p-5 rounded-2xl bg-white border border-sky-200/80 shadow-sm space-y-3">
            <div class="flex items-start gap-4">
              <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold uppercase tracking-wider text-sky-700">Email</p>
                <a
                  href="mailto:barry7892013@gmail.com"
                  class="text-sm font-bold text-slate-900 hover:text-sky-700 break-all block mt-0.5"
                >
                  barry7892013&#64;gmail.com
                </a>
              </div>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <a
                href="mailto:barry7892013@gmail.com"
                class="flex-1 text-center px-3 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors"
              >
                Send Email
              </a>
              <button
                type="button"
                (click)="copyEmail()"
                class="px-3 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-semibold transition-colors"
              >
                {{ emailCopied() ? 'Copied!' : 'Copy Address' }}
              </button>
            </div>
          </div>

          <!-- Phone Card -->
          <a
            href="tel:07821722429"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all"
          >
            <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-sky-700">Phone</p>
              <p class="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors mt-0.5">07821 722429</p>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a
            href="https://www.linkedin.com/in/barry-hargan-556b5b134/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all"
          >
            <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold uppercase tracking-wider text-sky-700">LinkedIn</p>
              <p class="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate mt-0.5">
                linkedin.com/in/barry-hargan-556b5b134
              </p>
            </div>
          </a>

          <!-- GitHub Card -->
          <a
            href="https://github.com/Barry007H"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-sky-200/80 shadow-sm hover:border-sky-400 hover:shadow-md transition-all"
          >
            <div class="h-11 w-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold uppercase tracking-wider text-sky-700">GitHub</p>
              <p class="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors truncate mt-0.5">
                github.com/Barry007H
              </p>
            </div>
          </a>

          <!-- Location Card -->
          <div class="flex items-center gap-4 p-5 rounded-2xl bg-sky-50/80 border border-sky-200/80">
            <div class="h-11 w-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-sky-700 shrink-0">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wider text-sky-700">Location</p>
              <p class="text-sm font-bold text-slate-900 mt-0.5">Milton Keynes, United Kingdom</p>
            </div>
          </div>
        </div>

        <!-- Message Form (Right Column) -->
        <div class="lg:col-span-7">
          <h2 class="text-lg font-extrabold text-slate-900 px-1 mb-4">Send a Message</h2>

          <form
            (ngSubmit)="sendMessage()"
            class="space-y-5 bg-white p-6 md:p-8 rounded-2xl border border-sky-200/80 shadow-sm"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label for="contact-name" class="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  [(ngModel)]="name"
                  required
                  class="w-full bg-sky-50/40 border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all placeholder:text-slate-400"
                  placeholder="Jane Smith"
                />
              </div>

              <div class="space-y-1.5">
                <label for="contact-email" class="text-xs font-bold text-slate-700 uppercase tracking-wider">Your Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  [(ngModel)]="senderEmail"
                  required
                  class="w-full bg-sky-50/40 border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all placeholder:text-slate-400"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div class="space-y-1.5">
              <label for="contact-subject" class="text-xs font-bold text-slate-700 uppercase tracking-wider">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                [(ngModel)]="subject"
                class="w-full bg-sky-50/40 border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all placeholder:text-slate-400"
                placeholder="Software Engineering Opportunity / Collaboration"
              />
            </div>

            <div class="space-y-1.5">
              <label for="contact-message" class="text-xs font-bold text-slate-700 uppercase tracking-wider">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                [(ngModel)]="message"
                required
                class="w-full bg-sky-50/40 border border-sky-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all placeholder:text-slate-400 resize-none"
                placeholder="Hi Barry, I'd love to get in touch regarding..."
              ></textarea>
            </div>

            @if (submitted()) {
              <div class="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 font-medium">
                Opening your email client addressed to <strong>barry7892013&#64;gmail.com</strong>. If it didn't open automatically, you can email me directly at <a href="mailto:barry7892013@gmail.com" class="underline font-bold">barry7892013&#64;gmail.com</a>.
              </div>
            }

            <button
              type="submit"
              class="w-full bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold py-3.5 px-6 rounded-xl shadow-sm shadow-sky-600/20 transition-all cursor-pointer"
            >
              Compose Email to Barry
            </button>
          </form>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  name = '';
  senderEmail = '';
  subject = '';
  message = '';

  protected readonly emailCopied = signal(false);
  protected readonly submitted = signal(false);

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('barry7892013@gmail.com');
      this.emailCopied.set(true);
      setTimeout(() => this.emailCopied.set(false), 2500);
    }
  }

  sendMessage(): void {
    const mailSubject = encodeURIComponent(
      this.subject.trim() || `Portfolio Inquiry from ${this.name.trim() || 'Website Visitor'}`
    );
    const bodyLines = [
      this.message.trim(),
      '',
      '---',
      `From: ${this.name.trim() || 'Not provided'}`,
      `Email: ${this.senderEmail.trim() || 'Not provided'}`
    ];
    const mailBody = encodeURIComponent(bodyLines.join('\n'));
    this.submitted.set(true);
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:barry7892013@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }
  }
}
