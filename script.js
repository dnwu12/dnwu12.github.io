// 페이지 로드 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// 내비게이션 활성화 표시
const currentPath = window.location.pathname.split("/").pop();
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

// 마우스 인터랙션 (선택 사항 - 배경에 미세한 불빛 효과 등)
console.log("Dnwu's ADOFAI Site Loaded Successfully.");
