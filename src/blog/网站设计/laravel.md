---
title: laravel重点部分
createTime: 2026/08/26 08:59:57
permalink: /article/wbew5g6i/
password: wzsj
---

## 路由

### 常用路由

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

一般直接绑定控制器即可，不需要使用回调函数

```php
Route::get('/', [UserController::class, 'show']);
```

### 特殊路由

```php
Route::match(['get', 'post'], '/', function () {
    // ...
});

Route::any('/', function () {
    // ...
});

//                                 第三个参数可以设置状态码，默认是 302
Route::redirect('/here', '/there', 301);

//                                 第三个参数是传给视图的参数
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```

:::tip
路由的定义也有顺序关系

比如我们需要在 `/` 下定义一个 `any` 路由和一个 `post` 路由

如果你先定义了 `any` 路由，那么所有的请求都会被 `any` 路由匹配到，`post` 路由将永远不会被匹配到。
:::

### 路由参数

```php
Route::get('user/{id}', function ($id) {
    return 'User '.$id;
});
```

在控制器里也是一样的

::: code-tabs#config
@tab /route/api.php
```php
Route::get('user/{id}', [UserController::class, 'show']);
```
:::

::: code-tabs#config
@tab /app/Http/Controllers/UserController.php
```php
class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        return 'User '.$id;
    }
}
```
:::

路由参数的值有时候是可选的, 在参数的结尾加上 `?` 就可以了, 但是在后面的处理函数里要给参数一个默认值

```php
Route::get('user/{name?}', function ($name = null) {
    return $name;
});
```

### 分组

分组一般配合 `prefix`、`middleware` 等使用

`prefix` 是路由前缀，比如原本的路由是 `/users`，加上 `prefix('admin')` 后就变成了 `/admin/users`

`middleware` 是中间件，所有的路由都会经过中间件的处理

```php
Route::prefix('admin')->group(function () {
    Route::get('users', function () {});
});

// 此处也可以直接导入中间件的类
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {});
});
```

## 中间件


一般在路由中使用中间件需要先在 `/bootstrap/app.php` 中注册

::: code-tabs#config
@tab /bootstrap/app.php
``` php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // 在此处调用 alias 方法注册中间件别名
        $middleware->alias([
            'auth' => \App\Http\Middleware\Auth::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
```
:::


## CSRF

你只需要记住，这个东西只有在你把接口定义在了 `/routes/web.php` 里才会生效，如果你把接口定义在了 `/routes/api.php` 里，那么 CSRF 就不会生效。

然后一般是这样用的, 在 `blade` 模板里使用 `@csrf` 指令就可以了，不然的话你会收到一个 `419` 的错误，表示 CSRF 验证失败。

```php
<form method="POST" action="/profile">
    @csrf
    ...
</form>
```

## blade模板

### 插值语法

中间的 `$name` 是一个变量, 如果你需要输出一个在变量中的 HTML 代码, 那么你需要使用 `{!! $name !!}` 来输出, 否则的话会被转义成普通文本

```php
{{ $name }}

{!! $name !!}
```

### 控制语法

```php
@if(condition)
    // 条件为 true 时执行的代码
@elseif(condition)
    // 条件为 true 时执行的代码
@else
    // 条件为 false 时执行的代码
@endif
```

### 循环语法


```php
@foreach($users as $user)
    // 循环体
@endforeach

@for ($i = 0; $i < 10; $i++)
    // 循环体
@endfor

@while (condition)
    // 循环体

    // 正常的continue和break语法也是在所有循环中可用的
    @continue
    @break
@endwhile
```

### 样式语法


```php
@php
    $isActive = false;
    $hasError = true;
@endphp

//    这里表示如果 $isActive 为 true，则添加 font-bold 类，否则添加 text-gray-500 类
//    如果 $hasError 为 true，则添加 bg-red 类
<span @class([
    'p-4',
    'font-bold' => $isActive,
    'text-gray-500' => ! $isActive,
    'bg-red' => $hasError,
])></span>

<span class="p-4 text-gray-500 bg-red"></span>

//    这里表示如果 $isActive 为 true，则添加 font-weight: bold 样式，否则不添加
<span @style([
    'background-color: red',
    'font-weight: bold' => $isActive,
])></span>
```

### 标签语法


常用的一些 `html` 属性也有对应的命令, 可以省去一些自己去写 `if` 的麻烦, 例如 `checked`、`selected`、`disabled`、`readonly`、`required`

```php
<input
    type="checkbox"
    name="active"
    value="active"
    @checked(true)
/>


<select name="version">
    <option value="aa" @selected(false)>
        aaa
    </option>
</select>

<button type="submit" @disabled(true)>Submit</button>

<input
    type="email"
    name="email"
    value="email@laravel.com"
    @readonly(false)
/>

<input
    type="text"
    name="title"
    value="title"
    @required(true)
/>
```

## 表单验证

所有可用规则: [https://www.laravel.wiki/validation#%E5%8F%AF%E7%94%A8%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99](https://www.laravel.wiki/validation#%E5%8F%AF%E7%94%A8%E9%AA%8C%E8%AF%81%E8%A7%84%E5%88%99)

```php
$validator = Validator::make($request->post(), [
    "name" => "required|string|max:255",
    "email" => "required|email|unique:users",
    "password" => "required|string|min:6|confirmed",
    // confirmed规则默认会去验证password_confirmation字段, 如果你想要验证其他字段, 那么就需要使用same规则来验证
    // password也就是当前字段的名称, 比如密码字段叫aaa, 那么验证的字段就是 aaa_confirmation
    // "password_confirmation" => "required|string|same:password"
]);

// 不过这里的一些过滤规则只能和laravel自带的blade配合使用，我们可以让他更加通用一些
if ($validator->fails()) {}
```

## 集合

所有可用方法: [https://www.laravel.wiki/collections#%E5%8F%AF%E7%94%A8%E6%96%B9%E6%B3%95](https://www.laravel.wiki/collections#%E5%8F%AF%E7%94%A8%E6%96%B9%E6%B3%95)

```php
$collection = collect([1, 2, 3]);
$collection->all(); // [1, 2, 3]
$collection->avg(); // 2
$collection->chunk(2); // [[1, 2], [3]]
$collection->map(function ($item, $key) {
    return $item * 2;
}); // [2, 4, 6]
$collection->filter(function ($item, $key) {
    return $item > 2;
}); // [3]
```

## 辅助函数

最常用的就是调试命令

```php
dd($var); // 打印变量并终止程序
dump($var); // 打印变量但不终止程序
```

可用辅助函数: [https://www.laravel.wiki/helpers#%E5%85%B6%E4%BB%96](https://www.laravel.wiki/helpers#%E5%85%B6%E4%BB%96)

只要看这个其他就够了

## ORM操作

[创建模型](./网站设计.md#创建模型)

[创建迁移](./网站设计.md#迁移)

### 构造器

#### 获取所有数据

```php
$users = User::query()->get();
```

#### 查询条件

```php
// 查询年龄大于18岁的用户
$users = User::query()->where('age', '>', 18)->get();

// 查询年龄大于18岁且名字是John的用户
$users = User::query()->where('age', '>', 18)->where('name', '=', 'John')->get();
// 简化写法
$users = User::query()->where([
  "age" => 18,
  "name" => "John"
])->get();

// 也支持高级数组写法
$users = User::query()->where([
  ["age", ">", 18],
  ["name", "=", "John"]
])->get();

// 查询年龄大于18岁或名字包含John的用户
$users = User::query()->where('age', '>', 18)->orWhere('name', 'like', '%John%')->get();

// 查询id在1,2,3之间的用户
$users = User::query()->whereIn('id', [1, 2, 3])->get();
``` 

#### 获取条目数量

```php
$count = User::query()->where('age', '>', 18)->count();
```

#### 更新数据

```php
User::query()->where('id', 1)->update(['name' => 'New Name']);
```

#### 删除数据

```php
User::query()->where('id', 1)->delete();
```

#### 新建数据

```php
User::query()->create([
    'name' => 'John Doe',
    'email' => 'john.doe@example.com',
    'password' => bcrypt('password'),
]);
```

### 高级用法

[关联查询](../后端/php/laravel/数据库关联查询.md)