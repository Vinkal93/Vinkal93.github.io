document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Tab functionality
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabName = trigger.getAttribute('data-tab');
            
            // Deactivate all tabs
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activate the clicked tab
            trigger.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
});

