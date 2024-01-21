const box = `
<!-- extension name -->
			<h1>Click Master</h1>
			<!-- controller -->
			<div class="clickmaster__controler">
				<p class="clickmaster__realClick">Real Click: <strong id="realClick">OFF</strong></p>
				<p class="clickmaster__sameTime">Same Time: <strong id="realClick">OFF</strong></p>
				<p class="clickmaster__AutoNext">Auto Next: <strong id="realClick">OFF</strong></p>
			</div>
			<!-- main text -->
			<div class="clickmaster__main">
				<h3 class="clickmaster__mainText">Main Focus</h3>
				<p id="mainText">320</p>
			</div>
			<!-- show seats -->
			<p class="clickmaster__totalSeats">Seats: <strong id="realClick">130</strong></p>
			<!-- cart erace button -->
			<button type="button" id="eraseBtn">Erase Button</button>
`;

const floatingContainer = document.createElement("div");
floatingContainer.classList.add("clickmaster__floatingContainer");
floatingContainer.innerHTML = box;

export default floatingContainer;
