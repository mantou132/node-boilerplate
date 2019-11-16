use neon::prelude::*;

fn subtract(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let a = cx.argument::<JsNumber>(0)?.value() as i32;
    let b = cx.argument::<JsNumber>(1)?.value() as i32;
    Ok(cx.number(a - b))
}
register_module!(mut cx, {
    cx.export_function("subtract", subtract)?;
    Ok(())
});
