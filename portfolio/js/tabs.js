document.addEventListener('DOMContentLoaded', function() {
    var webProjectsTab = document.querySelector('#web-projects-tab');
    var toolsTab = document.querySelector('#tools-tab');
    var webProjectsContent = document.querySelector('#web-projects-content');
    var toolsContent = document.querySelector('#tools-content');
  
    webProjectsTab.addEventListener('click', function() {
      webProjectsTab.classList.add('is-active');
      toolsTab.classList.remove('is-active');
      webProjectsContent.style.display = 'block';
      toolsContent.style.display = 'none';
    });
  
    toolsTab.addEventListener('click', function() {
      toolsTab.classList.add('is-active');
      webProjectsTab.classList.remove('is-active');
      toolsContent.style.display = 'block';
      webProjectsContent.style.display = 'none';
    });
});