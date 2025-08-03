function scrollToComments() {
    const comments = document.getElementById('comments');
  
    // اسکرول حرفه‌ای با GSAP
    gsap.to(window, {
      duration: 1,
      scrollTo: comments,
      ease: "power2.out",
      onComplete: () => {
        // هایلایت بخش نظرات
        comments.classList.add('highlight');
        setTimeout(() => {
          comments.classList.remove('highlight');
        }, 2000);
  
        // ثبت لاگ یا آمارگیری
        console.log("User clicked to view comments");
      }
    });
  }
  