const box = `
<!-- extension name -->
			<h1>Click Master</h1>
			<!-- controller -->
			<div class="clickmaster__controler">
				<p class="clickmaster__realClick">Real Click: <strong id="clickmaster__realClick">OFF</strong></p>
				<p class="clickmaster__sameTime">Same Time: <strong id="clickmaster__sameTime">OFF</strong></p>
				<p class="clickmaster__AutoNext">Auto Next: <strong id="clickmaster__AutoNext">OFF</strong></p>
			</div>
			<!-- main text -->
			<div class="clickmaster__main"></div>
			<!-- show seats -->
			<p class="clickmaster__totalSeats">Seats: <strong id="clickmaster__totalSeatsNumber">--</strong></p>
			<!-- cart erace button -->
			<button type="button" id="eraseBtn">Erase Button</button>
`;

const floatingContainer = document.createElement("div");
floatingContainer.classList.add("clickmaster__floatingContainer");
floatingContainer.innerHTML = box;

export default floatingContainer;
