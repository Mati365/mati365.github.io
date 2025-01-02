export async function scrollToExperienceItem(slug: string): Promise<void> {
  console.error(slug);

  const targetEl = document.getElementById(slug);
  if (!targetEl) {
    return;
  }

  // Check and expand experience section if needed
  const experienceSection = document.getElementById('experience-section');
  if (experienceSection) {
    const expButton = experienceSection.querySelector('.expand-button') as HTMLButtonElement;
    if (expButton && !expButton.classList.contains('expanded')) {
      expButton.click();
    }
  }

  // Check if target is in job items container
  const jobContainer = targetEl.closest('.job-items-container');
  if (jobContainer) {
    const jobExpandBtn = jobContainer.querySelector('.job-expand-btn') as HTMLButtonElement;
    if (jobExpandBtn && !jobExpandBtn.classList.contains('expanded')) {
      jobExpandBtn.click();
    }
  }

  // Wait for expansion animations
  await new Promise(resolve => setTimeout(resolve, 300));

  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
