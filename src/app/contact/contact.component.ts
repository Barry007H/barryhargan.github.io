import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="px-6 animate-fade-in max-w-5xl mx-auto space-y-14">
      <!-- Open Page Header (Unboxed) -->
      <section class="pt-4 max-w-2xl space-y-4">
        <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block">
          Contact Details
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Get in <span class="text-sky-400">Touch</span>
        </h1>
        <p class="text-base md:text-lg text-slate-300 leading-relaxed">
          Based in <strong class="font-semibold text-white">Northampton</strong>. Whether you would like to discuss a software engineering role, a project, or just connect, feel free to reach out directly via email or LinkedIn.
        </p>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-slate-800 pt-12">
        <!-- Direct Channels (Open Divided List instead of 4 Separate Cards) -->
        <div class="lg:col-span-5 space-y-6">
          <h2 class="text-lg font-extrabold text-white">Direct Channels</h2>

          <div class="divide-y divide-slate-800 border-y border-slate-800">
            <!-- Email Row -->
            <div class="py-5 space-y-3">
              <div>
                <p class="text-xs font-bold uppercase tracking-wider text-sky-400">Email</p>
                <a
                  href="mailto:barry7892013@gmail.com"
                  class="text-base font-bold text-white hover:text-sky-400 break-all block mt-1 transition-colors"
                >
                  barry7892013&#64;gmail.com
                </a>
              </div>
              <div class="flex items-center gap-2.5">
                <a
                  href="mailto:barry7892013@gmail.com"
                  class="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  (click)="copyEmail()"
                  class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                >
                  {{ emailCopied() ? 'Copied!' : 'Copy Address' }}
                </button>
              </div>
            </div>

            <!-- LinkedIn Row -->
            <div class="py-5">
              <p class="text-xs font-bold uppercase tracking-wider text-sky-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/barry-hargan-556b5b134/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-bold text-white hover:text-sky-400 transition-colors block mt-1"
              >
                linkedin.com/in/barry-hargan-556b5b134 ↗
              </a>
            </div>

            <!-- GitHub Row -->
            <div class="py-5">
              <p class="text-xs font-bold uppercase tracking-wider text-sky-400">GitHub</p>
              <a
                href="https://github.com/Barry007H"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-bold text-white hover:text-sky-400 transition-colors block mt-1"
              >
                github.com/Barry007H ↗
              </a>
            </div>

            <!-- Location Row -->
            <div class="py-5">
              <p class="text-xs font-bold uppercase tracking-wider text-sky-400">Location</p>
              <p class="text-sm font-bold text-white mt-1">Northampton, United Kingdom</p>
            </div>
          </div>
        </div>

        <!-- Message Form (Single Focused Card) -->
        <div class="lg:col-span-7">
          <div class="bg-slate-800/45 p-7 md:p-8 rounded-2xl border border-slate-700/70">
            <h2 class="text-xl font-extrabold text-white mb-6">Send a Message</h2>

            <form (ngSubmit)="sendMessage()" class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label for="contact-name" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    [(ngModel)]="name"
                    required
                    class="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="Jane Smith"
                  />
                </div>

                <div class="space-y-1.5">
                  <label for="contact-email" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Your Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    [(ngModel)]="senderEmail"
                    required
                    class="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label for="contact-subject" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  [(ngModel)]="subject"
                  class="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                  placeholder="Software Engineering Opportunity / Collaboration"
                />
              </div>

              <div class="space-y-1.5">
                <label for="contact-message" class="text-xs font-bold text-slate-300 uppercase tracking-wider">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  [(ngModel)]="message"
                  required
                  class="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500 resize-none"
                  placeholder="Hi Barry, I'd love to get in touch regarding..."
                ></textarea>
              </div>

              @if (submitted()) {
                <div class="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-xs text-sky-200 font-medium">
                  Opening your email client addressed to <strong>barry7892013&#64;gmail.com</strong>. If it didn't open automatically, you can email me directly at <a href="mailto:barry7892013@gmail.com" class="underline font-bold text-sky-400">barry7892013&#64;gmail.com</a>.
                </div>
              }

              <button
                type="submit"
                class="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer"
              >
                Compose Email to Barry
              </button>
            </form>
          </div>
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
