<template>
  <div class="container container-sm">
    <div class="header d-flex">
      <div class="left d-flex">
        <h1 class="display-5">My Notes</h1>
      </div>
      <div class="ms-auto p-2 d-flex align-self-center">
        <div
          class="add-btn btn btn-outline-primary btn-sm rounded-pill d-flex align-items-center p-2"
        >
          <div class="inner-button d-flex">
            <img src="./assets/icons/icon-plus.svg" alt="" />
          </div>
          <span>Add Note</span>
        </div>
      </div>
    </div>
    <div id="note-container">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 800px;
  padding-top: 20px;
}

.add-btn {
  .inner-button {
    margin-right: 8px;
    border-radius: 50%;
    padding: 8px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }

  span {
    margin-right: 10px;
  }
}
</style>
