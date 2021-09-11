<template>
    <div class="overlay">
        <div class="card">
            <div class="card-body">
                <form class="row" enctype="multipat/form-data">
                    <div class="col-6 form-group">
                        <label for="name">Name</label>
                        <input id="name" name="name" type="text" class="form-control" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="surname">Surname</label>
                        <input id="surname" name="surname" type="text" class="form-control" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="email">Email Address</label>
                        <input class="form-control" id="email" name="email" type="email" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="password">Password</label>
                        <input class="form-control" id="password" name="password" type="password" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="username">Username </label>
                        <input class="form-control" id="username" name="username" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="company">Company </label>
                        <input class="form-control" id="company" name="company" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="phone_number">Phone Nnumber </label>
                        <input class="form-control" id="phone_number" name="phone_number" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="phone_country_code">Phone Country Code </label>
                        <input class="form-control" id="phone_country_code" name="phone_country_code" type="text" value="">
                    </div>
                    <div class="col-6 form-group">
                        <label for="image">Image</label>
                        <br>
                        <input class="" id="image" name="image" type="file">
                    </div> 
                    <div class="col-6"> 
                    </div>
                    <div class="col-6">
                        <button class="btn btn-info" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>