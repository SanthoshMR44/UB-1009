document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

    if (dropZone && imageInput) {
        dropZone.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                imageInput.click();
            }
        });

        ['dragenter', 'dragover'].forEach(evt => {
            dropZone.addEventListener(evt, function(e) {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            });
        });

        ['dragleave', 'drop'].forEach(evt => {
            dropZone.addEventListener(evt, function(e) {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
            });
        });

        dropZone.addEventListener('drop', function(e) {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                imageInput.files = files;
                showPreview(files[0]);
            }
        });

        imageInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                showPreview(this.files[0]);
            }
        });
    }

    function showPreview(file) {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = function(e) {
            if (imagePreview && imagePreviewContainer) {
                imagePreview.src = e.target.result;
                imagePreviewContainer.classList.remove('d-none');
            }
        };
        reader.readAsDataURL(file);
    }

    const habitChecks = document.querySelectorAll('.habit-check');
    habitChecks.forEach(function(cb) {
        cb.addEventListener('change', function() {
            const target = document.getElementById(this.dataset.target);
            if (target) {
                if (this.checked) {
                    target.classList.remove('d-none');
                } else {
                    target.classList.add('d-none');
                }
            }
        });
    });

    const screeningForm = document.getElementById('screeningForm');
    if (screeningForm) {
        screeningForm.addEventListener('submit', function() {
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const submitSpinner = document.getElementById('submitSpinner');
            if (submitBtn && submitText && submitSpinner) {
                submitBtn.disabled = true;
                submitText.classList.add('d-none');
                submitSpinner.classList.remove('d-none');
            }
        });
    }

    const progressBars = document.querySelectorAll('.progress-bar[data-target]');
    progressBars.forEach(function(bar) {
        setTimeout(function() {
            bar.style.width = bar.dataset.target + '%';
        }, 300);
    });

    const toasts = document.querySelectorAll('.toast');
    toasts.forEach(function(toast) {
        setTimeout(function() {
            toast.classList.remove('show');
        }, 5000);
    });
});
