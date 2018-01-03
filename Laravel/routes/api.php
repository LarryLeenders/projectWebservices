<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/dismissJob/{id}', function (Request $request, $id){
    //TODO: implentatie voor huidig ingelogde user hebben
    DB::table('users_disliked_jobs')->insert(['userID' => 1, 'jobID' => $id]);
    DB::table('user_acted_on_jobs')->insert(['userID' => 1, 'jobID' => $id]);
    return response()->json("done",200);
})->where('id', '[0-9]+');

Route::get('/likeJob/{id}', function (Request $request, $id){
    //TODO: implentatie voor huidig ingelogde user hebben
    DB::table('users_liked_jobs')->insert(['userID' => 1, 'jobID' => $id]);
    DB::table('user_acted_on_jobs')->insert(['userID' => 1, 'jobID' => $id]);
    return response()->json("done",200);
})->where('id', '[0-9]+');

Route::delete('/deleteContact/{id}', function (Request $request, $id){
    //TODO: implentatie voor huidig ingelogde user hebben
    $query = DB::delete(
        "DELETE FROM users_liked_jobs WHERE userID = 1 AND jobID = $id"
    );
    return response()->json($query,200);
})->where('id', '[0-9]+');


Route::get('/getContacts', function (Request $request){
    //TODO: WHERE clause moet nog implentatie voor huidig ingelogde user hebben
    $query = DB::select("SELECT forCompany, contactID, companyID,name, email, title, companyname, jobID 
              FROM `users_liked_jobs` 
              INNER JOIN jobs USING (jobID) 
              INNER JOIN contacts USING (contactID)
              INNER JOIN companies USING (companyID)
              ");

    return response()->json($query,200);
});

Route::get('/getJobsForSwipe', function (Request $request){
    //TODO: WHERE clause moet nog implentatie voor huidig ingelogde user hebben
    $query = DB::select("
            SELECT title, description, companyname, jobs.jobID as ID
            FROM jobs LEFT JOIN user_acted_on_jobs ON jobs.jobID = user_acted_on_jobs.jobID
            INNER JOIN companies USING (companyID)
            WHERE user_acted_on_jobs.jobID IS NULL
            ");
    return response()->json($query,200);
});

Route::get('/getJobsForCrud', function (Request $request){
    $query = DB::select("
            SELECT title, description, jobID, companyID, contactID
            FROM jobs
            ");
    return response()->json($query,200);
});

Route::delete('/deleteJobFromCrud/{id}', function (Request $request, $id){
    $query = DB::delete("
            DELETE FROM jobs
            WHERE jobID = $id
            ");
    return response()->json($query,200);
})->where('id', '[0-9]+');

Route::patch('/updateJobFromCrud/{id}', function(Request $request, $id){
   /* $request->validate(["compidentifier" => 'required',
                        'contactidentifier' => 'required',
                        'description' => 'required',
                        'title' => 'required']);*/
    $compID = $request->input("compidentifier");
    $contactID = $request->input("contactidentifier");
    $description = $request->input("description");
    $title = $request->input("title");

    $contIDExists = DB::select("
    SELECT * 
    FROM contacts
    WHERE contactID='$contactID' AND forCompany='$compID'
    ");

    $compIDExists = DB::select("
    SELECT * 
    FROM contacts
    WHERE contactID='$contactID'
    ");

    if(count($compIDExists) > 0  && count($contIDExists) > 0) {
        $query = DB::update("
           UPDATE jobs
           SET title='$title', description='$description', companyID='$compID', contactID='$contactID' 
           WHERE jobID=$id
    ");
        return response()->json($query, 200);
    }else{
        return response()->json("INVALID DATA",200);
    }
})->where('id', '[0-9]+');

Route::get('/getMaxCompID',function(Request $request){
    $query = DB::select("
            SELECT MAX(companyID) AS ID 
            FROM companies
            ");
    return response()->json($query,200);
});

Route::get('/getMaxContID',function(Request $request){
    $query = DB::select("
            SELECT MAX(contactID) AS ID 
            FROM contacts
            ");
    return response()->json($query,200);
});

Route::put('/addJobFromCrud',function(Request $request){
    $compID = $request->input("compID");
    $contactID = $request->input("contID");
    $description = $request->input("description");
    $title = $request->input("title");

    $query = DB::insert("
            INSERT INTO jobs(title, description, companyID, contactID)
            VALUES ('$title','$description',$compID,$contactID)
            ");
    return response()->json($query,200);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
