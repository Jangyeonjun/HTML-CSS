const container = document.getElementById('container');
const sections = document.querySelectorAll('.section_1');
const totalSections = sections.length;
let currentIndex = 0;
let horizontalScrollActive = true;

function scrollHandler(event) {
    if (horizontalScrollActive) {
        if (event.deltaY > 0) {
            if (currentIndex < totalSections - 1) {
                currentIndex++;
            } else {
                // 마지막 섹션일 때 세로 스크롤 활성화
                horizontalScrollActive = false;
                document.body.style.overflowY = "auto"; // 세로 스크롤 활성화
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        container.style.transform = `translateX(-${currentIndex * 100}vw)`;
        event.preventDefault(); // 기본 스크롤 방지
    }
}

// 컨테이너 위에서만 스크롤 이벤트 활성화
container.addEventListener('mouseenter', () => {
    if (horizontalScrollActive) {
        window.addEventListener('wheel', scrollHandler, { passive: false });
    }
});

container.addEventListener('mouseleave', () => {
    window.removeEventListener('wheel', scrollHandler);
});