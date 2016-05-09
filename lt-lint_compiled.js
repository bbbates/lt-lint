if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28937 = {};return obj28937;
})();
cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});
cljs.core.async.impl.protocols.WritePort = (function (){var obj28939 = {};return obj28939;
})();
cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){if((function (){var and__19791__auto__ = port;if(and__19791__auto__)
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else
{var x__20430__auto__ = (((port == null))?null:port);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});
cljs.core.async.impl.protocols.Channel = (function (){var obj28941 = {};return obj28941;
})();
cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){if((function (){var and__19791__auto__ = chan;if(and__19791__auto__)
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else
{var x__20430__auto__ = (((chan == null))?null:chan);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});
cljs.core.async.impl.protocols.Handler = (function (){var obj28943 = {};return obj28943;
})();
cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.commit = (function commit(h){if((function (){var and__19791__auto__ = h;if(and__19791__auto__)
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else
{return and__19791__auto__;
}
})())
{return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else
{var x__20430__auto__ = (((h == null))?null:h);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});
cljs.core.async.impl.protocols.Buffer = (function (){var obj28945 = {};return obj28945;
})();
cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){if((function (){var and__19791__auto__ = b;if(and__19791__auto__)
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else
{var x__20430__auto__ = (((b == null))?null:b);return (function (){var or__19803__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});
cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){return b;
});
var add_BANG___2 = (function (b,itm){if(!((itm == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"itm","itm",-1640426917,null)))))].join('')));
}
return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28947 = {};return obj28947;
})();
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.buffers')) {
goog.provide('cljs.core.async.impl.buffers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.buffers.acopy = (function acopy(src,src_start,dest,dest_start,len){var cnt = 0;while(true){
if((cnt < len))
{(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));
{
var G__28883 = (cnt + 1);
cnt = G__28883;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
})
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer";
cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/RingBuffer");
});
cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){var self__ = this;
var _ = this;if((self__.length === 0))
{return null;
} else
{var x = (self__.arr[self__.tail]);(self__.arr[self__.tail] = null);
self__.tail = ((self__.tail + 1) % self__.arr.length);
self__.length = (self__.length - 1);
return x;
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){var self__ = this;
var _ = this;(self__.arr[self__.head] = x);
self__.head = ((self__.head + 1) % self__.arr.length);
self__.length = (self__.length + 1);
return null;
});
cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){var self__ = this;
var this$ = this;if(((self__.length + 1) === self__.arr.length))
{this$.resize();
} else
{}
return this$.unshift(x);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){var self__ = this;
var _ = this;var new_arr_size = (self__.arr.length * 2);var new_arr = (new Array(new_arr_size));if((self__.tail < self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,self__.length);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail > self__.head))
{cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,0,(self__.arr.length - self__.tail));
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,0,new_arr,(self__.arr.length - self__.tail),self__.head);
self__.tail = 0;
self__.head = self__.length;
return self__.arr = new_arr;
} else
{if((self__.tail === self__.head))
{self__.tail = 0;
self__.head = 0;
return self__.arr = new_arr;
} else
{return null;
}
}
}
});
cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){var self__ = this;
var this$ = this;var n__20651__auto__ = self__.length;var x = 0;while(true){
if((x < n__20651__auto__))
{var v_28884 = this$.pop();if(keep_QMARK_.call(null,v_28884))
{this$.unshift(v_28884);
} else
{}
{
var G__28885 = (x + 1);
x = G__28885;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.async.impl.buffers.__GT_RingBuffer = (function __GT_RingBuffer(head,tail,length,arr){return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});
cljs.core.async.impl.buffers.ring_buffer = (function ring_buffer(n){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't create a ring buffer of size 0"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,">",">",-1640531465,null),new cljs.core.Symbol(null,"n","n",-1640531417,null),0)))].join('')));
}
return (new cljs.core.async.impl.buffers.RingBuffer(0,0,0,(new Array(n))));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer";
cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return (self__.buf.length === self__.n);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;self__.buf.unbounded_unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function __GT_FixedBuffer(buf,n){return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});
cljs.core.async.impl.buffers.fixed_buffer = (function fixed_buffer(n){return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer";
cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{} else
{self__.buf.unshift(itm);
}
return this$__$1;
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function __GT_DroppingBuffer(buf,n){return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});
cljs.core.async.impl.buffers.dropping_buffer = (function dropping_buffer(n){return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true;
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer";
cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.length;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return false;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.buf.pop();
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){var self__ = this;
var this$__$1 = this;if((self__.buf.length === self__.n))
{cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else
{}
self__.buf.unshift(itm);
return this$__$1;
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = true;
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function __GT_SlidingBuffer(buf,n){return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});
cljs.core.async.impl.buffers.sliding_buffer = (function sliding_buffer(n){return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.message_channel = null;
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,32);
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = 1024;
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){cljs.core.async.impl.dispatch.running_QMARK_ = true;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
var count_28933 = 0;while(true){
var m_28934 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28934 == null))
{} else
{m_28934.call(null);
if((count_28933 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28935 = (count_28933 + 1);
count_28933 = G__28935;
continue;
}
} else
{}
}
break;
}
cljs.core.async.impl.dispatch.running_QMARK_ = false;
if((cljs.core.async.impl.dispatch.tasks.length > 0))
{return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else
{return null;
}
});
if(typeof MessageChannel !== 'undefined')
{cljs.core.async.impl.dispatch.message_channel = (new MessageChannel());
cljs.core.async.impl.dispatch.message_channel.port1.onmessage = (function (msg){return cljs.core.async.impl.dispatch.process_messages.call(null);
});
} else
{}
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;if(and__19791__auto__)
{return cljs.core.async.impl.dispatch.running_QMARK_;
} else
{return and__19791__auto__;
}
})()))
{return null;
} else
{cljs.core.async.impl.dispatch.queued_QMARK_ = true;
if(typeof MessageChannel !== 'undefined')
{return cljs.core.async.impl.dispatch.message_channel.port2.postMessage(0);
} else
{if(typeof setImmediate !== 'undefined')
{return setImmediate(cljs.core.async.impl.dispatch.process_messages);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return setTimeout(cljs.core.async.impl.dispatch.process_messages,0);
} else
{return null;
}
}
}
}
});
cljs.core.async.impl.dispatch.run = (function run(f){cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){return setTimeout(f,delay);
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.channels')) {
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28889 = (function (val,box,meta28890){
this.val = val;
this.box = box;
this.meta28890 = meta28890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28889.cljs$lang$type = true;
cljs.core.async.impl.channels.t28889.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28889";
cljs.core.async.impl.channels.t28889.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28889");
});
cljs.core.async.impl.channels.t28889.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28891){var self__ = this;
var _28891__$1 = this;return self__.meta28890;
});
cljs.core.async.impl.channels.t28889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28891,meta28890__$1){var self__ = this;
var _28891__$1 = this;return (new cljs.core.async.impl.channels.t28889(self__.val,self__.box,meta28890__$1));
});
cljs.core.async.impl.channels.__GT_t28889 = (function __GT_t28889(val__$1,box__$1,meta28890){return (new cljs.core.async.impl.channels.t28889(val__$1,box__$1,meta28890));
});
}
return (new cljs.core.async.impl.channels.t28889(val,box,null));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})
cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";
cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__20373__auto__,writer__20374__auto__,opts__20375__auto__){return cljs.core._write.call(null,writer__20374__auto__,"cljs.core.async.impl.channels/PutBox");
});
cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){return (new cljs.core.async.impl.channels.PutBox(handler,val));
});
cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = 64;
cljs.core.async.impl.channels.MMC = (function (){var obj28893 = {};return obj28893;
})();
cljs.core.async.impl.channels.abort = (function abort(this$){if((function (){var and__19791__auto__ = this$;if(and__19791__auto__)
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else
{return and__19791__auto__;
}
})())
{return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else
{var x__20430__auto__ = (((this$ == null))?null:this$);return (function (){var or__19803__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";
cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.closed;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(self__.closed)
{return null;
} else
{self__.closed = true;
if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (self__.puts.length === 0);
} else
{return and__19791__auto__;
}
})()))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
while(true){
var taker_28908 = self__.takes.pop();if((taker_28908 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28908))
{var take_cb_28909 = cljs.core.async.impl.protocols.commit.call(null,taker_28908);var val_28910 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28909,val_28910,taker_28908,this$__$1){
return (function (){return take_cb_28909.call(null,val_28910);
});})(take_cb_28909,val_28910,taker_28908,this$__$1))
);
} else
{}
{
continue;
}
}
break;
}
return null;
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){var self__ = this;
var this$__$1 = this;if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))
{return null;
} else
{if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var _ = cljs.core.async.impl.protocols.commit.call(null,handler);var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf)))
{} else
{var putter_28911 = self__.puts.pop();if((putter_28911 == null))
{} else
{var put_handler_28912 = putter_28911.handler;var val_28913 = putter_28911.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28912))
{var put_cb_28914 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28912);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28914,put_handler_28912,val_28913,putter_28911,_,retval,this$__$1){
return (function (){return put_cb_28914.call(null,true);
});})(put_cb_28914,put_handler_28912,val_28913,putter_28911,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28913)))
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
} else
{}
{
continue;
}
}
}
break;
}
return retval;
} else
{var putter = (function (){while(true){
var putter = self__.puts.pop();if(cljs.core.truth_(putter))
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler))
{return putter;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(putter))
{var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,putter.val);
} else
{if(cljs.core.truth_(self__.closed))
{if(cljs.core.truth_(self__.buf))
{self__.add_BANG_.call(null,self__.buf);
} else
{}
if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,handler);
} else
{return and__19791__auto__;
}
})()))
{var has_val = (function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})();var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);return cljs.core.async.impl.channels.box.call(null,val);
} else
{return null;
}
} else
{if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_takes = 0;
self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else
{self__.dirty_takes = (self__.dirty_takes + 1);
}
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending takes are allowed on a single channel.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"takes","takes",-1530407291,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.takes.unbounded_unshift(handler);
return null;
}
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){var self__ = this;
var this$__$1 = this;if(!((val == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't put nil in on a channel"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"val","val",-1640415014,null)))))].join('')));
}
var closed__$1 = self__.closed;if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))))
{return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else
{return and__19791__auto__;
}
})()))
{cljs.core.async.impl.protocols.commit.call(null,handler);
var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));while(true){
if(((self__.takes.length > 0)) && ((cljs.core.count.call(null,self__.buf) > 0)))
{var taker_28915 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28915))
{var take_cb_28916 = cljs.core.async.impl.protocols.commit.call(null,taker_28915);var val_28917__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28916,val_28917__$1,taker_28915,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28916.call(null,val_28917__$1);
});})(take_cb_28916,val_28917__$1,taker_28915,done_QMARK_,closed__$1,this$__$1))
);
} else
{{
continue;
}
}
} else
{}
break;
}
if(done_QMARK_)
{cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else
{}
return cljs.core.async.impl.channels.box.call(null,true);
} else
{var taker = (function (){while(true){
var taker = self__.takes.pop();if(cljs.core.truth_(taker))
{if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)))
{return taker;
} else
{{
continue;
}
}
} else
{return null;
}
break;
}
})();if(cljs.core.truth_(taker))
{var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);
return cljs.core.async.impl.channels.box.call(null,true);
} else
{if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY))
{self__.dirty_puts = 0;
self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else
{self__.dirty_puts = (self__.dirty_puts + 1);
}
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No more than "),cljs.core.str(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str(" pending puts are allowed on a single channel."),cljs.core.str(" Consider using a windowed buffer.")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"<","<",-1640531467,null),cljs.core.list(new cljs.core.Symbol(null,".-length",".-length",1395928862,null),new cljs.core.Symbol(null,"puts","puts",-1637078787,null)),new cljs.core.Symbol("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",-1989946393,null))))].join('')));
}
self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
return null;
}
}
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;while(true){
var putter_28918 = self__.puts.pop();if((putter_28918 == null))
{} else
{var put_handler_28919 = putter_28918.handler;var val_28920 = putter_28918.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28919))
{var put_cb_28921 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28919);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28921,put_handler_28919,val_28920,putter_28918,this$__$1){
return (function (){return put_cb_28921.call(null,true);
});})(put_cb_28921,put_handler_28919,val_28920,putter_28918,this$__$1))
);
} else
{{
continue;
}
}
}
break;
}
self__.puts.cleanup(cljs.core.constantly.call(null,false));
return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});
cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){console.log(ex);
return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){var else$ = (function (){var or__19803__auto__ = exh;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);if((else$ == null))
{return buf;
} else
{return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){return chan.call(null,buf,null);
});
var chan__2 = (function (buf,xform){return chan.call(null,buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,cljs.core.async.impl.buffers.ring_buffer.call(null,32),0,buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);return ((function (add_BANG_){
return (function() {
var G__28922 = null;
var G__28922__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28896){var t = e28896;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28922__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28897){var t = e28897;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28922 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28922__1.call(this,buf__$1);
case 2:
return G__28922__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28922;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.timers')) {
goog.provide('cljs.core.async.impl.timers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.timers.MAX_LEVEL = 15;
cljs.core.async.impl.timers.P = (1 / 2);
cljs.core.async.impl.timers.random_level = (function() {
var random_level = null;
var random_level__0 = (function (){return random_level.call(null,0);
});
var random_level__1 = (function (level){while(true){
if(((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))
{{
var G__28968 = (level + 1);
level = G__28968;
continue;
}
} else
{return level;
}
break;
}
});
random_level = function(level){
switch(arguments.length){
case 0:
return random_level__0.call(this);
case 1:
return random_level__1.call(this,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random_level.cljs$core$IFn$_invoke$arity$0 = random_level__0;
random_level.cljs$core$IFn$_invoke$arity$1 = random_level__1;
return random_level;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode";
cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipListNode");
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.val),self__.key);
});
cljs.core.async.impl.timers.__GT_SkipListNode = (function __GT_SkipListNode(key,val,forward){return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});
cljs.core.async.impl.timers.skip_list_node = (function() {
var skip_list_node = null;
var skip_list_node__1 = (function (level){return skip_list_node.call(null,null,null,level);
});
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28969 = 0;while(true){
if((i_28969 < arr.length))
{(arr[i_28969] = null);
{
var G__28970 = (i_28969 + 1);
i_28969 = G__28970;
continue;
}
} else
{}
break;
}
return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
});
skip_list_node = function(k,v,level){
switch(arguments.length){
case 1:
return skip_list_node__1.call(this,k);
case 3:
return skip_list_node__3.call(this,k,v,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
skip_list_node.cljs$core$IFn$_invoke$arity$1 = skip_list_node__1;
skip_list_node.cljs$core$IFn$_invoke$arity$3 = skip_list_node__3;
return skip_list_node;
})()
;
cljs.core.async.impl.timers.least_greater_node = (function() {
var least_greater_node = null;
var least_greater_node__3 = (function (x,k,level){return least_greater_node.call(null,x,k,level,null);
});
var least_greater_node__4 = (function (x,k,level,update){while(true){
if(!((level < 0)))
{var x__$1 = (function (){var x__$1 = x;while(true){
var temp__4090__auto__ = (x__$1.forward[level]);if(cljs.core.truth_(temp__4090__auto__))
{var x_SINGLEQUOTE_ = temp__4090__auto__;if((x_SINGLEQUOTE_.key < k))
{{
var G__28971 = x_SINGLEQUOTE_;
x__$1 = G__28971;
continue;
}
} else
{return x__$1;
}
} else
{return x__$1;
}
break;
}
})();if((update == null))
{} else
{(update[level] = x__$1);
}
{
var G__28972 = x__$1;
var G__28973 = k;
var G__28974 = (level - 1);
var G__28975 = update;
x = G__28972;
k = G__28973;
level = G__28974;
update = G__28975;
continue;
}
} else
{return x;
}
break;
}
});
least_greater_node = function(x,k,level,update){
switch(arguments.length){
case 3:
return least_greater_node__3.call(this,x,k,level);
case 4:
return least_greater_node__4.call(this,x,k,level,update);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
least_greater_node.cljs$core$IFn$_invoke$arity$3 = least_greater_node__3;
least_greater_node.cljs$core$IFn$_invoke$arity$4 = least_greater_node__4;
return least_greater_node;
})()
;

/**
* @constructor
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
})
cljs.core.async.impl.timers.SkipList.cljs$lang$type = true;
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList";
cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.timers/SkipList");
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var self__ = this;
var coll__$1 = this;var pr_pair = ((function (coll__$1){
return (function (keyval){return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
});
cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var iter = ((function (coll__$1){
return (function iter(node){return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){if((node == null))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),iter.call(null,(node.forward[0])));
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter.call(null,(self__.header.forward[0]));
});
cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{return x__$1.val = v;
} else
{var new_level = cljs.core.async.impl.timers.random_level.call(null);if((new_level > self__.level))
{var i_28976 = (self__.level + 1);while(true){
if((i_28976 <= (new_level + 1)))
{(update[i_28976] = self__.header);
{
var G__28977 = (i_28976 + 1);
i_28976 = G__28977;
continue;
}
} else
{}
break;
}
self__.level = new_level;
} else
{}
var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));var i = 0;while(true){
if((i <= self__.level))
{var links = (update[i]).forward;(x__$2.forward[i] = (links[i]));
return (links[i] = x__$2);
} else
{return null;
}
break;
}
}
});
cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){var self__ = this;
var coll = this;var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);var x__$1 = (x.forward[0]);if((!((x__$1 == null))) && ((x__$1.key === k)))
{var i_28978 = 0;while(true){
if((i_28978 <= self__.level))
{var links_28979 = (update[i_28978]).forward;if(((links_28979[i_28978]) === x__$1))
{(links_28979[i_28978] = (x__$1.forward[i_28978]));
{
var G__28980 = (i_28978 + 1);
i_28978 = G__28980;
continue;
}
} else
{{
var G__28981 = (i_28978 + 1);
i_28978 = G__28981;
continue;
}
}
} else
{}
break;
}
while(true){
if(((self__.level > 0)) && (((self__.header.forward[self__.level]) == null)))
{self__.level = (self__.level - 1);
{
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if((x_SINGLEQUOTE_ == null))
{return null;
} else
{if((x_SINGLEQUOTE_.key >= k))
{return x_SINGLEQUOTE_;
} else
{{
var G__28982 = x_SINGLEQUOTE_;
x__$1 = G__28982;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28983 = nx;
var G__28984 = (level__$1 - 1);
x = G__28983;
level__$1 = G__28984;
continue;
}
} else
{{
var G__28985 = x;
var G__28986 = (level__$1 - 1);
x = G__28985;
level__$1 = G__28986;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){var self__ = this;
var coll = this;var x = self__.header;var level__$1 = self__.level;while(true){
if(!((level__$1 < 0)))
{var nx = (function (){var x__$1 = x;while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);if(!((x_SINGLEQUOTE_ == null)))
{if((x_SINGLEQUOTE_.key > k))
{return x__$1;
} else
{{
var G__28987 = x_SINGLEQUOTE_;
x__$1 = G__28987;
continue;
}
}
} else
{if((level__$1 === 0))
{return x__$1;
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(nx))
{{
var G__28988 = nx;
var G__28989 = (level__$1 - 1);
x = G__28988;
level__$1 = G__28989;
continue;
}
} else
{{
var G__28990 = x;
var G__28991 = (level__$1 - 1);
x = G__28990;
level__$1 = G__28991;
continue;
}
}
} else
{if((x === self__.header))
{return null;
} else
{return x;
}
}
break;
}
});
cljs.core.async.impl.timers.__GT_SkipList = (function __GT_SkipList(header,level){return (new cljs.core.async.impl.timers.SkipList(header,level));
});
cljs.core.async.impl.timers.skip_list = (function skip_list(){return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,0),0));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = 10;
/**
* returns a channel that will close after msecs
*/
cljs.core.async.impl.timers.timeout = (function timeout(msecs){var timeout__$1 = ((new Date()).valueOf() + msecs);var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout__$1);var or__19803__auto__ = (cljs.core.truth_((function (){var and__19791__auto__ = me;if(cljs.core.truth_(and__19791__auto__))
{return (me.key < (timeout__$1 + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else
{return and__19791__auto__;
}
})())?me.val:null);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);cljs.core.async.impl.timers.timeouts_map.put(timeout__$1,timeout_channel);
cljs.core.async.impl.dispatch.queue_delay.call(null,((function (timeout_channel,or__19803__auto__,timeout__$1,me){
return (function (){cljs.core.async.impl.timers.timeouts_map.remove(timeout__$1);
return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
});})(timeout_channel,or__19803__auto__,timeout__$1,me))
,msecs);
return timeout_channel;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.ioc-helpers')) {
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28813 = (function (f,fn_handler,meta28814){
this.f = f;
this.fn_handler = fn_handler;
this.meta28814 = meta28814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28813.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28813.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28813";
cljs.core.async.impl.ioc_helpers.t28813.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28813");
});
cljs.core.async.impl.ioc_helpers.t28813.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28815){var self__ = this;
var _28815__$1 = this;return self__.meta28814;
});
cljs.core.async.impl.ioc_helpers.t28813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28815,meta28814__$1){var self__ = this;
var _28815__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28813(self__.f,self__.fn_handler,meta28814__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28813 = (function __GT_t28813(f__$1,fn_handler__$1,meta28814){return (new cljs.core.async.impl.ioc_helpers.t28813(f__$1,fn_handler__$1,meta28814));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28813(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28817){if((e28817 instanceof Object))
{var ex = e28817;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28817;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28820_28863 = state;(statearr_28820_28863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28820_28863[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28821_28864 = state;(statearr_28821_28864[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28821_28864[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28824_28865 = state;(statearr_28824_28865[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28824_28865[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28825_28866 = state;(statearr_28825_28866[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28825_28866[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28826){var map__28831 = p__28826;var map__28831__$1 = ((cljs.core.seq_QMARK_.call(null,map__28831))?cljs.core.apply.call(null,cljs.core.hash_map,map__28831):map__28831);var opts = map__28831__$1;var statearr_28832_28867 = state;(statearr_28832_28867[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28831,map__28831__$1,opts){
return (function (val){var statearr_28833_28868 = state;(statearr_28833_28868[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28831,map__28831__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28834_28869 = state;(statearr_28834_28869[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28826 = null;if (arguments.length > 3) {
  p__28826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28826);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28870){
var state = cljs.core.first(arglist__28870);
arglist__28870 = cljs.core.next(arglist__28870);
var cont_block = cljs.core.first(arglist__28870);
arglist__28870 = cljs.core.next(arglist__28870);
var ports = cljs.core.first(arglist__28870);
var p__28826 = cljs.core.rest(arglist__28870);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28826);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){return null;
});})(c))
));
}
cljs.core.async.impl.protocols.close_BANG_.call(null,c);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20384__auto__){var self__ = this;
var this__20384__auto____$1 = this;var h__20214__auto__ = self__.__hash;if(!((h__20214__auto__ == null)))
{return h__20214__auto__;
} else
{var h__20214__auto____$1 = cljs.core.hash_imap.call(null,this__20384__auto____$1);self__.__hash = h__20214__auto____$1;
return h__20214__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20389__auto__,k__20390__auto__){var self__ = this;
var this__20389__auto____$1 = this;return cljs.core._lookup.call(null,this__20389__auto____$1,k__20390__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28836,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28836,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28836,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28836,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28836,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28836,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28836,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28835){var self__ = this;
var this__20396__auto____$1 = this;var pred__28838 = cljs.core.keyword_identical_QMARK_;var expr__28839 = k__20397__auto__;if(cljs.core.truth_(pred__28838.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28839)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28835,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28838.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28839)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28835,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28838.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28839)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28835,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28838.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28839)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28835,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28838.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28839)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28835,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28835),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20403__auto__,writer__20404__auto__,opts__20405__auto__){var self__ = this;
var this__20403__auto____$1 = this;var pr_pair__20406__auto__ = ((function (this__20403__auto____$1){
return (function (keyval__20407__auto__){return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,cljs.core.pr_writer,""," ","",opts__20405__auto__,keyval__20407__auto__);
});})(this__20403__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__20404__auto__,pr_pair__20406__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__20405__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20394__auto__,entry__20395__auto__){var self__ = this;
var this__20394__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__20395__auto__))
{return cljs.core._assoc.call(null,this__20394__auto____$1,cljs.core._nth.call(null,entry__20395__auto__,0),cljs.core._nth.call(null,entry__20395__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__20394__auto____$1,entry__20395__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20401__auto__){var self__ = this;
var this__20401__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20393__auto__){var self__ = this;
var this__20393__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20385__auto__,other__20386__auto__){var self__ = this;
var this__20385__auto____$1 = this;if(cljs.core.truth_((function (){var and__19791__auto__ = other__20386__auto__;if(cljs.core.truth_(and__19791__auto__))
{return ((this__20385__auto____$1.constructor === other__20386__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__20385__auto____$1,other__20386__auto__));
} else
{return and__19791__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28835){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28835,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20383__auto__){var self__ = this;
var this__20383__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20387__auto__){var self__ = this;
var this__20387__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20398__auto__,k__20399__auto__){var self__ = this;
var this__20398__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__20399__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20398__auto____$1),self__.__meta),k__20399__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20399__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__20423__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__20423__auto__,writer__20424__auto__){return cljs.core._write.call(null,writer__20424__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28837){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28837),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28837),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28837),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28837),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28837),null,cljs.core.dissoc.call(null,G__28837,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28842 = state;(statearr_28842[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28842;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.not.call(null,exception_frame);
} else
{return and__19791__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = catch_block;if(cljs.core.truth_(and__19791__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28848 = state;(statearr_28848[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28848[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28848[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28848[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28848;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28849_28871 = state;(statearr_28849_28871[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28872 = state;
state = G__28872;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{var and__19791__auto____$1 = cljs.core.not.call(null,catch_block);if(and__19791__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto____$1;
}
} else
{return and__19791__auto__;
}
})()))
{var statearr_28850 = state;(statearr_28850[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28850[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28850;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28851 = state;(statearr_28851[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28851[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28851;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28852 = state;(statearr_28852[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28852[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28852;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("No matching clause"));
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
}
if(!lt.util.load.provided_QMARK_('cljs.core.async')) {
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25731 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25731 = (function (f,fn_handler,meta25732){
this.f = f;
this.fn_handler = fn_handler;
this.meta25732 = meta25732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25731.cljs$lang$type = true;
cljs.core.async.t25731.cljs$lang$ctorStr = "cljs.core.async/t25731";
cljs.core.async.t25731.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25731");
});
cljs.core.async.t25731.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25733){var self__ = this;
var _25733__$1 = this;return self__.meta25732;
});
cljs.core.async.t25731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25733,meta25732__$1){var self__ = this;
var _25733__$1 = this;return (new cljs.core.async.t25731(self__.f,self__.fn_handler,meta25732__$1));
});
cljs.core.async.__GT_t25731 = (function __GT_t25731(f__$1,fn_handler__$1,meta25732){return (new cljs.core.async.t25731(f__$1,fn_handler__$1,meta25732));
});
}
return (new cljs.core.async.t25731(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25735 = buff;if(G__25735)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25735.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25735.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25735);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25735);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",1080054743,null)))].join('')));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28438 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28438);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28438,ret){
return (function (){return fn1.call(null,val_28438);
});})(val_28438,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28439 = n;var x_28440 = 0;while(true){
if((x_28440 < n__20651__auto___28439))
{(a[x_28440] = 0);
{
var G__28441 = (x_28440 + 1);
x_28440 = G__28441;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28442 = (i + 1);
i = G__28442;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25739 = (function (flag,alt_flag,meta25740){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25740 = meta25740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25739.cljs$lang$type = true;
cljs.core.async.t25739.cljs$lang$ctorStr = "cljs.core.async/t25739";
cljs.core.async.t25739.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25739");
});})(flag))
;
cljs.core.async.t25739.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25741){var self__ = this;
var _25741__$1 = this;return self__.meta25740;
});})(flag))
;
cljs.core.async.t25739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25741,meta25740__$1){var self__ = this;
var _25741__$1 = this;return (new cljs.core.async.t25739(self__.flag,self__.alt_flag,meta25740__$1));
});})(flag))
;
cljs.core.async.__GT_t25739 = ((function (flag){
return (function __GT_t25739(flag__$1,alt_flag__$1,meta25740){return (new cljs.core.async.t25739(flag__$1,alt_flag__$1,meta25740));
});})(flag))
;
}
return (new cljs.core.async.t25739(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25745 = (function (cb,flag,alt_handler,meta25746){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25746 = meta25746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25745.cljs$lang$type = true;
cljs.core.async.t25745.cljs$lang$ctorStr = "cljs.core.async/t25745";
cljs.core.async.t25745.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25745");
});
cljs.core.async.t25745.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25747){var self__ = this;
var _25747__$1 = this;return self__.meta25746;
});
cljs.core.async.t25745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25747,meta25746__$1){var self__ = this;
var _25747__$1 = this;return (new cljs.core.async.t25745(self__.cb,self__.flag,self__.alt_handler,meta25746__$1));
});
cljs.core.async.__GT_t25745 = (function __GT_t25745(cb__$1,flag__$1,alt_handler__$1,meta25746){return (new cljs.core.async.t25745(cb__$1,flag__$1,alt_handler__$1,meta25746));
});
}
return (new cljs.core.async.t25745(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25748_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25748_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25749_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25749_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19803__auto__ = wport;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28443 = (i + 1);
i = G__28443;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__19803__auto__ = ret;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__19791__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__19791__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__19791__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__25750){var map__25752 = p__25750;var map__25752__$1 = ((cljs.core.seq_QMARK_.call(null,map__25752))?cljs.core.apply.call(null,cljs.core.hash_map,map__25752):map__25752);var opts = map__25752__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25750 = null;if (arguments.length > 1) {
  p__25750 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25750);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28444){
var ports = cljs.core.first(arglist__28444);
var p__25750 = cljs.core.rest(arglist__28444);
return alts_BANG___delegate(ports,p__25750);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__22577__auto___28445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28445){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28445){
return (function (state_25823){var state_val_25824 = (state_25823[1]);if((state_val_25824 === 1))
{var state_25823__$1 = state_25823;var statearr_25825_28446 = state_25823__$1;(statearr_25825_28446[2] = null);
(statearr_25825_28446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 2))
{var state_25823__$1 = state_25823;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25823__$1,4,from);
} else
{if((state_val_25824 === 3))
{var inst_25821 = (state_25823[2]);var state_25823__$1 = state_25823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25823__$1,inst_25821);
} else
{if((state_val_25824 === 4))
{var inst_25802 = (state_25823[7]);var inst_25802__$1 = (state_25823[2]);var inst_25803 = (inst_25802__$1 == null);var state_25823__$1 = (function (){var statearr_25826 = state_25823;(statearr_25826[7] = inst_25802__$1);
return statearr_25826;
})();if(cljs.core.truth_(inst_25803))
{var statearr_25827_28447 = state_25823__$1;(statearr_25827_28447[1] = 5);
} else
{var statearr_25828_28448 = state_25823__$1;(statearr_25828_28448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 5))
{var state_25823__$1 = state_25823;if(cljs.core.truth_(close_QMARK_))
{var statearr_25829_28449 = state_25823__$1;(statearr_25829_28449[1] = 8);
} else
{var statearr_25830_28450 = state_25823__$1;(statearr_25830_28450[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 6))
{var inst_25802 = (state_25823[7]);var state_25823__$1 = state_25823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25823__$1,11,to,inst_25802);
} else
{if((state_val_25824 === 7))
{var inst_25819 = (state_25823[2]);var state_25823__$1 = state_25823;var statearr_25831_28451 = state_25823__$1;(statearr_25831_28451[2] = inst_25819);
(statearr_25831_28451[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 8))
{var inst_25806 = cljs.core.async.close_BANG_.call(null,to);var state_25823__$1 = state_25823;var statearr_25832_28452 = state_25823__$1;(statearr_25832_28452[2] = inst_25806);
(statearr_25832_28452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 9))
{var state_25823__$1 = state_25823;var statearr_25833_28453 = state_25823__$1;(statearr_25833_28453[2] = null);
(statearr_25833_28453[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 10))
{var inst_25809 = (state_25823[2]);var state_25823__$1 = state_25823;var statearr_25834_28454 = state_25823__$1;(statearr_25834_28454[2] = inst_25809);
(statearr_25834_28454[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 11))
{var inst_25812 = (state_25823[2]);var state_25823__$1 = state_25823;if(cljs.core.truth_(inst_25812))
{var statearr_25835_28455 = state_25823__$1;(statearr_25835_28455[1] = 12);
} else
{var statearr_25836_28456 = state_25823__$1;(statearr_25836_28456[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 12))
{var state_25823__$1 = state_25823;var statearr_25837_28457 = state_25823__$1;(statearr_25837_28457[2] = null);
(statearr_25837_28457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 13))
{var state_25823__$1 = state_25823;var statearr_25838_28458 = state_25823__$1;(statearr_25838_28458[2] = null);
(statearr_25838_28458[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25824 === 14))
{var inst_25817 = (state_25823[2]);var state_25823__$1 = state_25823;var statearr_25839_28459 = state_25823__$1;(statearr_25839_28459[2] = inst_25817);
(statearr_25839_28459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28445))
;return ((function (switch__22501__auto__,c__22577__auto___28445){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_25843 = [null,null,null,null,null,null,null,null];(statearr_25843[0] = state_machine__22502__auto__);
(statearr_25843[1] = 1);
return statearr_25843;
});
var state_machine__22502__auto____1 = (function (state_25823){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_25823);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e25844){if((e25844 instanceof Object))
{var ex__22505__auto__ = e25844;var statearr_25845_28460 = state_25823;(statearr_25845_28460[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28461 = state_25823;
state_25823 = G__28461;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28445))
})();var state__22579__auto__ = (function (){var statearr_25846 = f__22578__auto__.call(null);(statearr_25846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28445);
return statearr_25846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28445))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),new cljs.core.Symbol(null,"n","n",-1640531417,null))))].join('')));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__26029){var vec__26030 = p__26029;var v = cljs.core.nth.call(null,vec__26030,0,null);var p = cljs.core.nth.call(null,vec__26030,1,null);var job = vec__26030;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22577__auto___28462 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results){
return (function (state_26035){var state_val_26036 = (state_26035[1]);if((state_val_26036 === 2))
{var inst_26032 = (state_26035[2]);var inst_26033 = cljs.core.async.close_BANG_.call(null,res);var state_26035__$1 = (function (){var statearr_26037 = state_26035;(statearr_26037[7] = inst_26032);
return statearr_26037;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26035__$1,inst_26033);
} else
{if((state_val_26036 === 1))
{var state_26035__$1 = state_26035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26035__$1,2,res,v);
} else
{return null;
}
}
});})(c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results))
;return ((function (switch__22501__auto__,c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26041 = [null,null,null,null,null,null,null,null];(statearr_26041[0] = state_machine__22502__auto__);
(statearr_26041[1] = 1);
return statearr_26041;
});
var state_machine__22502__auto____1 = (function (state_26035){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26035);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26042){if((e26042 instanceof Object))
{var ex__22505__auto__ = e26042;var statearr_26043_28463 = state_26035;(statearr_26043_28463[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28464 = state_26035;
state_26035 = G__28464;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26035){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results))
})();var state__22579__auto__ = (function (){var statearr_26044 = f__22578__auto__.call(null);(statearr_26044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28462);
return statearr_26044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28462,res,vec__26030,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26045){var vec__26046 = p__26045;var v = cljs.core.nth.call(null,vec__26046,0,null);var p = cljs.core.nth.call(null,vec__26046,1,null);var job = vec__26046;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28465 = n;var __28466 = 0;while(true){
if((__28466 < n__20651__auto___28465))
{var G__26047_28467 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26047_28467))
{var c__22577__auto___28468 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28466,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28466,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function (state_26060){var state_val_26061 = (state_26060[1]);if((state_val_26061 === 7))
{var inst_26056 = (state_26060[2]);var state_26060__$1 = state_26060;var statearr_26062_28469 = state_26060__$1;(statearr_26062_28469[2] = inst_26056);
(statearr_26062_28469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26061 === 6))
{var state_26060__$1 = state_26060;var statearr_26063_28470 = state_26060__$1;(statearr_26063_28470[2] = null);
(statearr_26063_28470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26061 === 5))
{var state_26060__$1 = state_26060;var statearr_26064_28471 = state_26060__$1;(statearr_26064_28471[2] = null);
(statearr_26064_28471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26061 === 4))
{var inst_26050 = (state_26060[2]);var inst_26051 = async.call(null,inst_26050);var state_26060__$1 = state_26060;if(cljs.core.truth_(inst_26051))
{var statearr_26065_28472 = state_26060__$1;(statearr_26065_28472[1] = 5);
} else
{var statearr_26066_28473 = state_26060__$1;(statearr_26066_28473[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26061 === 3))
{var inst_26058 = (state_26060[2]);var state_26060__$1 = state_26060;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26060__$1,inst_26058);
} else
{if((state_val_26061 === 2))
{var state_26060__$1 = state_26060;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26060__$1,4,jobs);
} else
{if((state_val_26061 === 1))
{var state_26060__$1 = state_26060;var statearr_26067_28474 = state_26060__$1;(statearr_26067_28474[2] = null);
(statearr_26067_28474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28466,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
;return ((function (__28466,switch__22501__auto__,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26071 = [null,null,null,null,null,null,null];(statearr_26071[0] = state_machine__22502__auto__);
(statearr_26071[1] = 1);
return statearr_26071;
});
var state_machine__22502__auto____1 = (function (state_26060){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26060);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26072){if((e26072 instanceof Object))
{var ex__22505__auto__ = e26072;var statearr_26073_28475 = state_26060;(statearr_26073_28475[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26060);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28476 = state_26060;
state_26060 = G__28476;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26060){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28466,switch__22501__auto__,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26074 = f__22578__auto__.call(null);(statearr_26074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28468);
return statearr_26074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28466,c__22577__auto___28468,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26047_28467))
{var c__22577__auto___28477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28466,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (__28466,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function (state_26087){var state_val_26088 = (state_26087[1]);if((state_val_26088 === 7))
{var inst_26083 = (state_26087[2]);var state_26087__$1 = state_26087;var statearr_26089_28478 = state_26087__$1;(statearr_26089_28478[2] = inst_26083);
(statearr_26089_28478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26088 === 6))
{var state_26087__$1 = state_26087;var statearr_26090_28479 = state_26087__$1;(statearr_26090_28479[2] = null);
(statearr_26090_28479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26088 === 5))
{var state_26087__$1 = state_26087;var statearr_26091_28480 = state_26087__$1;(statearr_26091_28480[2] = null);
(statearr_26091_28480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26088 === 4))
{var inst_26077 = (state_26087[2]);var inst_26078 = process.call(null,inst_26077);var state_26087__$1 = state_26087;if(cljs.core.truth_(inst_26078))
{var statearr_26092_28481 = state_26087__$1;(statearr_26092_28481[1] = 5);
} else
{var statearr_26093_28482 = state_26087__$1;(statearr_26093_28482[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26088 === 3))
{var inst_26085 = (state_26087[2]);var state_26087__$1 = state_26087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26087__$1,inst_26085);
} else
{if((state_val_26088 === 2))
{var state_26087__$1 = state_26087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,4,jobs);
} else
{if((state_val_26088 === 1))
{var state_26087__$1 = state_26087;var statearr_26094_28483 = state_26087__$1;(statearr_26094_28483[2] = null);
(statearr_26094_28483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(__28466,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
;return ((function (__28466,switch__22501__auto__,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26098 = [null,null,null,null,null,null,null];(statearr_26098[0] = state_machine__22502__auto__);
(statearr_26098[1] = 1);
return statearr_26098;
});
var state_machine__22502__auto____1 = (function (state_26087){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26087);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26099){if((e26099 instanceof Object))
{var ex__22505__auto__ = e26099;var statearr_26100_28484 = state_26087;(statearr_26100_28484[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28485 = state_26087;
state_26087 = G__28485;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(__28466,switch__22501__auto__,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26101 = f__22578__auto__.call(null);(statearr_26101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28477);
return statearr_26101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(__28466,c__22577__auto___28477,G__26047_28467,n__20651__auto___28465,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28486 = (__28466 + 1);
__28466 = G__28486;
continue;
}
} else
{}
break;
}
var c__22577__auto___28487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28487,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28487,jobs,results,process,async){
return (function (state_26122){var state_val_26123 = (state_26122[1]);if((state_val_26123 === 9))
{var inst_26115 = (state_26122[2]);var state_26122__$1 = (function (){var statearr_26124 = state_26122;(statearr_26124[7] = inst_26115);
return statearr_26124;
})();var statearr_26125_28488 = state_26122__$1;(statearr_26125_28488[2] = null);
(statearr_26125_28488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26123 === 8))
{var inst_26109 = (state_26122[8]);var inst_26113 = (state_26122[2]);var state_26122__$1 = (function (){var statearr_26126 = state_26122;(statearr_26126[9] = inst_26113);
return statearr_26126;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,9,results,inst_26109);
} else
{if((state_val_26123 === 7))
{var inst_26118 = (state_26122[2]);var state_26122__$1 = state_26122;var statearr_26127_28489 = state_26122__$1;(statearr_26127_28489[2] = inst_26118);
(statearr_26127_28489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26123 === 6))
{var inst_26109 = (state_26122[8]);var inst_26104 = (state_26122[10]);var inst_26109__$1 = cljs.core.async.chan.call(null,1);var inst_26110 = [inst_26104,inst_26109__$1];var inst_26111 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26110,null));var state_26122__$1 = (function (){var statearr_26128 = state_26122;(statearr_26128[8] = inst_26109__$1);
return statearr_26128;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,8,jobs,inst_26111);
} else
{if((state_val_26123 === 5))
{var inst_26107 = cljs.core.async.close_BANG_.call(null,jobs);var state_26122__$1 = state_26122;var statearr_26129_28490 = state_26122__$1;(statearr_26129_28490[2] = inst_26107);
(statearr_26129_28490[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26123 === 4))
{var inst_26104 = (state_26122[10]);var inst_26104__$1 = (state_26122[2]);var inst_26105 = (inst_26104__$1 == null);var state_26122__$1 = (function (){var statearr_26130 = state_26122;(statearr_26130[10] = inst_26104__$1);
return statearr_26130;
})();if(cljs.core.truth_(inst_26105))
{var statearr_26131_28491 = state_26122__$1;(statearr_26131_28491[1] = 5);
} else
{var statearr_26132_28492 = state_26122__$1;(statearr_26132_28492[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26123 === 3))
{var inst_26120 = (state_26122[2]);var state_26122__$1 = state_26122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26122__$1,inst_26120);
} else
{if((state_val_26123 === 2))
{var state_26122__$1 = state_26122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26122__$1,4,from);
} else
{if((state_val_26123 === 1))
{var state_26122__$1 = state_26122;var statearr_26133_28493 = state_26122__$1;(statearr_26133_28493[2] = null);
(statearr_26133_28493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28487,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto___28487,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26137 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26137[0] = state_machine__22502__auto__);
(statearr_26137[1] = 1);
return statearr_26137;
});
var state_machine__22502__auto____1 = (function (state_26122){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26122);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26138){if((e26138 instanceof Object))
{var ex__22505__auto__ = e26138;var statearr_26139_28494 = state_26122;(statearr_26139_28494[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26138;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28495 = state_26122;
state_26122 = G__28495;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26122){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28487,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26140 = f__22578__auto__.call(null);(statearr_26140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28487);
return statearr_26140;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28487,jobs,results,process,async))
);
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,jobs,results,process,async){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,jobs,results,process,async){
return (function (state_26178){var state_val_26179 = (state_26178[1]);if((state_val_26179 === 1))
{var state_26178__$1 = state_26178;var statearr_26180_28496 = state_26178__$1;(statearr_26180_28496[2] = null);
(statearr_26180_28496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 2))
{var state_26178__$1 = state_26178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,4,results);
} else
{if((state_val_26179 === 3))
{var inst_26176 = (state_26178[2]);var state_26178__$1 = state_26178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else
{if((state_val_26179 === 4))
{var inst_26143 = (state_26178[7]);var inst_26143__$1 = (state_26178[2]);var inst_26144 = (inst_26143__$1 == null);var state_26178__$1 = (function (){var statearr_26181 = state_26178;(statearr_26181[7] = inst_26143__$1);
return statearr_26181;
})();if(cljs.core.truth_(inst_26144))
{var statearr_26182_28497 = state_26178__$1;(statearr_26182_28497[1] = 5);
} else
{var statearr_26183_28498 = state_26178__$1;(statearr_26183_28498[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 5))
{var state_26178__$1 = state_26178;if(cljs.core.truth_(close_QMARK_))
{var statearr_26184_28499 = state_26178__$1;(statearr_26184_28499[1] = 8);
} else
{var statearr_26185_28500 = state_26178__$1;(statearr_26185_28500[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 6))
{var inst_26143 = (state_26178[7]);var state_26178__$1 = state_26178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,11,inst_26143);
} else
{if((state_val_26179 === 7))
{var inst_26174 = (state_26178[2]);var state_26178__$1 = state_26178;var statearr_26186_28501 = state_26178__$1;(statearr_26186_28501[2] = inst_26174);
(statearr_26186_28501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 8))
{var inst_26147 = cljs.core.async.close_BANG_.call(null,to);var state_26178__$1 = state_26178;var statearr_26187_28502 = state_26178__$1;(statearr_26187_28502[2] = inst_26147);
(statearr_26187_28502[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 9))
{var state_26178__$1 = state_26178;var statearr_26188_28503 = state_26178__$1;(statearr_26188_28503[2] = null);
(statearr_26188_28503[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 10))
{var inst_26150 = (state_26178[2]);var state_26178__$1 = state_26178;var statearr_26189_28504 = state_26178__$1;(statearr_26189_28504[2] = inst_26150);
(statearr_26189_28504[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 11))
{var inst_26153 = (state_26178[2]);var state_26178__$1 = (function (){var statearr_26190 = state_26178;(statearr_26190[8] = inst_26153);
return statearr_26190;
})();var statearr_26191_28505 = state_26178__$1;(statearr_26191_28505[2] = null);
(statearr_26191_28505[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 12))
{var inst_26153 = (state_26178[8]);var state_26178__$1 = state_26178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,14,inst_26153);
} else
{if((state_val_26179 === 13))
{var inst_26171 = (state_26178[2]);var state_26178__$1 = (function (){var statearr_26192 = state_26178;(statearr_26192[9] = inst_26171);
return statearr_26192;
})();var statearr_26193_28506 = state_26178__$1;(statearr_26193_28506[2] = null);
(statearr_26193_28506[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 14))
{var inst_26158 = (state_26178[10]);var inst_26156 = (state_26178[11]);var inst_26156__$1 = (state_26178[2]);var inst_26157 = (inst_26156__$1 == null);var inst_26158__$1 = cljs.core.not.call(null,inst_26157);var state_26178__$1 = (function (){var statearr_26194 = state_26178;(statearr_26194[10] = inst_26158__$1);
(statearr_26194[11] = inst_26156__$1);
return statearr_26194;
})();if(inst_26158__$1)
{var statearr_26195_28507 = state_26178__$1;(statearr_26195_28507[1] = 15);
} else
{var statearr_26196_28508 = state_26178__$1;(statearr_26196_28508[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 15))
{var inst_26156 = (state_26178[11]);var state_26178__$1 = state_26178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26178__$1,18,to,inst_26156);
} else
{if((state_val_26179 === 16))
{var inst_26158 = (state_26178[10]);var state_26178__$1 = state_26178;var statearr_26197_28509 = state_26178__$1;(statearr_26197_28509[2] = inst_26158);
(statearr_26197_28509[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 17))
{var inst_26164 = (state_26178[2]);var state_26178__$1 = state_26178;if(cljs.core.truth_(inst_26164))
{var statearr_26198_28510 = state_26178__$1;(statearr_26198_28510[1] = 19);
} else
{var statearr_26199_28511 = state_26178__$1;(statearr_26199_28511[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 18))
{var inst_26161 = (state_26178[2]);var state_26178__$1 = state_26178;var statearr_26200_28512 = state_26178__$1;(statearr_26200_28512[2] = inst_26161);
(statearr_26200_28512[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 19))
{var state_26178__$1 = state_26178;var statearr_26201_28513 = state_26178__$1;(statearr_26201_28513[2] = null);
(statearr_26201_28513[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 20))
{var state_26178__$1 = state_26178;var statearr_26202_28514 = state_26178__$1;(statearr_26202_28514[2] = null);
(statearr_26202_28514[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26179 === 21))
{var inst_26169 = (state_26178[2]);var state_26178__$1 = state_26178;var statearr_26203_28515 = state_26178__$1;(statearr_26203_28515[2] = inst_26169);
(statearr_26203_28515[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto__,jobs,results,process,async))
;return ((function (switch__22501__auto__,c__22577__auto__,jobs,results,process,async){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26207 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26207[0] = state_machine__22502__auto__);
(statearr_26207[1] = 1);
return statearr_26207;
});
var state_machine__22502__auto____1 = (function (state_26178){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26178);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object))
{var ex__22505__auto__ = e26208;var statearr_26209_28516 = state_26178;(statearr_26209_28516[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28517 = state_26178;
state_26178 = G__28517;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,jobs,results,process,async))
})();var state__22579__auto__ = (function (){var statearr_26210 = f__22578__auto__.call(null);(statearr_26210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,jobs,results,process,async))
);
return c__22577__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1107031534));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1964407721));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22577__auto___28518 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28518,tc,fc){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28518,tc,fc){
return (function (state_26286){var state_val_26287 = (state_26286[1]);if((state_val_26287 === 1))
{var state_26286__$1 = state_26286;var statearr_26288_28519 = state_26286__$1;(statearr_26288_28519[2] = null);
(statearr_26288_28519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 2))
{var state_26286__$1 = state_26286;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26286__$1,4,ch);
} else
{if((state_val_26287 === 3))
{var inst_26284 = (state_26286[2]);var state_26286__$1 = state_26286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26286__$1,inst_26284);
} else
{if((state_val_26287 === 4))
{var inst_26263 = (state_26286[7]);var inst_26263__$1 = (state_26286[2]);var inst_26264 = (inst_26263__$1 == null);var state_26286__$1 = (function (){var statearr_26289 = state_26286;(statearr_26289[7] = inst_26263__$1);
return statearr_26289;
})();if(cljs.core.truth_(inst_26264))
{var statearr_26290_28520 = state_26286__$1;(statearr_26290_28520[1] = 5);
} else
{var statearr_26291_28521 = state_26286__$1;(statearr_26291_28521[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 5))
{var inst_26266 = cljs.core.async.close_BANG_.call(null,tc);var inst_26267 = cljs.core.async.close_BANG_.call(null,fc);var state_26286__$1 = (function (){var statearr_26292 = state_26286;(statearr_26292[8] = inst_26266);
return statearr_26292;
})();var statearr_26293_28522 = state_26286__$1;(statearr_26293_28522[2] = inst_26267);
(statearr_26293_28522[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 6))
{var inst_26263 = (state_26286[7]);var inst_26269 = p.call(null,inst_26263);var state_26286__$1 = state_26286;if(cljs.core.truth_(inst_26269))
{var statearr_26294_28523 = state_26286__$1;(statearr_26294_28523[1] = 9);
} else
{var statearr_26295_28524 = state_26286__$1;(statearr_26295_28524[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 7))
{var inst_26282 = (state_26286[2]);var state_26286__$1 = state_26286;var statearr_26296_28525 = state_26286__$1;(statearr_26296_28525[2] = inst_26282);
(statearr_26296_28525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 8))
{var inst_26275 = (state_26286[2]);var state_26286__$1 = state_26286;if(cljs.core.truth_(inst_26275))
{var statearr_26297_28526 = state_26286__$1;(statearr_26297_28526[1] = 12);
} else
{var statearr_26298_28527 = state_26286__$1;(statearr_26298_28527[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 9))
{var state_26286__$1 = state_26286;var statearr_26299_28528 = state_26286__$1;(statearr_26299_28528[2] = tc);
(statearr_26299_28528[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 10))
{var state_26286__$1 = state_26286;var statearr_26300_28529 = state_26286__$1;(statearr_26300_28529[2] = fc);
(statearr_26300_28529[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 11))
{var inst_26263 = (state_26286[7]);var inst_26273 = (state_26286[2]);var state_26286__$1 = state_26286;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26286__$1,8,inst_26273,inst_26263);
} else
{if((state_val_26287 === 12))
{var state_26286__$1 = state_26286;var statearr_26301_28530 = state_26286__$1;(statearr_26301_28530[2] = null);
(statearr_26301_28530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 13))
{var state_26286__$1 = state_26286;var statearr_26302_28531 = state_26286__$1;(statearr_26302_28531[2] = null);
(statearr_26302_28531[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26287 === 14))
{var inst_26280 = (state_26286[2]);var state_26286__$1 = state_26286;var statearr_26303_28532 = state_26286__$1;(statearr_26303_28532[2] = inst_26280);
(statearr_26303_28532[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28518,tc,fc))
;return ((function (switch__22501__auto__,c__22577__auto___28518,tc,fc){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26307 = [null,null,null,null,null,null,null,null,null];(statearr_26307[0] = state_machine__22502__auto__);
(statearr_26307[1] = 1);
return statearr_26307;
});
var state_machine__22502__auto____1 = (function (state_26286){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26286);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26308){if((e26308 instanceof Object))
{var ex__22505__auto__ = e26308;var statearr_26309_28533 = state_26286;(statearr_26309_28533[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26286);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28534 = state_26286;
state_26286 = G__28534;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26286){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28518,tc,fc))
})();var state__22579__auto__ = (function (){var statearr_26310 = f__22578__auto__.call(null);(statearr_26310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28518);
return statearr_26310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28518,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26357){var state_val_26358 = (state_26357[1]);if((state_val_26358 === 7))
{var inst_26353 = (state_26357[2]);var state_26357__$1 = state_26357;var statearr_26359_28535 = state_26357__$1;(statearr_26359_28535[2] = inst_26353);
(statearr_26359_28535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26358 === 6))
{var inst_26343 = (state_26357[7]);var inst_26346 = (state_26357[8]);var inst_26350 = f.call(null,inst_26343,inst_26346);var inst_26343__$1 = inst_26350;var state_26357__$1 = (function (){var statearr_26360 = state_26357;(statearr_26360[7] = inst_26343__$1);
return statearr_26360;
})();var statearr_26361_28536 = state_26357__$1;(statearr_26361_28536[2] = null);
(statearr_26361_28536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26358 === 5))
{var inst_26343 = (state_26357[7]);var state_26357__$1 = state_26357;var statearr_26362_28537 = state_26357__$1;(statearr_26362_28537[2] = inst_26343);
(statearr_26362_28537[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26358 === 4))
{var inst_26346 = (state_26357[8]);var inst_26346__$1 = (state_26357[2]);var inst_26347 = (inst_26346__$1 == null);var state_26357__$1 = (function (){var statearr_26363 = state_26357;(statearr_26363[8] = inst_26346__$1);
return statearr_26363;
})();if(cljs.core.truth_(inst_26347))
{var statearr_26364_28538 = state_26357__$1;(statearr_26364_28538[1] = 5);
} else
{var statearr_26365_28539 = state_26357__$1;(statearr_26365_28539[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26358 === 3))
{var inst_26355 = (state_26357[2]);var state_26357__$1 = state_26357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26357__$1,inst_26355);
} else
{if((state_val_26358 === 2))
{var state_26357__$1 = state_26357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26357__$1,4,ch);
} else
{if((state_val_26358 === 1))
{var inst_26343 = init;var state_26357__$1 = (function (){var statearr_26366 = state_26357;(statearr_26366[7] = inst_26343);
return statearr_26366;
})();var statearr_26367_28540 = state_26357__$1;(statearr_26367_28540[2] = null);
(statearr_26367_28540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26371 = [null,null,null,null,null,null,null,null,null];(statearr_26371[0] = state_machine__22502__auto__);
(statearr_26371[1] = 1);
return statearr_26371;
});
var state_machine__22502__auto____1 = (function (state_26357){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26357);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26372){if((e26372 instanceof Object))
{var ex__22505__auto__ = e26372;var statearr_26373_28541 = state_26357;(statearr_26373_28541[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26357);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28542 = state_26357;
state_26357 = G__28542;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26357){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26374 = f__22578__auto__.call(null);(statearr_26374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_26448){var state_val_26449 = (state_26448[1]);if((state_val_26449 === 1))
{var inst_26424 = cljs.core.seq.call(null,coll);var inst_26425 = inst_26424;var state_26448__$1 = (function (){var statearr_26450 = state_26448;(statearr_26450[7] = inst_26425);
return statearr_26450;
})();var statearr_26451_28543 = state_26448__$1;(statearr_26451_28543[2] = null);
(statearr_26451_28543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 2))
{var inst_26425 = (state_26448[7]);var state_26448__$1 = state_26448;if(cljs.core.truth_(inst_26425))
{var statearr_26452_28544 = state_26448__$1;(statearr_26452_28544[1] = 4);
} else
{var statearr_26453_28545 = state_26448__$1;(statearr_26453_28545[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 3))
{var inst_26446 = (state_26448[2]);var state_26448__$1 = state_26448;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26448__$1,inst_26446);
} else
{if((state_val_26449 === 4))
{var inst_26425 = (state_26448[7]);var inst_26428 = cljs.core.first.call(null,inst_26425);var state_26448__$1 = state_26448;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26448__$1,7,ch,inst_26428);
} else
{if((state_val_26449 === 5))
{var inst_26425 = (state_26448[7]);var state_26448__$1 = state_26448;var statearr_26454_28546 = state_26448__$1;(statearr_26454_28546[2] = inst_26425);
(statearr_26454_28546[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 6))
{var inst_26433 = (state_26448[2]);var state_26448__$1 = state_26448;if(cljs.core.truth_(inst_26433))
{var statearr_26455_28547 = state_26448__$1;(statearr_26455_28547[1] = 8);
} else
{var statearr_26456_28548 = state_26448__$1;(statearr_26456_28548[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 7))
{var inst_26430 = (state_26448[2]);var state_26448__$1 = state_26448;var statearr_26457_28549 = state_26448__$1;(statearr_26457_28549[2] = inst_26430);
(statearr_26457_28549[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 8))
{var inst_26425 = (state_26448[7]);var inst_26435 = cljs.core.next.call(null,inst_26425);var inst_26425__$1 = inst_26435;var state_26448__$1 = (function (){var statearr_26458 = state_26448;(statearr_26458[7] = inst_26425__$1);
return statearr_26458;
})();var statearr_26459_28550 = state_26448__$1;(statearr_26459_28550[2] = null);
(statearr_26459_28550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 9))
{var state_26448__$1 = state_26448;if(cljs.core.truth_(close_QMARK_))
{var statearr_26460_28551 = state_26448__$1;(statearr_26460_28551[1] = 11);
} else
{var statearr_26461_28552 = state_26448__$1;(statearr_26461_28552[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 10))
{var inst_26444 = (state_26448[2]);var state_26448__$1 = state_26448;var statearr_26462_28553 = state_26448__$1;(statearr_26462_28553[2] = inst_26444);
(statearr_26462_28553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 11))
{var inst_26439 = cljs.core.async.close_BANG_.call(null,ch);var state_26448__$1 = state_26448;var statearr_26463_28554 = state_26448__$1;(statearr_26463_28554[2] = inst_26439);
(statearr_26463_28554[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 12))
{var state_26448__$1 = state_26448;var statearr_26464_28555 = state_26448__$1;(statearr_26464_28555[2] = null);
(statearr_26464_28555[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26449 === 13))
{var inst_26442 = (state_26448[2]);var state_26448__$1 = state_26448;var statearr_26465_28556 = state_26448__$1;(statearr_26465_28556[2] = inst_26442);
(statearr_26465_28556[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26469 = [null,null,null,null,null,null,null,null];(statearr_26469[0] = state_machine__22502__auto__);
(statearr_26469[1] = 1);
return statearr_26469;
});
var state_machine__22502__auto____1 = (function (state_26448){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26448);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object))
{var ex__22505__auto__ = e26470;var statearr_26471_28557 = state_26448;(statearr_26471_28557[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26448);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28558 = state_26448;
state_26448 = G__28558;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26448){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_26472 = f__22578__auto__.call(null);(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_26472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj26474 = {};return obj26474;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__19791__auto__ = _;if(and__19791__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__20430__auto__ = (((_ == null))?null:_);return (function (){var or__19803__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj26476 = {};return obj26476;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26698 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26698 = (function (cs,ch,mult,meta26699){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26699 = meta26699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26698.cljs$lang$type = true;
cljs.core.async.t26698.cljs$lang$ctorStr = "cljs.core.async/t26698";
cljs.core.async.t26698.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26698");
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26698.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26700){var self__ = this;
var _26700__$1 = this;return self__.meta26699;
});})(cs))
;
cljs.core.async.t26698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26700,meta26699__$1){var self__ = this;
var _26700__$1 = this;return (new cljs.core.async.t26698(self__.cs,self__.ch,self__.mult,meta26699__$1));
});})(cs))
;
cljs.core.async.__GT_t26698 = ((function (cs){
return (function __GT_t26698(cs__$1,ch__$1,mult__$1,meta26699){return (new cljs.core.async.t26698(cs__$1,ch__$1,mult__$1,meta26699));
});})(cs))
;
}
return (new cljs.core.async.t26698(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22577__auto___28559 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28559,cs,m,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28559,cs,m,dchan,dctr,done){
return (function (state_26831){var state_val_26832 = (state_26831[1]);if((state_val_26832 === 32))
{var inst_26773 = (state_26831[7]);var inst_26774 = (state_26831[8]);var inst_26771 = (state_26831[9]);var inst_26772 = (state_26831[10]);var inst_26786 = (state_26831[2]);var inst_26787 = (inst_26774 + 1);var tmp26833 = inst_26773;var tmp26834 = inst_26771;var tmp26835 = inst_26772;var inst_26771__$1 = tmp26834;var inst_26772__$1 = tmp26835;var inst_26773__$1 = tmp26833;var inst_26774__$1 = inst_26787;var state_26831__$1 = (function (){var statearr_26836 = state_26831;(statearr_26836[11] = inst_26786);
(statearr_26836[7] = inst_26773__$1);
(statearr_26836[8] = inst_26774__$1);
(statearr_26836[9] = inst_26771__$1);
(statearr_26836[10] = inst_26772__$1);
return statearr_26836;
})();var statearr_26837_28560 = state_26831__$1;(statearr_26837_28560[2] = null);
(statearr_26837_28560[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 1))
{var state_26831__$1 = state_26831;var statearr_26838_28561 = state_26831__$1;(statearr_26838_28561[2] = null);
(statearr_26838_28561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 33))
{var inst_26790 = (state_26831[12]);var inst_26792 = cljs.core.chunked_seq_QMARK_.call(null,inst_26790);var state_26831__$1 = state_26831;if(inst_26792)
{var statearr_26839_28562 = state_26831__$1;(statearr_26839_28562[1] = 36);
} else
{var statearr_26840_28563 = state_26831__$1;(statearr_26840_28563[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 2))
{var state_26831__$1 = state_26831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26831__$1,4,ch);
} else
{if((state_val_26832 === 34))
{var state_26831__$1 = state_26831;var statearr_26841_28564 = state_26831__$1;(statearr_26841_28564[2] = null);
(statearr_26841_28564[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 3))
{var inst_26829 = (state_26831[2]);var state_26831__$1 = state_26831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26831__$1,inst_26829);
} else
{if((state_val_26832 === 35))
{var inst_26813 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26842_28565 = state_26831__$1;(statearr_26842_28565[2] = inst_26813);
(statearr_26842_28565[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 4))
{var inst_26703 = (state_26831[13]);var inst_26703__$1 = (state_26831[2]);var inst_26704 = (inst_26703__$1 == null);var state_26831__$1 = (function (){var statearr_26843 = state_26831;(statearr_26843[13] = inst_26703__$1);
return statearr_26843;
})();if(cljs.core.truth_(inst_26704))
{var statearr_26844_28566 = state_26831__$1;(statearr_26844_28566[1] = 5);
} else
{var statearr_26845_28567 = state_26831__$1;(statearr_26845_28567[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 36))
{var inst_26790 = (state_26831[12]);var inst_26794 = cljs.core.chunk_first.call(null,inst_26790);var inst_26795 = cljs.core.chunk_rest.call(null,inst_26790);var inst_26796 = cljs.core.count.call(null,inst_26794);var inst_26771 = inst_26795;var inst_26772 = inst_26794;var inst_26773 = inst_26796;var inst_26774 = 0;var state_26831__$1 = (function (){var statearr_26846 = state_26831;(statearr_26846[7] = inst_26773);
(statearr_26846[8] = inst_26774);
(statearr_26846[9] = inst_26771);
(statearr_26846[10] = inst_26772);
return statearr_26846;
})();var statearr_26847_28568 = state_26831__$1;(statearr_26847_28568[2] = null);
(statearr_26847_28568[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 5))
{var inst_26710 = cljs.core.deref.call(null,cs);var inst_26711 = cljs.core.seq.call(null,inst_26710);var inst_26712 = inst_26711;var inst_26713 = null;var inst_26714 = 0;var inst_26715 = 0;var state_26831__$1 = (function (){var statearr_26848 = state_26831;(statearr_26848[14] = inst_26712);
(statearr_26848[15] = inst_26713);
(statearr_26848[16] = inst_26714);
(statearr_26848[17] = inst_26715);
return statearr_26848;
})();var statearr_26849_28569 = state_26831__$1;(statearr_26849_28569[2] = null);
(statearr_26849_28569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 37))
{var inst_26799 = (state_26831[18]);var inst_26703 = (state_26831[13]);var inst_26790 = (state_26831[12]);var inst_26799__$1 = cljs.core.first.call(null,inst_26790);var inst_26800 = cljs.core.async.put_BANG_.call(null,inst_26799__$1,inst_26703,done);var state_26831__$1 = (function (){var statearr_26850 = state_26831;(statearr_26850[18] = inst_26799__$1);
return statearr_26850;
})();if(cljs.core.truth_(inst_26800))
{var statearr_26851_28570 = state_26831__$1;(statearr_26851_28570[1] = 39);
} else
{var statearr_26852_28571 = state_26831__$1;(statearr_26852_28571[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 6))
{var inst_26763 = (state_26831[19]);var inst_26762 = cljs.core.deref.call(null,cs);var inst_26763__$1 = cljs.core.keys.call(null,inst_26762);var inst_26764 = cljs.core.count.call(null,inst_26763__$1);var inst_26765 = cljs.core.reset_BANG_.call(null,dctr,inst_26764);var inst_26770 = cljs.core.seq.call(null,inst_26763__$1);var inst_26771 = inst_26770;var inst_26772 = null;var inst_26773 = 0;var inst_26774 = 0;var state_26831__$1 = (function (){var statearr_26853 = state_26831;(statearr_26853[19] = inst_26763__$1);
(statearr_26853[7] = inst_26773);
(statearr_26853[8] = inst_26774);
(statearr_26853[9] = inst_26771);
(statearr_26853[10] = inst_26772);
(statearr_26853[20] = inst_26765);
return statearr_26853;
})();var statearr_26854_28572 = state_26831__$1;(statearr_26854_28572[2] = null);
(statearr_26854_28572[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 38))
{var inst_26810 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26855_28573 = state_26831__$1;(statearr_26855_28573[2] = inst_26810);
(statearr_26855_28573[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 7))
{var inst_26827 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26856_28574 = state_26831__$1;(statearr_26856_28574[2] = inst_26827);
(statearr_26856_28574[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 39))
{var state_26831__$1 = state_26831;var statearr_26857_28575 = state_26831__$1;(statearr_26857_28575[2] = null);
(statearr_26857_28575[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 8))
{var inst_26714 = (state_26831[16]);var inst_26715 = (state_26831[17]);var inst_26717 = (inst_26715 < inst_26714);var inst_26718 = inst_26717;var state_26831__$1 = state_26831;if(cljs.core.truth_(inst_26718))
{var statearr_26858_28576 = state_26831__$1;(statearr_26858_28576[1] = 10);
} else
{var statearr_26859_28577 = state_26831__$1;(statearr_26859_28577[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 40))
{var inst_26799 = (state_26831[18]);var inst_26803 = done.call(null,null);var inst_26804 = cljs.core.async.untap_STAR_.call(null,m,inst_26799);var state_26831__$1 = (function (){var statearr_26860 = state_26831;(statearr_26860[21] = inst_26803);
return statearr_26860;
})();var statearr_26861_28578 = state_26831__$1;(statearr_26861_28578[2] = inst_26804);
(statearr_26861_28578[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 9))
{var inst_26760 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26862_28579 = state_26831__$1;(statearr_26862_28579[2] = inst_26760);
(statearr_26862_28579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 41))
{var inst_26790 = (state_26831[12]);var inst_26806 = (state_26831[2]);var inst_26807 = cljs.core.next.call(null,inst_26790);var inst_26771 = inst_26807;var inst_26772 = null;var inst_26773 = 0;var inst_26774 = 0;var state_26831__$1 = (function (){var statearr_26863 = state_26831;(statearr_26863[22] = inst_26806);
(statearr_26863[7] = inst_26773);
(statearr_26863[8] = inst_26774);
(statearr_26863[9] = inst_26771);
(statearr_26863[10] = inst_26772);
return statearr_26863;
})();var statearr_26864_28580 = state_26831__$1;(statearr_26864_28580[2] = null);
(statearr_26864_28580[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 10))
{var inst_26713 = (state_26831[15]);var inst_26715 = (state_26831[17]);var inst_26721 = cljs.core._nth.call(null,inst_26713,inst_26715);var inst_26722 = cljs.core.nth.call(null,inst_26721,0,null);var inst_26723 = cljs.core.nth.call(null,inst_26721,1,null);var state_26831__$1 = (function (){var statearr_26865 = state_26831;(statearr_26865[23] = inst_26722);
return statearr_26865;
})();if(cljs.core.truth_(inst_26723))
{var statearr_26866_28581 = state_26831__$1;(statearr_26866_28581[1] = 13);
} else
{var statearr_26867_28582 = state_26831__$1;(statearr_26867_28582[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 42))
{var state_26831__$1 = state_26831;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26831__$1,45,dchan);
} else
{if((state_val_26832 === 11))
{var inst_26712 = (state_26831[14]);var inst_26732 = (state_26831[24]);var inst_26732__$1 = cljs.core.seq.call(null,inst_26712);var state_26831__$1 = (function (){var statearr_26868 = state_26831;(statearr_26868[24] = inst_26732__$1);
return statearr_26868;
})();if(inst_26732__$1)
{var statearr_26869_28583 = state_26831__$1;(statearr_26869_28583[1] = 16);
} else
{var statearr_26870_28584 = state_26831__$1;(statearr_26870_28584[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 43))
{var state_26831__$1 = state_26831;var statearr_26871_28585 = state_26831__$1;(statearr_26871_28585[2] = null);
(statearr_26871_28585[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 12))
{var inst_26758 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26872_28586 = state_26831__$1;(statearr_26872_28586[2] = inst_26758);
(statearr_26872_28586[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 44))
{var inst_26824 = (state_26831[2]);var state_26831__$1 = (function (){var statearr_26873 = state_26831;(statearr_26873[25] = inst_26824);
return statearr_26873;
})();var statearr_26874_28587 = state_26831__$1;(statearr_26874_28587[2] = null);
(statearr_26874_28587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 13))
{var inst_26722 = (state_26831[23]);var inst_26725 = cljs.core.async.close_BANG_.call(null,inst_26722);var state_26831__$1 = state_26831;var statearr_26875_28588 = state_26831__$1;(statearr_26875_28588[2] = inst_26725);
(statearr_26875_28588[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 45))
{var inst_26821 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26879_28589 = state_26831__$1;(statearr_26879_28589[2] = inst_26821);
(statearr_26879_28589[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 14))
{var state_26831__$1 = state_26831;var statearr_26880_28590 = state_26831__$1;(statearr_26880_28590[2] = null);
(statearr_26880_28590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 15))
{var inst_26712 = (state_26831[14]);var inst_26713 = (state_26831[15]);var inst_26714 = (state_26831[16]);var inst_26715 = (state_26831[17]);var inst_26728 = (state_26831[2]);var inst_26729 = (inst_26715 + 1);var tmp26876 = inst_26712;var tmp26877 = inst_26713;var tmp26878 = inst_26714;var inst_26712__$1 = tmp26876;var inst_26713__$1 = tmp26877;var inst_26714__$1 = tmp26878;var inst_26715__$1 = inst_26729;var state_26831__$1 = (function (){var statearr_26881 = state_26831;(statearr_26881[14] = inst_26712__$1);
(statearr_26881[26] = inst_26728);
(statearr_26881[15] = inst_26713__$1);
(statearr_26881[16] = inst_26714__$1);
(statearr_26881[17] = inst_26715__$1);
return statearr_26881;
})();var statearr_26882_28591 = state_26831__$1;(statearr_26882_28591[2] = null);
(statearr_26882_28591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 16))
{var inst_26732 = (state_26831[24]);var inst_26734 = cljs.core.chunked_seq_QMARK_.call(null,inst_26732);var state_26831__$1 = state_26831;if(inst_26734)
{var statearr_26883_28592 = state_26831__$1;(statearr_26883_28592[1] = 19);
} else
{var statearr_26884_28593 = state_26831__$1;(statearr_26884_28593[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 17))
{var state_26831__$1 = state_26831;var statearr_26885_28594 = state_26831__$1;(statearr_26885_28594[2] = null);
(statearr_26885_28594[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 18))
{var inst_26756 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26886_28595 = state_26831__$1;(statearr_26886_28595[2] = inst_26756);
(statearr_26886_28595[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 19))
{var inst_26732 = (state_26831[24]);var inst_26736 = cljs.core.chunk_first.call(null,inst_26732);var inst_26737 = cljs.core.chunk_rest.call(null,inst_26732);var inst_26738 = cljs.core.count.call(null,inst_26736);var inst_26712 = inst_26737;var inst_26713 = inst_26736;var inst_26714 = inst_26738;var inst_26715 = 0;var state_26831__$1 = (function (){var statearr_26887 = state_26831;(statearr_26887[14] = inst_26712);
(statearr_26887[15] = inst_26713);
(statearr_26887[16] = inst_26714);
(statearr_26887[17] = inst_26715);
return statearr_26887;
})();var statearr_26888_28596 = state_26831__$1;(statearr_26888_28596[2] = null);
(statearr_26888_28596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 20))
{var inst_26732 = (state_26831[24]);var inst_26742 = cljs.core.first.call(null,inst_26732);var inst_26743 = cljs.core.nth.call(null,inst_26742,0,null);var inst_26744 = cljs.core.nth.call(null,inst_26742,1,null);var state_26831__$1 = (function (){var statearr_26889 = state_26831;(statearr_26889[27] = inst_26743);
return statearr_26889;
})();if(cljs.core.truth_(inst_26744))
{var statearr_26890_28597 = state_26831__$1;(statearr_26890_28597[1] = 22);
} else
{var statearr_26891_28598 = state_26831__$1;(statearr_26891_28598[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 21))
{var inst_26753 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26892_28599 = state_26831__$1;(statearr_26892_28599[2] = inst_26753);
(statearr_26892_28599[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 22))
{var inst_26743 = (state_26831[27]);var inst_26746 = cljs.core.async.close_BANG_.call(null,inst_26743);var state_26831__$1 = state_26831;var statearr_26893_28600 = state_26831__$1;(statearr_26893_28600[2] = inst_26746);
(statearr_26893_28600[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 23))
{var state_26831__$1 = state_26831;var statearr_26894_28601 = state_26831__$1;(statearr_26894_28601[2] = null);
(statearr_26894_28601[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 24))
{var inst_26732 = (state_26831[24]);var inst_26749 = (state_26831[2]);var inst_26750 = cljs.core.next.call(null,inst_26732);var inst_26712 = inst_26750;var inst_26713 = null;var inst_26714 = 0;var inst_26715 = 0;var state_26831__$1 = (function (){var statearr_26895 = state_26831;(statearr_26895[14] = inst_26712);
(statearr_26895[28] = inst_26749);
(statearr_26895[15] = inst_26713);
(statearr_26895[16] = inst_26714);
(statearr_26895[17] = inst_26715);
return statearr_26895;
})();var statearr_26896_28602 = state_26831__$1;(statearr_26896_28602[2] = null);
(statearr_26896_28602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 25))
{var inst_26773 = (state_26831[7]);var inst_26774 = (state_26831[8]);var inst_26776 = (inst_26774 < inst_26773);var inst_26777 = inst_26776;var state_26831__$1 = state_26831;if(cljs.core.truth_(inst_26777))
{var statearr_26897_28603 = state_26831__$1;(statearr_26897_28603[1] = 27);
} else
{var statearr_26898_28604 = state_26831__$1;(statearr_26898_28604[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 26))
{var inst_26763 = (state_26831[19]);var inst_26817 = (state_26831[2]);var inst_26818 = cljs.core.seq.call(null,inst_26763);var state_26831__$1 = (function (){var statearr_26899 = state_26831;(statearr_26899[29] = inst_26817);
return statearr_26899;
})();if(inst_26818)
{var statearr_26900_28605 = state_26831__$1;(statearr_26900_28605[1] = 42);
} else
{var statearr_26901_28606 = state_26831__$1;(statearr_26901_28606[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 27))
{var inst_26703 = (state_26831[13]);var inst_26779 = (state_26831[30]);var inst_26774 = (state_26831[8]);var inst_26772 = (state_26831[10]);var inst_26779__$1 = cljs.core._nth.call(null,inst_26772,inst_26774);var inst_26780 = cljs.core.async.put_BANG_.call(null,inst_26779__$1,inst_26703,done);var state_26831__$1 = (function (){var statearr_26902 = state_26831;(statearr_26902[30] = inst_26779__$1);
return statearr_26902;
})();if(cljs.core.truth_(inst_26780))
{var statearr_26903_28607 = state_26831__$1;(statearr_26903_28607[1] = 30);
} else
{var statearr_26904_28608 = state_26831__$1;(statearr_26904_28608[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 28))
{var inst_26790 = (state_26831[12]);var inst_26771 = (state_26831[9]);var inst_26790__$1 = cljs.core.seq.call(null,inst_26771);var state_26831__$1 = (function (){var statearr_26905 = state_26831;(statearr_26905[12] = inst_26790__$1);
return statearr_26905;
})();if(inst_26790__$1)
{var statearr_26906_28609 = state_26831__$1;(statearr_26906_28609[1] = 33);
} else
{var statearr_26907_28610 = state_26831__$1;(statearr_26907_28610[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 29))
{var inst_26815 = (state_26831[2]);var state_26831__$1 = state_26831;var statearr_26908_28611 = state_26831__$1;(statearr_26908_28611[2] = inst_26815);
(statearr_26908_28611[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 30))
{var state_26831__$1 = state_26831;var statearr_26909_28612 = state_26831__$1;(statearr_26909_28612[2] = null);
(statearr_26909_28612[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26832 === 31))
{var inst_26779 = (state_26831[30]);var inst_26783 = done.call(null,null);var inst_26784 = cljs.core.async.untap_STAR_.call(null,m,inst_26779);var state_26831__$1 = (function (){var statearr_26910 = state_26831;(statearr_26910[31] = inst_26783);
return statearr_26910;
})();var statearr_26911_28613 = state_26831__$1;(statearr_26911_28613[2] = inst_26784);
(statearr_26911_28613[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28559,cs,m,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28559,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_26915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26915[0] = state_machine__22502__auto__);
(statearr_26915[1] = 1);
return statearr_26915;
});
var state_machine__22502__auto____1 = (function (state_26831){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_26831);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e26916){if((e26916 instanceof Object))
{var ex__22505__auto__ = e26916;var statearr_26917_28614 = state_26831;(statearr_26917_28614[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28615 = state_26831;
state_26831 = G__28615;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_26831){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_26831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28559,cs,m,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_26918 = f__22578__auto__.call(null);(statearr_26918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28559);
return statearr_26918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28559,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj26920 = {};return obj26920;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__19791__auto__ = m;if(and__19791__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__20430__auto__ = (((m == null))?null:m);return (function (){var or__19803__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t27040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27040 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27041){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta27041 = meta27041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27040.cljs$lang$type = true;
cljs.core.async.t27040.cljs$lang$ctorStr = "cljs.core.async/t27040";
cljs.core.async.t27040.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27040");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27042){var self__ = this;
var _27042__$1 = this;return self__.meta27041;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27042,meta27041__$1){var self__ = this;
var _27042__$1 = this;return (new cljs.core.async.t27040(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27041__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27040 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27040(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27041){return (new cljs.core.async.t27040(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27041));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27040(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22577__auto___28616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27112){var state_val_27113 = (state_27112[1]);if((state_val_27113 === 1))
{var inst_27046 = (state_27112[7]);var inst_27046__$1 = calc_state.call(null);var inst_27047 = cljs.core.seq_QMARK_.call(null,inst_27046__$1);var state_27112__$1 = (function (){var statearr_27114 = state_27112;(statearr_27114[7] = inst_27046__$1);
return statearr_27114;
})();if(inst_27047)
{var statearr_27115_28617 = state_27112__$1;(statearr_27115_28617[1] = 2);
} else
{var statearr_27116_28618 = state_27112__$1;(statearr_27116_28618[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 2))
{var inst_27046 = (state_27112[7]);var inst_27049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27046);var state_27112__$1 = state_27112;var statearr_27117_28619 = state_27112__$1;(statearr_27117_28619[2] = inst_27049);
(statearr_27117_28619[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 3))
{var inst_27046 = (state_27112[7]);var state_27112__$1 = state_27112;var statearr_27118_28620 = state_27112__$1;(statearr_27118_28620[2] = inst_27046);
(statearr_27118_28620[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 4))
{var inst_27046 = (state_27112[7]);var inst_27052 = (state_27112[2]);var inst_27053 = cljs.core.get.call(null,inst_27052,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27054 = cljs.core.get.call(null,inst_27052,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27055 = cljs.core.get.call(null,inst_27052,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27056 = inst_27046;var state_27112__$1 = (function (){var statearr_27119 = state_27112;(statearr_27119[8] = inst_27054);
(statearr_27119[9] = inst_27053);
(statearr_27119[10] = inst_27056);
(statearr_27119[11] = inst_27055);
return statearr_27119;
})();var statearr_27120_28621 = state_27112__$1;(statearr_27120_28621[2] = null);
(statearr_27120_28621[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 5))
{var inst_27056 = (state_27112[10]);var inst_27059 = cljs.core.seq_QMARK_.call(null,inst_27056);var state_27112__$1 = state_27112;if(inst_27059)
{var statearr_27121_28622 = state_27112__$1;(statearr_27121_28622[1] = 7);
} else
{var statearr_27122_28623 = state_27112__$1;(statearr_27122_28623[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 6))
{var inst_27110 = (state_27112[2]);var state_27112__$1 = state_27112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27112__$1,inst_27110);
} else
{if((state_val_27113 === 7))
{var inst_27056 = (state_27112[10]);var inst_27061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27056);var state_27112__$1 = state_27112;var statearr_27123_28624 = state_27112__$1;(statearr_27123_28624[2] = inst_27061);
(statearr_27123_28624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 8))
{var inst_27056 = (state_27112[10]);var state_27112__$1 = state_27112;var statearr_27124_28625 = state_27112__$1;(statearr_27124_28625[2] = inst_27056);
(statearr_27124_28625[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 9))
{var inst_27064 = (state_27112[12]);var inst_27064__$1 = (state_27112[2]);var inst_27065 = cljs.core.get.call(null,inst_27064__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27066 = cljs.core.get.call(null,inst_27064__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27067 = cljs.core.get.call(null,inst_27064__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27112__$1 = (function (){var statearr_27125 = state_27112;(statearr_27125[12] = inst_27064__$1);
(statearr_27125[13] = inst_27067);
(statearr_27125[14] = inst_27066);
return statearr_27125;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27112__$1,10,inst_27065);
} else
{if((state_val_27113 === 10))
{var inst_27071 = (state_27112[15]);var inst_27072 = (state_27112[16]);var inst_27070 = (state_27112[2]);var inst_27071__$1 = cljs.core.nth.call(null,inst_27070,0,null);var inst_27072__$1 = cljs.core.nth.call(null,inst_27070,1,null);var inst_27073 = (inst_27071__$1 == null);var inst_27074 = cljs.core._EQ_.call(null,inst_27072__$1,change);var inst_27075 = (inst_27073) || (inst_27074);var state_27112__$1 = (function (){var statearr_27126 = state_27112;(statearr_27126[15] = inst_27071__$1);
(statearr_27126[16] = inst_27072__$1);
return statearr_27126;
})();if(cljs.core.truth_(inst_27075))
{var statearr_27127_28626 = state_27112__$1;(statearr_27127_28626[1] = 11);
} else
{var statearr_27128_28627 = state_27112__$1;(statearr_27128_28627[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 11))
{var inst_27071 = (state_27112[15]);var inst_27077 = (inst_27071 == null);var state_27112__$1 = state_27112;if(cljs.core.truth_(inst_27077))
{var statearr_27129_28628 = state_27112__$1;(statearr_27129_28628[1] = 14);
} else
{var statearr_27130_28629 = state_27112__$1;(statearr_27130_28629[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 12))
{var inst_27086 = (state_27112[17]);var inst_27072 = (state_27112[16]);var inst_27067 = (state_27112[13]);var inst_27086__$1 = inst_27067.call(null,inst_27072);var state_27112__$1 = (function (){var statearr_27131 = state_27112;(statearr_27131[17] = inst_27086__$1);
return statearr_27131;
})();if(cljs.core.truth_(inst_27086__$1))
{var statearr_27132_28630 = state_27112__$1;(statearr_27132_28630[1] = 17);
} else
{var statearr_27133_28631 = state_27112__$1;(statearr_27133_28631[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 13))
{var inst_27108 = (state_27112[2]);var state_27112__$1 = state_27112;var statearr_27134_28632 = state_27112__$1;(statearr_27134_28632[2] = inst_27108);
(statearr_27134_28632[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 14))
{var inst_27072 = (state_27112[16]);var inst_27079 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27072);var state_27112__$1 = state_27112;var statearr_27135_28633 = state_27112__$1;(statearr_27135_28633[2] = inst_27079);
(statearr_27135_28633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 15))
{var state_27112__$1 = state_27112;var statearr_27136_28634 = state_27112__$1;(statearr_27136_28634[2] = null);
(statearr_27136_28634[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 16))
{var inst_27082 = (state_27112[2]);var inst_27083 = calc_state.call(null);var inst_27056 = inst_27083;var state_27112__$1 = (function (){var statearr_27137 = state_27112;(statearr_27137[18] = inst_27082);
(statearr_27137[10] = inst_27056);
return statearr_27137;
})();var statearr_27138_28635 = state_27112__$1;(statearr_27138_28635[2] = null);
(statearr_27138_28635[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 17))
{var inst_27086 = (state_27112[17]);var state_27112__$1 = state_27112;var statearr_27139_28636 = state_27112__$1;(statearr_27139_28636[2] = inst_27086);
(statearr_27139_28636[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 18))
{var inst_27072 = (state_27112[16]);var inst_27067 = (state_27112[13]);var inst_27066 = (state_27112[14]);var inst_27089 = cljs.core.empty_QMARK_.call(null,inst_27067);var inst_27090 = inst_27066.call(null,inst_27072);var inst_27091 = cljs.core.not.call(null,inst_27090);var inst_27092 = (inst_27089) && (inst_27091);var state_27112__$1 = state_27112;var statearr_27140_28637 = state_27112__$1;(statearr_27140_28637[2] = inst_27092);
(statearr_27140_28637[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 19))
{var inst_27094 = (state_27112[2]);var state_27112__$1 = state_27112;if(cljs.core.truth_(inst_27094))
{var statearr_27141_28638 = state_27112__$1;(statearr_27141_28638[1] = 20);
} else
{var statearr_27142_28639 = state_27112__$1;(statearr_27142_28639[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 20))
{var inst_27071 = (state_27112[15]);var state_27112__$1 = state_27112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27112__$1,23,out,inst_27071);
} else
{if((state_val_27113 === 21))
{var inst_27064 = (state_27112[12]);var inst_27056 = inst_27064;var state_27112__$1 = (function (){var statearr_27143 = state_27112;(statearr_27143[10] = inst_27056);
return statearr_27143;
})();var statearr_27144_28640 = state_27112__$1;(statearr_27144_28640[2] = null);
(statearr_27144_28640[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 22))
{var inst_27106 = (state_27112[2]);var state_27112__$1 = state_27112;var statearr_27145_28641 = state_27112__$1;(statearr_27145_28641[2] = inst_27106);
(statearr_27145_28641[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 23))
{var inst_27097 = (state_27112[2]);var state_27112__$1 = state_27112;if(cljs.core.truth_(inst_27097))
{var statearr_27146_28642 = state_27112__$1;(statearr_27146_28642[1] = 24);
} else
{var statearr_27147_28643 = state_27112__$1;(statearr_27147_28643[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 24))
{var inst_27064 = (state_27112[12]);var inst_27056 = inst_27064;var state_27112__$1 = (function (){var statearr_27148 = state_27112;(statearr_27148[10] = inst_27056);
return statearr_27148;
})();var statearr_27149_28644 = state_27112__$1;(statearr_27149_28644[2] = null);
(statearr_27149_28644[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 25))
{var state_27112__$1 = state_27112;var statearr_27150_28645 = state_27112__$1;(statearr_27150_28645[2] = null);
(statearr_27150_28645[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27113 === 26))
{var inst_27102 = (state_27112[2]);var state_27112__$1 = state_27112;var statearr_27151_28646 = state_27112__$1;(statearr_27151_28646[2] = inst_27102);
(statearr_27151_28646[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22501__auto__,c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27155[0] = state_machine__22502__auto__);
(statearr_27155[1] = 1);
return statearr_27155;
});
var state_machine__22502__auto____1 = (function (state_27112){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27112);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27156){if((e27156 instanceof Object))
{var ex__22505__auto__ = e27156;var statearr_27157_28647 = state_27112;(statearr_27157_28647[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28648 = state_27112;
state_27112 = G__28648;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27112){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22579__auto__ = (function (){var statearr_27158 = f__22578__auto__.call(null);(statearr_27158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28616);
return statearr_27158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28616,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj27160 = {};return obj27160;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__19791__auto__ = p;if(and__19791__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__19791__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__20430__auto__ = (((p == null))?null:p);return (function (){var or__19803__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20430__auto__)]);if(or__19803__auto__)
{return or__19803__auto__;
} else
{var or__19803__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__19803__auto____$1)
{return or__19803__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__19803__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19803__auto__,mults){
return (function (p1__27161_SHARP_){if(cljs.core.truth_(p1__27161_SHARP_.call(null,topic)))
{return p1__27161_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27161_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27284 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27284 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27285){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27285 = meta27285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27284.cljs$lang$type = true;
cljs.core.async.t27284.cljs$lang$ctorStr = "cljs.core.async/t27284";
cljs.core.async.t27284.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27284");
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27284.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27286){var self__ = this;
var _27286__$1 = this;return self__.meta27285;
});})(mults,ensure_mult))
;
cljs.core.async.t27284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27286,meta27285__$1){var self__ = this;
var _27286__$1 = this;return (new cljs.core.async.t27284(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27285__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27284 = ((function (mults,ensure_mult){
return (function __GT_t27284(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27285){return (new cljs.core.async.t27284(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27285));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27284(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22577__auto___28649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28649,mults,ensure_mult,p){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28649,mults,ensure_mult,p){
return (function (state_27358){var state_val_27359 = (state_27358[1]);if((state_val_27359 === 1))
{var state_27358__$1 = state_27358;var statearr_27360_28650 = state_27358__$1;(statearr_27360_28650[2] = null);
(statearr_27360_28650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 2))
{var state_27358__$1 = state_27358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27358__$1,4,ch);
} else
{if((state_val_27359 === 3))
{var inst_27356 = (state_27358[2]);var state_27358__$1 = state_27358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27358__$1,inst_27356);
} else
{if((state_val_27359 === 4))
{var inst_27289 = (state_27358[7]);var inst_27289__$1 = (state_27358[2]);var inst_27290 = (inst_27289__$1 == null);var state_27358__$1 = (function (){var statearr_27361 = state_27358;(statearr_27361[7] = inst_27289__$1);
return statearr_27361;
})();if(cljs.core.truth_(inst_27290))
{var statearr_27362_28651 = state_27358__$1;(statearr_27362_28651[1] = 5);
} else
{var statearr_27363_28652 = state_27358__$1;(statearr_27363_28652[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 5))
{var inst_27296 = cljs.core.deref.call(null,mults);var inst_27297 = cljs.core.vals.call(null,inst_27296);var inst_27298 = cljs.core.seq.call(null,inst_27297);var inst_27299 = inst_27298;var inst_27300 = null;var inst_27301 = 0;var inst_27302 = 0;var state_27358__$1 = (function (){var statearr_27364 = state_27358;(statearr_27364[8] = inst_27299);
(statearr_27364[9] = inst_27301);
(statearr_27364[10] = inst_27302);
(statearr_27364[11] = inst_27300);
return statearr_27364;
})();var statearr_27365_28653 = state_27358__$1;(statearr_27365_28653[2] = null);
(statearr_27365_28653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 6))
{var inst_27289 = (state_27358[7]);var inst_27339 = (state_27358[12]);var inst_27337 = (state_27358[13]);var inst_27337__$1 = topic_fn.call(null,inst_27289);var inst_27338 = cljs.core.deref.call(null,mults);var inst_27339__$1 = cljs.core.get.call(null,inst_27338,inst_27337__$1);var state_27358__$1 = (function (){var statearr_27366 = state_27358;(statearr_27366[12] = inst_27339__$1);
(statearr_27366[13] = inst_27337__$1);
return statearr_27366;
})();if(cljs.core.truth_(inst_27339__$1))
{var statearr_27367_28654 = state_27358__$1;(statearr_27367_28654[1] = 19);
} else
{var statearr_27368_28655 = state_27358__$1;(statearr_27368_28655[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 7))
{var inst_27354 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27369_28656 = state_27358__$1;(statearr_27369_28656[2] = inst_27354);
(statearr_27369_28656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 8))
{var inst_27301 = (state_27358[9]);var inst_27302 = (state_27358[10]);var inst_27304 = (inst_27302 < inst_27301);var inst_27305 = inst_27304;var state_27358__$1 = state_27358;if(cljs.core.truth_(inst_27305))
{var statearr_27373_28657 = state_27358__$1;(statearr_27373_28657[1] = 10);
} else
{var statearr_27374_28658 = state_27358__$1;(statearr_27374_28658[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 9))
{var inst_27335 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27375_28659 = state_27358__$1;(statearr_27375_28659[2] = inst_27335);
(statearr_27375_28659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 10))
{var inst_27299 = (state_27358[8]);var inst_27301 = (state_27358[9]);var inst_27302 = (state_27358[10]);var inst_27300 = (state_27358[11]);var inst_27307 = cljs.core._nth.call(null,inst_27300,inst_27302);var inst_27308 = cljs.core.async.muxch_STAR_.call(null,inst_27307);var inst_27309 = cljs.core.async.close_BANG_.call(null,inst_27308);var inst_27310 = (inst_27302 + 1);var tmp27370 = inst_27299;var tmp27371 = inst_27301;var tmp27372 = inst_27300;var inst_27299__$1 = tmp27370;var inst_27300__$1 = tmp27372;var inst_27301__$1 = tmp27371;var inst_27302__$1 = inst_27310;var state_27358__$1 = (function (){var statearr_27376 = state_27358;(statearr_27376[14] = inst_27309);
(statearr_27376[8] = inst_27299__$1);
(statearr_27376[9] = inst_27301__$1);
(statearr_27376[10] = inst_27302__$1);
(statearr_27376[11] = inst_27300__$1);
return statearr_27376;
})();var statearr_27377_28660 = state_27358__$1;(statearr_27377_28660[2] = null);
(statearr_27377_28660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 11))
{var inst_27313 = (state_27358[15]);var inst_27299 = (state_27358[8]);var inst_27313__$1 = cljs.core.seq.call(null,inst_27299);var state_27358__$1 = (function (){var statearr_27378 = state_27358;(statearr_27378[15] = inst_27313__$1);
return statearr_27378;
})();if(inst_27313__$1)
{var statearr_27379_28661 = state_27358__$1;(statearr_27379_28661[1] = 13);
} else
{var statearr_27380_28662 = state_27358__$1;(statearr_27380_28662[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 12))
{var inst_27333 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27381_28663 = state_27358__$1;(statearr_27381_28663[2] = inst_27333);
(statearr_27381_28663[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 13))
{var inst_27313 = (state_27358[15]);var inst_27315 = cljs.core.chunked_seq_QMARK_.call(null,inst_27313);var state_27358__$1 = state_27358;if(inst_27315)
{var statearr_27382_28664 = state_27358__$1;(statearr_27382_28664[1] = 16);
} else
{var statearr_27383_28665 = state_27358__$1;(statearr_27383_28665[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 14))
{var state_27358__$1 = state_27358;var statearr_27384_28666 = state_27358__$1;(statearr_27384_28666[2] = null);
(statearr_27384_28666[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 15))
{var inst_27331 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27385_28667 = state_27358__$1;(statearr_27385_28667[2] = inst_27331);
(statearr_27385_28667[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 16))
{var inst_27313 = (state_27358[15]);var inst_27317 = cljs.core.chunk_first.call(null,inst_27313);var inst_27318 = cljs.core.chunk_rest.call(null,inst_27313);var inst_27319 = cljs.core.count.call(null,inst_27317);var inst_27299 = inst_27318;var inst_27300 = inst_27317;var inst_27301 = inst_27319;var inst_27302 = 0;var state_27358__$1 = (function (){var statearr_27386 = state_27358;(statearr_27386[8] = inst_27299);
(statearr_27386[9] = inst_27301);
(statearr_27386[10] = inst_27302);
(statearr_27386[11] = inst_27300);
return statearr_27386;
})();var statearr_27387_28668 = state_27358__$1;(statearr_27387_28668[2] = null);
(statearr_27387_28668[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 17))
{var inst_27313 = (state_27358[15]);var inst_27322 = cljs.core.first.call(null,inst_27313);var inst_27323 = cljs.core.async.muxch_STAR_.call(null,inst_27322);var inst_27324 = cljs.core.async.close_BANG_.call(null,inst_27323);var inst_27325 = cljs.core.next.call(null,inst_27313);var inst_27299 = inst_27325;var inst_27300 = null;var inst_27301 = 0;var inst_27302 = 0;var state_27358__$1 = (function (){var statearr_27388 = state_27358;(statearr_27388[16] = inst_27324);
(statearr_27388[8] = inst_27299);
(statearr_27388[9] = inst_27301);
(statearr_27388[10] = inst_27302);
(statearr_27388[11] = inst_27300);
return statearr_27388;
})();var statearr_27389_28669 = state_27358__$1;(statearr_27389_28669[2] = null);
(statearr_27389_28669[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 18))
{var inst_27328 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27390_28670 = state_27358__$1;(statearr_27390_28670[2] = inst_27328);
(statearr_27390_28670[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 19))
{var inst_27289 = (state_27358[7]);var inst_27339 = (state_27358[12]);var inst_27341 = cljs.core.async.muxch_STAR_.call(null,inst_27339);var state_27358__$1 = state_27358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27358__$1,22,inst_27341,inst_27289);
} else
{if((state_val_27359 === 20))
{var state_27358__$1 = state_27358;var statearr_27391_28671 = state_27358__$1;(statearr_27391_28671[2] = null);
(statearr_27391_28671[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 21))
{var inst_27351 = (state_27358[2]);var state_27358__$1 = (function (){var statearr_27392 = state_27358;(statearr_27392[17] = inst_27351);
return statearr_27392;
})();var statearr_27393_28672 = state_27358__$1;(statearr_27393_28672[2] = null);
(statearr_27393_28672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 22))
{var inst_27343 = (state_27358[2]);var state_27358__$1 = state_27358;if(cljs.core.truth_(inst_27343))
{var statearr_27394_28673 = state_27358__$1;(statearr_27394_28673[1] = 23);
} else
{var statearr_27395_28674 = state_27358__$1;(statearr_27395_28674[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 23))
{var state_27358__$1 = state_27358;var statearr_27396_28675 = state_27358__$1;(statearr_27396_28675[2] = null);
(statearr_27396_28675[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 24))
{var inst_27337 = (state_27358[13]);var inst_27346 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27337);var state_27358__$1 = state_27358;var statearr_27397_28676 = state_27358__$1;(statearr_27397_28676[2] = inst_27346);
(statearr_27397_28676[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27359 === 25))
{var inst_27348 = (state_27358[2]);var state_27358__$1 = state_27358;var statearr_27398_28677 = state_27358__$1;(statearr_27398_28677[2] = inst_27348);
(statearr_27398_28677[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28649,mults,ensure_mult,p))
;return ((function (switch__22501__auto__,c__22577__auto___28649,mults,ensure_mult,p){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27402[0] = state_machine__22502__auto__);
(statearr_27402[1] = 1);
return statearr_27402;
});
var state_machine__22502__auto____1 = (function (state_27358){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27358);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27403){if((e27403 instanceof Object))
{var ex__22505__auto__ = e27403;var statearr_27404_28678 = state_27358;(statearr_27404_28678[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27358);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28679 = state_27358;
state_27358 = G__28679;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27358){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28649,mults,ensure_mult,p))
})();var state__22579__auto__ = (function (){var statearr_27405 = f__22578__auto__.call(null);(statearr_27405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28649);
return statearr_27405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28649,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__22577__auto___28680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27512){var state_val_27513 = (state_27512[1]);if((state_val_27513 === 1))
{var state_27512__$1 = state_27512;var statearr_27514_28681 = state_27512__$1;(statearr_27514_28681[2] = null);
(statearr_27514_28681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 2))
{var inst_27475 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27476 = 0;var state_27512__$1 = (function (){var statearr_27515 = state_27512;(statearr_27515[7] = inst_27475);
(statearr_27515[8] = inst_27476);
return statearr_27515;
})();var statearr_27516_28682 = state_27512__$1;(statearr_27516_28682[2] = null);
(statearr_27516_28682[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 3))
{var inst_27510 = (state_27512[2]);var state_27512__$1 = state_27512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27512__$1,inst_27510);
} else
{if((state_val_27513 === 4))
{var inst_27476 = (state_27512[8]);var inst_27478 = (inst_27476 < cnt);var state_27512__$1 = state_27512;if(cljs.core.truth_(inst_27478))
{var statearr_27517_28683 = state_27512__$1;(statearr_27517_28683[1] = 6);
} else
{var statearr_27518_28684 = state_27512__$1;(statearr_27518_28684[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 5))
{var inst_27496 = (state_27512[2]);var state_27512__$1 = (function (){var statearr_27519 = state_27512;(statearr_27519[9] = inst_27496);
return statearr_27519;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27512__$1,12,dchan);
} else
{if((state_val_27513 === 6))
{var state_27512__$1 = state_27512;var statearr_27520_28685 = state_27512__$1;(statearr_27520_28685[2] = null);
(statearr_27520_28685[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 7))
{var state_27512__$1 = state_27512;var statearr_27521_28686 = state_27512__$1;(statearr_27521_28686[2] = null);
(statearr_27521_28686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 8))
{var inst_27494 = (state_27512[2]);var state_27512__$1 = state_27512;var statearr_27522_28687 = state_27512__$1;(statearr_27522_28687[2] = inst_27494);
(statearr_27522_28687[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 9))
{var inst_27476 = (state_27512[8]);var inst_27489 = (state_27512[2]);var inst_27490 = (inst_27476 + 1);var inst_27476__$1 = inst_27490;var state_27512__$1 = (function (){var statearr_27523 = state_27512;(statearr_27523[8] = inst_27476__$1);
(statearr_27523[10] = inst_27489);
return statearr_27523;
})();var statearr_27524_28688 = state_27512__$1;(statearr_27524_28688[2] = null);
(statearr_27524_28688[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 10))
{var inst_27480 = (state_27512[2]);var inst_27481 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27512__$1 = (function (){var statearr_27525 = state_27512;(statearr_27525[11] = inst_27480);
return statearr_27525;
})();var statearr_27526_28689 = state_27512__$1;(statearr_27526_28689[2] = inst_27481);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 11))
{var inst_27476 = (state_27512[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27512,10,Object,null,9);var inst_27485 = chs__$1.call(null,inst_27476);var inst_27486 = done.call(null,inst_27476);var inst_27487 = cljs.core.async.take_BANG_.call(null,inst_27485,inst_27486);var state_27512__$1 = state_27512;var statearr_27527_28690 = state_27512__$1;(statearr_27527_28690[2] = inst_27487);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 12))
{var inst_27498 = (state_27512[12]);var inst_27498__$1 = (state_27512[2]);var inst_27499 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27498__$1);var state_27512__$1 = (function (){var statearr_27528 = state_27512;(statearr_27528[12] = inst_27498__$1);
return statearr_27528;
})();if(cljs.core.truth_(inst_27499))
{var statearr_27529_28691 = state_27512__$1;(statearr_27529_28691[1] = 13);
} else
{var statearr_27530_28692 = state_27512__$1;(statearr_27530_28692[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 13))
{var inst_27501 = cljs.core.async.close_BANG_.call(null,out);var state_27512__$1 = state_27512;var statearr_27531_28693 = state_27512__$1;(statearr_27531_28693[2] = inst_27501);
(statearr_27531_28693[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 14))
{var inst_27498 = (state_27512[12]);var inst_27503 = cljs.core.apply.call(null,f,inst_27498);var state_27512__$1 = state_27512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27512__$1,16,out,inst_27503);
} else
{if((state_val_27513 === 15))
{var inst_27508 = (state_27512[2]);var state_27512__$1 = state_27512;var statearr_27532_28694 = state_27512__$1;(statearr_27532_28694[2] = inst_27508);
(statearr_27532_28694[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27513 === 16))
{var inst_27505 = (state_27512[2]);var state_27512__$1 = (function (){var statearr_27533 = state_27512;(statearr_27533[13] = inst_27505);
return statearr_27533;
})();var statearr_27534_28695 = state_27512__$1;(statearr_27534_28695[2] = null);
(statearr_27534_28695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22501__auto__,c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27538[0] = state_machine__22502__auto__);
(statearr_27538[1] = 1);
return statearr_27538;
});
var state_machine__22502__auto____1 = (function (state_27512){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27512);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27539){if((e27539 instanceof Object))
{var ex__22505__auto__ = e27539;var statearr_27540_28696 = state_27512;(statearr_27540_28696[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28697 = state_27512;
state_27512 = G__28697;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27512){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22579__auto__ = (function (){var statearr_27541 = f__22578__auto__.call(null);(statearr_27541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28680);
return statearr_27541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28680,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28698,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28698,out){
return (function (state_27625){var state_val_27626 = (state_27625[1]);if((state_val_27626 === 1))
{var inst_27596 = cljs.core.vec.call(null,chs);var inst_27597 = inst_27596;var state_27625__$1 = (function (){var statearr_27627 = state_27625;(statearr_27627[7] = inst_27597);
return statearr_27627;
})();var statearr_27628_28699 = state_27625__$1;(statearr_27628_28699[2] = null);
(statearr_27628_28699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 2))
{var inst_27597 = (state_27625[7]);var inst_27599 = cljs.core.count.call(null,inst_27597);var inst_27600 = (inst_27599 > 0);var state_27625__$1 = state_27625;if(cljs.core.truth_(inst_27600))
{var statearr_27629_28700 = state_27625__$1;(statearr_27629_28700[1] = 4);
} else
{var statearr_27630_28701 = state_27625__$1;(statearr_27630_28701[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 3))
{var inst_27623 = (state_27625[2]);var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27625__$1,inst_27623);
} else
{if((state_val_27626 === 4))
{var inst_27597 = (state_27625[7]);var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27625__$1,7,inst_27597);
} else
{if((state_val_27626 === 5))
{var inst_27619 = cljs.core.async.close_BANG_.call(null,out);var state_27625__$1 = state_27625;var statearr_27631_28702 = state_27625__$1;(statearr_27631_28702[2] = inst_27619);
(statearr_27631_28702[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 6))
{var inst_27621 = (state_27625[2]);var state_27625__$1 = state_27625;var statearr_27632_28703 = state_27625__$1;(statearr_27632_28703[2] = inst_27621);
(statearr_27632_28703[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 7))
{var inst_27604 = (state_27625[8]);var inst_27605 = (state_27625[9]);var inst_27604__$1 = (state_27625[2]);var inst_27605__$1 = cljs.core.nth.call(null,inst_27604__$1,0,null);var inst_27606 = cljs.core.nth.call(null,inst_27604__$1,1,null);var inst_27607 = (inst_27605__$1 == null);var state_27625__$1 = (function (){var statearr_27633 = state_27625;(statearr_27633[8] = inst_27604__$1);
(statearr_27633[9] = inst_27605__$1);
(statearr_27633[10] = inst_27606);
return statearr_27633;
})();if(cljs.core.truth_(inst_27607))
{var statearr_27634_28704 = state_27625__$1;(statearr_27634_28704[1] = 8);
} else
{var statearr_27635_28705 = state_27625__$1;(statearr_27635_28705[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 8))
{var inst_27597 = (state_27625[7]);var inst_27604 = (state_27625[8]);var inst_27605 = (state_27625[9]);var inst_27606 = (state_27625[10]);var inst_27609 = (function (){var c = inst_27606;var v = inst_27605;var vec__27602 = inst_27604;var cs = inst_27597;return ((function (c,v,vec__27602,cs,inst_27597,inst_27604,inst_27605,inst_27606,state_val_27626,c__22577__auto___28698,out){
return (function (p1__27542_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27542_SHARP_);
});
;})(c,v,vec__27602,cs,inst_27597,inst_27604,inst_27605,inst_27606,state_val_27626,c__22577__auto___28698,out))
})();var inst_27610 = cljs.core.filterv.call(null,inst_27609,inst_27597);var inst_27597__$1 = inst_27610;var state_27625__$1 = (function (){var statearr_27636 = state_27625;(statearr_27636[7] = inst_27597__$1);
return statearr_27636;
})();var statearr_27637_28706 = state_27625__$1;(statearr_27637_28706[2] = null);
(statearr_27637_28706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 9))
{var inst_27605 = (state_27625[9]);var state_27625__$1 = state_27625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27625__$1,11,out,inst_27605);
} else
{if((state_val_27626 === 10))
{var inst_27617 = (state_27625[2]);var state_27625__$1 = state_27625;var statearr_27639_28707 = state_27625__$1;(statearr_27639_28707[2] = inst_27617);
(statearr_27639_28707[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27626 === 11))
{var inst_27597 = (state_27625[7]);var inst_27614 = (state_27625[2]);var tmp27638 = inst_27597;var inst_27597__$1 = tmp27638;var state_27625__$1 = (function (){var statearr_27640 = state_27625;(statearr_27640[7] = inst_27597__$1);
(statearr_27640[11] = inst_27614);
return statearr_27640;
})();var statearr_27641_28708 = state_27625__$1;(statearr_27641_28708[2] = null);
(statearr_27641_28708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28698,out))
;return ((function (switch__22501__auto__,c__22577__auto___28698,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27645 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27645[0] = state_machine__22502__auto__);
(statearr_27645[1] = 1);
return statearr_27645;
});
var state_machine__22502__auto____1 = (function (state_27625){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27625);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27646){if((e27646 instanceof Object))
{var ex__22505__auto__ = e27646;var statearr_27647_28709 = state_27625;(statearr_27647_28709[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28710 = state_27625;
state_27625 = G__28710;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27625){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28698,out))
})();var state__22579__auto__ = (function (){var statearr_27648 = f__22578__auto__.call(null);(statearr_27648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28698);
return statearr_27648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28698,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28711,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28711,out){
return (function (state_27718){var state_val_27719 = (state_27718[1]);if((state_val_27719 === 1))
{var inst_27695 = 0;var state_27718__$1 = (function (){var statearr_27720 = state_27718;(statearr_27720[7] = inst_27695);
return statearr_27720;
})();var statearr_27721_28712 = state_27718__$1;(statearr_27721_28712[2] = null);
(statearr_27721_28712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 2))
{var inst_27695 = (state_27718[7]);var inst_27697 = (inst_27695 < n);var state_27718__$1 = state_27718;if(cljs.core.truth_(inst_27697))
{var statearr_27722_28713 = state_27718__$1;(statearr_27722_28713[1] = 4);
} else
{var statearr_27723_28714 = state_27718__$1;(statearr_27723_28714[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 3))
{var inst_27715 = (state_27718[2]);var inst_27716 = cljs.core.async.close_BANG_.call(null,out);var state_27718__$1 = (function (){var statearr_27724 = state_27718;(statearr_27724[8] = inst_27715);
return statearr_27724;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27718__$1,inst_27716);
} else
{if((state_val_27719 === 4))
{var state_27718__$1 = state_27718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27718__$1,7,ch);
} else
{if((state_val_27719 === 5))
{var state_27718__$1 = state_27718;var statearr_27725_28715 = state_27718__$1;(statearr_27725_28715[2] = null);
(statearr_27725_28715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 6))
{var inst_27713 = (state_27718[2]);var state_27718__$1 = state_27718;var statearr_27726_28716 = state_27718__$1;(statearr_27726_28716[2] = inst_27713);
(statearr_27726_28716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 7))
{var inst_27700 = (state_27718[9]);var inst_27700__$1 = (state_27718[2]);var inst_27701 = (inst_27700__$1 == null);var inst_27702 = cljs.core.not.call(null,inst_27701);var state_27718__$1 = (function (){var statearr_27727 = state_27718;(statearr_27727[9] = inst_27700__$1);
return statearr_27727;
})();if(inst_27702)
{var statearr_27728_28717 = state_27718__$1;(statearr_27728_28717[1] = 8);
} else
{var statearr_27729_28718 = state_27718__$1;(statearr_27729_28718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 8))
{var inst_27700 = (state_27718[9]);var state_27718__$1 = state_27718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27718__$1,11,out,inst_27700);
} else
{if((state_val_27719 === 9))
{var state_27718__$1 = state_27718;var statearr_27730_28719 = state_27718__$1;(statearr_27730_28719[2] = null);
(statearr_27730_28719[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 10))
{var inst_27710 = (state_27718[2]);var state_27718__$1 = state_27718;var statearr_27731_28720 = state_27718__$1;(statearr_27731_28720[2] = inst_27710);
(statearr_27731_28720[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27719 === 11))
{var inst_27695 = (state_27718[7]);var inst_27705 = (state_27718[2]);var inst_27706 = (inst_27695 + 1);var inst_27695__$1 = inst_27706;var state_27718__$1 = (function (){var statearr_27732 = state_27718;(statearr_27732[10] = inst_27705);
(statearr_27732[7] = inst_27695__$1);
return statearr_27732;
})();var statearr_27733_28721 = state_27718__$1;(statearr_27733_28721[2] = null);
(statearr_27733_28721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28711,out))
;return ((function (switch__22501__auto__,c__22577__auto___28711,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27737 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27737[0] = state_machine__22502__auto__);
(statearr_27737[1] = 1);
return statearr_27737;
});
var state_machine__22502__auto____1 = (function (state_27718){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27718);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27738){if((e27738 instanceof Object))
{var ex__22505__auto__ = e27738;var statearr_27739_28722 = state_27718;(statearr_27739_28722[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28723 = state_27718;
state_27718 = G__28723;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28711,out))
})();var state__22579__auto__ = (function (){var statearr_27740 = f__22578__auto__.call(null);(statearr_27740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28711);
return statearr_27740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28711,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27748 = (function (ch,f,map_LT_,meta27749){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27749 = meta27749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27748.cljs$lang$type = true;
cljs.core.async.t27748.cljs$lang$ctorStr = "cljs.core.async/t27748";
cljs.core.async.t27748.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27748");
});
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27751 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27751 = (function (fn1,_,meta27749,ch,f,map_LT_,meta27752){
this.fn1 = fn1;
this._ = _;
this.meta27749 = meta27749;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27752 = meta27752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27751.cljs$lang$type = true;
cljs.core.async.t27751.cljs$lang$ctorStr = "cljs.core.async/t27751";
cljs.core.async.t27751.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27751");
});})(___$1))
;
cljs.core.async.t27751.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27751.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27741_SHARP_){return f1.call(null,(((p1__27741_SHARP_ == null))?null:self__.f.call(null,p1__27741_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27753){var self__ = this;
var _27753__$1 = this;return self__.meta27752;
});})(___$1))
;
cljs.core.async.t27751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27753,meta27752__$1){var self__ = this;
var _27753__$1 = this;return (new cljs.core.async.t27751(self__.fn1,self__._,self__.meta27749,self__.ch,self__.f,self__.map_LT_,meta27752__$1));
});})(___$1))
;
cljs.core.async.__GT_t27751 = ((function (___$1){
return (function __GT_t27751(fn1__$1,___$2,meta27749__$1,ch__$2,f__$2,map_LT___$2,meta27752){return (new cljs.core.async.t27751(fn1__$1,___$2,meta27749__$1,ch__$2,f__$2,map_LT___$2,meta27752));
});})(___$1))
;
}
return (new cljs.core.async.t27751(fn1,___$1,self__.meta27749,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__19791__auto__ = ret;if(cljs.core.truth_(and__19791__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__19791__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27750){var self__ = this;
var _27750__$1 = this;return self__.meta27749;
});
cljs.core.async.t27748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27750,meta27749__$1){var self__ = this;
var _27750__$1 = this;return (new cljs.core.async.t27748(self__.ch,self__.f,self__.map_LT_,meta27749__$1));
});
cljs.core.async.__GT_t27748 = (function __GT_t27748(ch__$1,f__$1,map_LT___$1,meta27749){return (new cljs.core.async.t27748(ch__$1,f__$1,map_LT___$1,meta27749));
});
}
return (new cljs.core.async.t27748(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27757 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27757 = (function (ch,f,map_GT_,meta27758){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27758 = meta27758;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27757.cljs$lang$type = true;
cljs.core.async.t27757.cljs$lang$ctorStr = "cljs.core.async/t27757";
cljs.core.async.t27757.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27757");
});
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27759){var self__ = this;
var _27759__$1 = this;return self__.meta27758;
});
cljs.core.async.t27757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27759,meta27758__$1){var self__ = this;
var _27759__$1 = this;return (new cljs.core.async.t27757(self__.ch,self__.f,self__.map_GT_,meta27758__$1));
});
cljs.core.async.__GT_t27757 = (function __GT_t27757(ch__$1,f__$1,map_GT___$1,meta27758){return (new cljs.core.async.t27757(ch__$1,f__$1,map_GT___$1,meta27758));
});
}
return (new cljs.core.async.t27757(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27763 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27763 = (function (ch,p,filter_GT_,meta27764){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27764 = meta27764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27763.cljs$lang$type = true;
cljs.core.async.t27763.cljs$lang$ctorStr = "cljs.core.async/t27763";
cljs.core.async.t27763.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27763");
});
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27763.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27765){var self__ = this;
var _27765__$1 = this;return self__.meta27764;
});
cljs.core.async.t27763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27765,meta27764__$1){var self__ = this;
var _27765__$1 = this;return (new cljs.core.async.t27763(self__.ch,self__.p,self__.filter_GT_,meta27764__$1));
});
cljs.core.async.__GT_t27763 = (function __GT_t27763(ch__$1,p__$1,filter_GT___$1,meta27764){return (new cljs.core.async.t27763(ch__$1,p__$1,filter_GT___$1,meta27764));
});
}
return (new cljs.core.async.t27763(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28724 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28724,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28724,out){
return (function (state_27827){var state_val_27828 = (state_27827[1]);if((state_val_27828 === 1))
{var state_27827__$1 = state_27827;var statearr_27829_28725 = state_27827__$1;(statearr_27829_28725[2] = null);
(statearr_27829_28725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 2))
{var state_27827__$1 = state_27827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27827__$1,4,ch);
} else
{if((state_val_27828 === 3))
{var inst_27825 = (state_27827[2]);var state_27827__$1 = state_27827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27827__$1,inst_27825);
} else
{if((state_val_27828 === 4))
{var inst_27809 = (state_27827[7]);var inst_27809__$1 = (state_27827[2]);var inst_27810 = (inst_27809__$1 == null);var state_27827__$1 = (function (){var statearr_27830 = state_27827;(statearr_27830[7] = inst_27809__$1);
return statearr_27830;
})();if(cljs.core.truth_(inst_27810))
{var statearr_27831_28726 = state_27827__$1;(statearr_27831_28726[1] = 5);
} else
{var statearr_27832_28727 = state_27827__$1;(statearr_27832_28727[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 5))
{var inst_27812 = cljs.core.async.close_BANG_.call(null,out);var state_27827__$1 = state_27827;var statearr_27833_28728 = state_27827__$1;(statearr_27833_28728[2] = inst_27812);
(statearr_27833_28728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 6))
{var inst_27809 = (state_27827[7]);var inst_27814 = p.call(null,inst_27809);var state_27827__$1 = state_27827;if(cljs.core.truth_(inst_27814))
{var statearr_27834_28729 = state_27827__$1;(statearr_27834_28729[1] = 8);
} else
{var statearr_27835_28730 = state_27827__$1;(statearr_27835_28730[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 7))
{var inst_27823 = (state_27827[2]);var state_27827__$1 = state_27827;var statearr_27836_28731 = state_27827__$1;(statearr_27836_28731[2] = inst_27823);
(statearr_27836_28731[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 8))
{var inst_27809 = (state_27827[7]);var state_27827__$1 = state_27827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27827__$1,11,out,inst_27809);
} else
{if((state_val_27828 === 9))
{var state_27827__$1 = state_27827;var statearr_27837_28732 = state_27827__$1;(statearr_27837_28732[2] = null);
(statearr_27837_28732[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 10))
{var inst_27820 = (state_27827[2]);var state_27827__$1 = (function (){var statearr_27838 = state_27827;(statearr_27838[8] = inst_27820);
return statearr_27838;
})();var statearr_27839_28733 = state_27827__$1;(statearr_27839_28733[2] = null);
(statearr_27839_28733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 11))
{var inst_27817 = (state_27827[2]);var state_27827__$1 = state_27827;var statearr_27840_28734 = state_27827__$1;(statearr_27840_28734[2] = inst_27817);
(statearr_27840_28734[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28724,out))
;return ((function (switch__22501__auto__,c__22577__auto___28724,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_27844 = [null,null,null,null,null,null,null,null,null];(statearr_27844[0] = state_machine__22502__auto__);
(statearr_27844[1] = 1);
return statearr_27844;
});
var state_machine__22502__auto____1 = (function (state_27827){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_27827);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e27845){if((e27845 instanceof Object))
{var ex__22505__auto__ = e27845;var statearr_27846_28735 = state_27827;(statearr_27846_28735[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28736 = state_27827;
state_27827 = G__28736;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_27827){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_27827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28724,out))
})();var state__22579__auto__ = (function (){var statearr_27847 = f__22578__auto__.call(null);(statearr_27847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28724);
return statearr_27847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28724,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__){
return (function (state_28013){var state_val_28014 = (state_28013[1]);if((state_val_28014 === 1))
{var state_28013__$1 = state_28013;var statearr_28015_28737 = state_28013__$1;(statearr_28015_28737[2] = null);
(statearr_28015_28737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 2))
{var state_28013__$1 = state_28013;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28013__$1,4,in$);
} else
{if((state_val_28014 === 3))
{var inst_28011 = (state_28013[2]);var state_28013__$1 = state_28013;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28013__$1,inst_28011);
} else
{if((state_val_28014 === 4))
{var inst_27954 = (state_28013[7]);var inst_27954__$1 = (state_28013[2]);var inst_27955 = (inst_27954__$1 == null);var state_28013__$1 = (function (){var statearr_28016 = state_28013;(statearr_28016[7] = inst_27954__$1);
return statearr_28016;
})();if(cljs.core.truth_(inst_27955))
{var statearr_28017_28738 = state_28013__$1;(statearr_28017_28738[1] = 5);
} else
{var statearr_28018_28739 = state_28013__$1;(statearr_28018_28739[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 5))
{var inst_27957 = cljs.core.async.close_BANG_.call(null,out);var state_28013__$1 = state_28013;var statearr_28019_28740 = state_28013__$1;(statearr_28019_28740[2] = inst_27957);
(statearr_28019_28740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 6))
{var inst_27954 = (state_28013[7]);var inst_27963 = f.call(null,inst_27954);var inst_27964 = cljs.core.seq.call(null,inst_27963);var inst_27965 = inst_27964;var inst_27966 = null;var inst_27967 = 0;var inst_27968 = 0;var state_28013__$1 = (function (){var statearr_28020 = state_28013;(statearr_28020[8] = inst_27966);
(statearr_28020[9] = inst_27965);
(statearr_28020[10] = inst_27967);
(statearr_28020[11] = inst_27968);
return statearr_28020;
})();var statearr_28021_28741 = state_28013__$1;(statearr_28021_28741[2] = null);
(statearr_28021_28741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 7))
{var inst_28009 = (state_28013[2]);var state_28013__$1 = state_28013;var statearr_28022_28742 = state_28013__$1;(statearr_28022_28742[2] = inst_28009);
(statearr_28022_28742[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 8))
{var inst_27967 = (state_28013[10]);var inst_27968 = (state_28013[11]);var inst_27970 = (inst_27968 < inst_27967);var inst_27971 = inst_27970;var state_28013__$1 = state_28013;if(cljs.core.truth_(inst_27971))
{var statearr_28023_28743 = state_28013__$1;(statearr_28023_28743[1] = 10);
} else
{var statearr_28024_28744 = state_28013__$1;(statearr_28024_28744[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 9))
{var inst_28001 = (state_28013[2]);var inst_28002 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28013__$1 = (function (){var statearr_28025 = state_28013;(statearr_28025[12] = inst_28001);
return statearr_28025;
})();if(cljs.core.truth_(inst_28002))
{var statearr_28026_28745 = state_28013__$1;(statearr_28026_28745[1] = 21);
} else
{var statearr_28027_28746 = state_28013__$1;(statearr_28027_28746[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 10))
{var inst_27966 = (state_28013[8]);var inst_27968 = (state_28013[11]);var inst_27973 = cljs.core._nth.call(null,inst_27966,inst_27968);var state_28013__$1 = state_28013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,13,out,inst_27973);
} else
{if((state_val_28014 === 11))
{var inst_27965 = (state_28013[9]);var inst_27979 = (state_28013[13]);var inst_27979__$1 = cljs.core.seq.call(null,inst_27965);var state_28013__$1 = (function (){var statearr_28031 = state_28013;(statearr_28031[13] = inst_27979__$1);
return statearr_28031;
})();if(inst_27979__$1)
{var statearr_28032_28747 = state_28013__$1;(statearr_28032_28747[1] = 14);
} else
{var statearr_28033_28748 = state_28013__$1;(statearr_28033_28748[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 12))
{var inst_27999 = (state_28013[2]);var state_28013__$1 = state_28013;var statearr_28034_28749 = state_28013__$1;(statearr_28034_28749[2] = inst_27999);
(statearr_28034_28749[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 13))
{var inst_27966 = (state_28013[8]);var inst_27965 = (state_28013[9]);var inst_27967 = (state_28013[10]);var inst_27968 = (state_28013[11]);var inst_27975 = (state_28013[2]);var inst_27976 = (inst_27968 + 1);var tmp28028 = inst_27966;var tmp28029 = inst_27965;var tmp28030 = inst_27967;var inst_27965__$1 = tmp28029;var inst_27966__$1 = tmp28028;var inst_27967__$1 = tmp28030;var inst_27968__$1 = inst_27976;var state_28013__$1 = (function (){var statearr_28035 = state_28013;(statearr_28035[8] = inst_27966__$1);
(statearr_28035[9] = inst_27965__$1);
(statearr_28035[10] = inst_27967__$1);
(statearr_28035[11] = inst_27968__$1);
(statearr_28035[14] = inst_27975);
return statearr_28035;
})();var statearr_28036_28750 = state_28013__$1;(statearr_28036_28750[2] = null);
(statearr_28036_28750[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 14))
{var inst_27979 = (state_28013[13]);var inst_27981 = cljs.core.chunked_seq_QMARK_.call(null,inst_27979);var state_28013__$1 = state_28013;if(inst_27981)
{var statearr_28037_28751 = state_28013__$1;(statearr_28037_28751[1] = 17);
} else
{var statearr_28038_28752 = state_28013__$1;(statearr_28038_28752[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 15))
{var state_28013__$1 = state_28013;var statearr_28039_28753 = state_28013__$1;(statearr_28039_28753[2] = null);
(statearr_28039_28753[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 16))
{var inst_27997 = (state_28013[2]);var state_28013__$1 = state_28013;var statearr_28040_28754 = state_28013__$1;(statearr_28040_28754[2] = inst_27997);
(statearr_28040_28754[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 17))
{var inst_27979 = (state_28013[13]);var inst_27983 = cljs.core.chunk_first.call(null,inst_27979);var inst_27984 = cljs.core.chunk_rest.call(null,inst_27979);var inst_27985 = cljs.core.count.call(null,inst_27983);var inst_27965 = inst_27984;var inst_27966 = inst_27983;var inst_27967 = inst_27985;var inst_27968 = 0;var state_28013__$1 = (function (){var statearr_28041 = state_28013;(statearr_28041[8] = inst_27966);
(statearr_28041[9] = inst_27965);
(statearr_28041[10] = inst_27967);
(statearr_28041[11] = inst_27968);
return statearr_28041;
})();var statearr_28042_28755 = state_28013__$1;(statearr_28042_28755[2] = null);
(statearr_28042_28755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 18))
{var inst_27979 = (state_28013[13]);var inst_27988 = cljs.core.first.call(null,inst_27979);var state_28013__$1 = state_28013;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28013__$1,20,out,inst_27988);
} else
{if((state_val_28014 === 19))
{var inst_27994 = (state_28013[2]);var state_28013__$1 = state_28013;var statearr_28043_28756 = state_28013__$1;(statearr_28043_28756[2] = inst_27994);
(statearr_28043_28756[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 20))
{var inst_27979 = (state_28013[13]);var inst_27990 = (state_28013[2]);var inst_27991 = cljs.core.next.call(null,inst_27979);var inst_27965 = inst_27991;var inst_27966 = null;var inst_27967 = 0;var inst_27968 = 0;var state_28013__$1 = (function (){var statearr_28044 = state_28013;(statearr_28044[8] = inst_27966);
(statearr_28044[9] = inst_27965);
(statearr_28044[15] = inst_27990);
(statearr_28044[10] = inst_27967);
(statearr_28044[11] = inst_27968);
return statearr_28044;
})();var statearr_28045_28757 = state_28013__$1;(statearr_28045_28757[2] = null);
(statearr_28045_28757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 21))
{var state_28013__$1 = state_28013;var statearr_28046_28758 = state_28013__$1;(statearr_28046_28758[2] = null);
(statearr_28046_28758[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 22))
{var state_28013__$1 = state_28013;var statearr_28047_28759 = state_28013__$1;(statearr_28047_28759[2] = null);
(statearr_28047_28759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28014 === 23))
{var inst_28007 = (state_28013[2]);var state_28013__$1 = state_28013;var statearr_28048_28760 = state_28013__$1;(statearr_28048_28760[2] = inst_28007);
(statearr_28048_28760[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto__))
;return ((function (switch__22501__auto__,c__22577__auto__){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28052[0] = state_machine__22502__auto__);
(statearr_28052[1] = 1);
return statearr_28052;
});
var state_machine__22502__auto____1 = (function (state_28013){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28013);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28053){if((e28053 instanceof Object))
{var ex__22505__auto__ = e28053;var statearr_28054_28761 = state_28013;(statearr_28054_28761[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28013);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28762 = state_28013;
state_28013 = G__28762;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28013){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__))
})();var state__22579__auto__ = (function (){var statearr_28055 = f__22578__auto__.call(null);(statearr_28055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_28055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__))
);
return c__22577__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28763 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28763,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28763,out){
return (function (state_28127){var state_val_28128 = (state_28127[1]);if((state_val_28128 === 1))
{var inst_28104 = null;var state_28127__$1 = (function (){var statearr_28129 = state_28127;(statearr_28129[7] = inst_28104);
return statearr_28129;
})();var statearr_28130_28764 = state_28127__$1;(statearr_28130_28764[2] = null);
(statearr_28130_28764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 2))
{var state_28127__$1 = state_28127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28127__$1,4,ch);
} else
{if((state_val_28128 === 3))
{var inst_28124 = (state_28127[2]);var inst_28125 = cljs.core.async.close_BANG_.call(null,out);var state_28127__$1 = (function (){var statearr_28131 = state_28127;(statearr_28131[8] = inst_28124);
return statearr_28131;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28127__$1,inst_28125);
} else
{if((state_val_28128 === 4))
{var inst_28107 = (state_28127[9]);var inst_28107__$1 = (state_28127[2]);var inst_28108 = (inst_28107__$1 == null);var inst_28109 = cljs.core.not.call(null,inst_28108);var state_28127__$1 = (function (){var statearr_28132 = state_28127;(statearr_28132[9] = inst_28107__$1);
return statearr_28132;
})();if(inst_28109)
{var statearr_28133_28765 = state_28127__$1;(statearr_28133_28765[1] = 5);
} else
{var statearr_28134_28766 = state_28127__$1;(statearr_28134_28766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 5))
{var inst_28104 = (state_28127[7]);var inst_28107 = (state_28127[9]);var inst_28111 = cljs.core._EQ_.call(null,inst_28107,inst_28104);var state_28127__$1 = state_28127;if(inst_28111)
{var statearr_28135_28767 = state_28127__$1;(statearr_28135_28767[1] = 8);
} else
{var statearr_28136_28768 = state_28127__$1;(statearr_28136_28768[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 6))
{var state_28127__$1 = state_28127;var statearr_28138_28769 = state_28127__$1;(statearr_28138_28769[2] = null);
(statearr_28138_28769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 7))
{var inst_28122 = (state_28127[2]);var state_28127__$1 = state_28127;var statearr_28139_28770 = state_28127__$1;(statearr_28139_28770[2] = inst_28122);
(statearr_28139_28770[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 8))
{var inst_28104 = (state_28127[7]);var tmp28137 = inst_28104;var inst_28104__$1 = tmp28137;var state_28127__$1 = (function (){var statearr_28140 = state_28127;(statearr_28140[7] = inst_28104__$1);
return statearr_28140;
})();var statearr_28141_28771 = state_28127__$1;(statearr_28141_28771[2] = null);
(statearr_28141_28771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 9))
{var inst_28107 = (state_28127[9]);var state_28127__$1 = state_28127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28127__$1,11,out,inst_28107);
} else
{if((state_val_28128 === 10))
{var inst_28119 = (state_28127[2]);var state_28127__$1 = state_28127;var statearr_28142_28772 = state_28127__$1;(statearr_28142_28772[2] = inst_28119);
(statearr_28142_28772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28128 === 11))
{var inst_28107 = (state_28127[9]);var inst_28116 = (state_28127[2]);var inst_28104 = inst_28107;var state_28127__$1 = (function (){var statearr_28143 = state_28127;(statearr_28143[7] = inst_28104);
(statearr_28143[10] = inst_28116);
return statearr_28143;
})();var statearr_28144_28773 = state_28127__$1;(statearr_28144_28773[2] = null);
(statearr_28144_28773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28763,out))
;return ((function (switch__22501__auto__,c__22577__auto___28763,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28148 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28148[0] = state_machine__22502__auto__);
(statearr_28148[1] = 1);
return statearr_28148;
});
var state_machine__22502__auto____1 = (function (state_28127){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28127);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28149){if((e28149 instanceof Object))
{var ex__22505__auto__ = e28149;var statearr_28150_28774 = state_28127;(statearr_28150_28774[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28127);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28775 = state_28127;
state_28127 = G__28775;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28127){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28763,out))
})();var state__22579__auto__ = (function (){var statearr_28151 = f__22578__auto__.call(null);(statearr_28151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28763);
return statearr_28151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28763,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28776,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28776,out){
return (function (state_28256){var state_val_28257 = (state_28256[1]);if((state_val_28257 === 1))
{var inst_28219 = (new Array(n));var inst_28220 = inst_28219;var inst_28221 = 0;var state_28256__$1 = (function (){var statearr_28258 = state_28256;(statearr_28258[7] = inst_28220);
(statearr_28258[8] = inst_28221);
return statearr_28258;
})();var statearr_28259_28777 = state_28256__$1;(statearr_28259_28777[2] = null);
(statearr_28259_28777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 2))
{var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28256__$1,4,ch);
} else
{if((state_val_28257 === 3))
{var inst_28254 = (state_28256[2]);var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28256__$1,inst_28254);
} else
{if((state_val_28257 === 4))
{var inst_28224 = (state_28256[9]);var inst_28224__$1 = (state_28256[2]);var inst_28225 = (inst_28224__$1 == null);var inst_28226 = cljs.core.not.call(null,inst_28225);var state_28256__$1 = (function (){var statearr_28260 = state_28256;(statearr_28260[9] = inst_28224__$1);
return statearr_28260;
})();if(inst_28226)
{var statearr_28261_28778 = state_28256__$1;(statearr_28261_28778[1] = 5);
} else
{var statearr_28262_28779 = state_28256__$1;(statearr_28262_28779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 5))
{var inst_28224 = (state_28256[9]);var inst_28220 = (state_28256[7]);var inst_28221 = (state_28256[8]);var inst_28229 = (state_28256[10]);var inst_28228 = (inst_28220[inst_28221] = inst_28224);var inst_28229__$1 = (inst_28221 + 1);var inst_28230 = (inst_28229__$1 < n);var state_28256__$1 = (function (){var statearr_28263 = state_28256;(statearr_28263[10] = inst_28229__$1);
(statearr_28263[11] = inst_28228);
return statearr_28263;
})();if(cljs.core.truth_(inst_28230))
{var statearr_28264_28780 = state_28256__$1;(statearr_28264_28780[1] = 8);
} else
{var statearr_28265_28781 = state_28256__$1;(statearr_28265_28781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 6))
{var inst_28221 = (state_28256[8]);var inst_28242 = (inst_28221 > 0);var state_28256__$1 = state_28256;if(cljs.core.truth_(inst_28242))
{var statearr_28267_28782 = state_28256__$1;(statearr_28267_28782[1] = 12);
} else
{var statearr_28268_28783 = state_28256__$1;(statearr_28268_28783[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 7))
{var inst_28252 = (state_28256[2]);var state_28256__$1 = state_28256;var statearr_28269_28784 = state_28256__$1;(statearr_28269_28784[2] = inst_28252);
(statearr_28269_28784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 8))
{var inst_28220 = (state_28256[7]);var inst_28229 = (state_28256[10]);var tmp28266 = inst_28220;var inst_28220__$1 = tmp28266;var inst_28221 = inst_28229;var state_28256__$1 = (function (){var statearr_28270 = state_28256;(statearr_28270[7] = inst_28220__$1);
(statearr_28270[8] = inst_28221);
return statearr_28270;
})();var statearr_28271_28785 = state_28256__$1;(statearr_28271_28785[2] = null);
(statearr_28271_28785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 9))
{var inst_28220 = (state_28256[7]);var inst_28234 = cljs.core.vec.call(null,inst_28220);var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28256__$1,11,out,inst_28234);
} else
{if((state_val_28257 === 10))
{var inst_28240 = (state_28256[2]);var state_28256__$1 = state_28256;var statearr_28272_28786 = state_28256__$1;(statearr_28272_28786[2] = inst_28240);
(statearr_28272_28786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 11))
{var inst_28236 = (state_28256[2]);var inst_28237 = (new Array(n));var inst_28220 = inst_28237;var inst_28221 = 0;var state_28256__$1 = (function (){var statearr_28273 = state_28256;(statearr_28273[7] = inst_28220);
(statearr_28273[8] = inst_28221);
(statearr_28273[12] = inst_28236);
return statearr_28273;
})();var statearr_28274_28787 = state_28256__$1;(statearr_28274_28787[2] = null);
(statearr_28274_28787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 12))
{var inst_28220 = (state_28256[7]);var inst_28244 = cljs.core.vec.call(null,inst_28220);var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28256__$1,15,out,inst_28244);
} else
{if((state_val_28257 === 13))
{var state_28256__$1 = state_28256;var statearr_28275_28788 = state_28256__$1;(statearr_28275_28788[2] = null);
(statearr_28275_28788[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 14))
{var inst_28249 = (state_28256[2]);var inst_28250 = cljs.core.async.close_BANG_.call(null,out);var state_28256__$1 = (function (){var statearr_28276 = state_28256;(statearr_28276[13] = inst_28249);
return statearr_28276;
})();var statearr_28277_28789 = state_28256__$1;(statearr_28277_28789[2] = inst_28250);
(statearr_28277_28789[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28257 === 15))
{var inst_28246 = (state_28256[2]);var state_28256__$1 = state_28256;var statearr_28278_28790 = state_28256__$1;(statearr_28278_28790[2] = inst_28246);
(statearr_28278_28790[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28776,out))
;return ((function (switch__22501__auto__,c__22577__auto___28776,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28282[0] = state_machine__22502__auto__);
(statearr_28282[1] = 1);
return statearr_28282;
});
var state_machine__22502__auto____1 = (function (state_28256){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28256);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28283){if((e28283 instanceof Object))
{var ex__22505__auto__ = e28283;var statearr_28284_28791 = state_28256;(statearr_28284_28791[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28792 = state_28256;
state_28256 = G__28792;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28256){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28776,out))
})();var state__22579__auto__ = (function (){var statearr_28285 = f__22578__auto__.call(null);(statearr_28285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28776);
return statearr_28285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28776,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22577__auto___28793 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto___28793,out){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto___28793,out){
return (function (state_28398){var state_val_28399 = (state_28398[1]);if((state_val_28399 === 1))
{var inst_28357 = [];var inst_28358 = inst_28357;var inst_28359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28398__$1 = (function (){var statearr_28400 = state_28398;(statearr_28400[7] = inst_28359);
(statearr_28400[8] = inst_28358);
return statearr_28400;
})();var statearr_28401_28794 = state_28398__$1;(statearr_28401_28794[2] = null);
(statearr_28401_28794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 2))
{var state_28398__$1 = state_28398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28398__$1,4,ch);
} else
{if((state_val_28399 === 3))
{var inst_28396 = (state_28398[2]);var state_28398__$1 = state_28398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28398__$1,inst_28396);
} else
{if((state_val_28399 === 4))
{var inst_28362 = (state_28398[9]);var inst_28362__$1 = (state_28398[2]);var inst_28363 = (inst_28362__$1 == null);var inst_28364 = cljs.core.not.call(null,inst_28363);var state_28398__$1 = (function (){var statearr_28402 = state_28398;(statearr_28402[9] = inst_28362__$1);
return statearr_28402;
})();if(inst_28364)
{var statearr_28403_28795 = state_28398__$1;(statearr_28403_28795[1] = 5);
} else
{var statearr_28404_28796 = state_28398__$1;(statearr_28404_28796[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 5))
{var inst_28366 = (state_28398[10]);var inst_28362 = (state_28398[9]);var inst_28359 = (state_28398[7]);var inst_28366__$1 = f.call(null,inst_28362);var inst_28367 = cljs.core._EQ_.call(null,inst_28366__$1,inst_28359);var inst_28368 = cljs.core.keyword_identical_QMARK_.call(null,inst_28359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28369 = (inst_28367) || (inst_28368);var state_28398__$1 = (function (){var statearr_28405 = state_28398;(statearr_28405[10] = inst_28366__$1);
return statearr_28405;
})();if(cljs.core.truth_(inst_28369))
{var statearr_28406_28797 = state_28398__$1;(statearr_28406_28797[1] = 8);
} else
{var statearr_28407_28798 = state_28398__$1;(statearr_28407_28798[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 6))
{var inst_28358 = (state_28398[8]);var inst_28383 = inst_28358.length;var inst_28384 = (inst_28383 > 0);var state_28398__$1 = state_28398;if(cljs.core.truth_(inst_28384))
{var statearr_28409_28799 = state_28398__$1;(statearr_28409_28799[1] = 12);
} else
{var statearr_28410_28800 = state_28398__$1;(statearr_28410_28800[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 7))
{var inst_28394 = (state_28398[2]);var state_28398__$1 = state_28398;var statearr_28411_28801 = state_28398__$1;(statearr_28411_28801[2] = inst_28394);
(statearr_28411_28801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 8))
{var inst_28366 = (state_28398[10]);var inst_28362 = (state_28398[9]);var inst_28358 = (state_28398[8]);var inst_28371 = inst_28358.push(inst_28362);var tmp28408 = inst_28358;var inst_28358__$1 = tmp28408;var inst_28359 = inst_28366;var state_28398__$1 = (function (){var statearr_28412 = state_28398;(statearr_28412[11] = inst_28371);
(statearr_28412[7] = inst_28359);
(statearr_28412[8] = inst_28358__$1);
return statearr_28412;
})();var statearr_28413_28802 = state_28398__$1;(statearr_28413_28802[2] = null);
(statearr_28413_28802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 9))
{var inst_28358 = (state_28398[8]);var inst_28374 = cljs.core.vec.call(null,inst_28358);var state_28398__$1 = state_28398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28398__$1,11,out,inst_28374);
} else
{if((state_val_28399 === 10))
{var inst_28381 = (state_28398[2]);var state_28398__$1 = state_28398;var statearr_28414_28803 = state_28398__$1;(statearr_28414_28803[2] = inst_28381);
(statearr_28414_28803[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 11))
{var inst_28366 = (state_28398[10]);var inst_28362 = (state_28398[9]);var inst_28376 = (state_28398[2]);var inst_28377 = [];var inst_28378 = inst_28377.push(inst_28362);var inst_28358 = inst_28377;var inst_28359 = inst_28366;var state_28398__$1 = (function (){var statearr_28415 = state_28398;(statearr_28415[12] = inst_28378);
(statearr_28415[13] = inst_28376);
(statearr_28415[7] = inst_28359);
(statearr_28415[8] = inst_28358);
return statearr_28415;
})();var statearr_28416_28804 = state_28398__$1;(statearr_28416_28804[2] = null);
(statearr_28416_28804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 12))
{var inst_28358 = (state_28398[8]);var inst_28386 = cljs.core.vec.call(null,inst_28358);var state_28398__$1 = state_28398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28398__$1,15,out,inst_28386);
} else
{if((state_val_28399 === 13))
{var state_28398__$1 = state_28398;var statearr_28417_28805 = state_28398__$1;(statearr_28417_28805[2] = null);
(statearr_28417_28805[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 14))
{var inst_28391 = (state_28398[2]);var inst_28392 = cljs.core.async.close_BANG_.call(null,out);var state_28398__$1 = (function (){var statearr_28418 = state_28398;(statearr_28418[14] = inst_28391);
return statearr_28418;
})();var statearr_28419_28806 = state_28398__$1;(statearr_28419_28806[2] = inst_28392);
(statearr_28419_28806[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28399 === 15))
{var inst_28388 = (state_28398[2]);var state_28398__$1 = state_28398;var statearr_28420_28807 = state_28398__$1;(statearr_28420_28807[2] = inst_28388);
(statearr_28420_28807[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto___28793,out))
;return ((function (switch__22501__auto__,c__22577__auto___28793,out){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_28424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28424[0] = state_machine__22502__auto__);
(statearr_28424[1] = 1);
return statearr_28424;
});
var state_machine__22502__auto____1 = (function (state_28398){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_28398);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e28425){if((e28425 instanceof Object))
{var ex__22505__auto__ = e28425;var statearr_28426_28808 = state_28398;(statearr_28426_28808[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28809 = state_28398;
state_28398 = G__28809;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_28398){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_28398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto___28793,out))
})();var state__22579__auto__ = (function (){var statearr_28427 = f__22578__auto__.call(null);(statearr_28427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto___28793);
return statearr_28427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto___28793,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.example-linter')) {
goog.provide('lt.plugins.example_linter');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","example-word-linter","lt.plugins.example-linter/example-word-linter",3076569534),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Example word linter");
lt.plugins.example_linter.lint_words = (function lint_words(editor_text,words){var words_to_find = cljs.core.set.call(null,cljs.core.map.call(null,clojure.string.lower_case,words));return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,((function (words_to_find){
return (function (line_no,line){return cljs.core.keep.call(null,((function (words_to_find){
return (function (w){var found_at = clojure.string.lower_case.call(null,line).indexOf(w);if((0 <= found_at))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",1968829305),[cljs.core.str("You can't say the word "),cljs.core.str(w),cljs.core.str("!")].join(''),new cljs.core.Keyword(null,"severity","severity",2492204655),"error",new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,found_at], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(found_at + cljs.core.count.call(null,w))], null)], null);
} else
{return null;
}
});})(words_to_find))
,words_to_find);
});})(words_to_find))
,clojure.string.split.call(null,editor_text,/\n/)));
});
lt.plugins.example_linter.__BEH__lint_words_in_editor = (function __BEH__lint_words_in_editor(obj,editor_text,callback,_){return callback.call(null,lt.plugins.example_linter.lint_words.call(null,editor_text,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1016906831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__lint_words_in_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.objs.editor.lint')) {
goog.provide('lt.objs.editor.lint');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY);
lt.objs.editor.lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linters","lt.objs.editor.lint/linters",1778761659));
lt.objs.editor.lint.default_timeout = 5000;
lt.objs.editor.lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''));
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.map_QMARK_.call(null,res);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res);
} else
{return and__19791__auto__;
}
})()))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj)))].join(''),res);
} else
{if((cljs.core.coll_QMARK_.call(null,res)) && (!(cljs.core.map_QMARK_.call(null,res))))
{return res;
} else
{return null;
}
}
}
});
lt.objs.editor.lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__28992){var map__28994 = p__28992;var map__28994__$1 = ((cljs.core.seq_QMARK_.call(null,map__28994))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);var msg = map__28994__$1;var to = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.objs.editor.lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.objs.editor.lint.on_cursor_activity = (function on_cursor_activity(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,lt.objs.editor.lint.is_lint_mark_QMARK_,text_marks));if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = cljs.core.js__GT_clj.call(null,cljs.core.first.call(null,lint_marks).__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"");
}
});
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.objs.editor.lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (ed,linter_objs){return (function (editor_text,callback,options){lt.objs.editor.off.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.objs.editor.lint.on_cursor_activity,ed));
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,ch){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,ch){
return (function (state_29081){var state_val_29082 = (state_29081[1]);if((state_val_29082 === 2))
{var inst_29079 = (state_29081[2]);var state_29081__$1 = state_29081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else
{if((state_val_29082 === 1))
{var state_29081__$1 = state_29081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,2,ch,results);
} else
{return null;
}
}
});})(c__22577__auto__,ch))
;return ((function (switch__22501__auto__,c__22577__auto__,ch){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_29086 = [null,null,null,null,null,null,null];(statearr_29086[0] = state_machine__22502__auto__);
(statearr_29086[1] = 1);
return statearr_29086;
});
var state_machine__22502__auto____1 = (function (state_29081){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_29081);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e29087){if((e29087 instanceof Object))
{var ex__22505__auto__ = e29087;var statearr_29088_29165 = state_29081;(statearr_29088_29165[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29166 = state_29081;
state_29081 = G__29166;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,ch))
})();var state__22579__auto__ = (function (){var statearr_29089 = f__22578__auto__.call(null);(statearr_29089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_29089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,ch))
);
return c__22577__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__29090_29167 = cljs.core.seq.call(null,validate_chans);var chunk__29091_29168 = null;var count__29092_29169 = 0;var i__29093_29170 = 0;while(true){
if((i__29093_29170 < count__29092_29169))
{var vec__29094_29171 = cljs.core._nth.call(null,chunk__29091_29168,i__29093_29170);var __29172 = cljs.core.nth.call(null,vec__29094_29171,0,null);var f_29173 = cljs.core.nth.call(null,vec__29094_29171,1,null);var obj_29174 = cljs.core.nth.call(null,vec__29094_29171,2,null);lt.object.raise.call(null,obj_29174,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_29173,ed);
{
var G__29175 = seq__29090_29167;
var G__29176 = chunk__29091_29168;
var G__29177 = count__29092_29169;
var G__29178 = (i__29093_29170 + 1);
seq__29090_29167 = G__29175;
chunk__29091_29168 = G__29176;
count__29092_29169 = G__29177;
i__29093_29170 = G__29178;
continue;
}
} else
{var temp__4092__auto___29179 = cljs.core.seq.call(null,seq__29090_29167);if(temp__4092__auto___29179)
{var seq__29090_29180__$1 = temp__4092__auto___29179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29090_29180__$1))
{var c__20551__auto___29181 = cljs.core.chunk_first.call(null,seq__29090_29180__$1);{
var G__29182 = cljs.core.chunk_rest.call(null,seq__29090_29180__$1);
var G__29183 = c__20551__auto___29181;
var G__29184 = cljs.core.count.call(null,c__20551__auto___29181);
var G__29185 = 0;
seq__29090_29167 = G__29182;
chunk__29091_29168 = G__29183;
count__29092_29169 = G__29184;
i__29093_29170 = G__29185;
continue;
}
} else
{var vec__29095_29186 = cljs.core.first.call(null,seq__29090_29180__$1);var __29187 = cljs.core.nth.call(null,vec__29095_29186,0,null);var f_29188 = cljs.core.nth.call(null,vec__29095_29186,1,null);var obj_29189 = cljs.core.nth.call(null,vec__29095_29186,2,null);lt.object.raise.call(null,obj_29189,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_29188,ed);
{
var G__29190 = cljs.core.next.call(null,seq__29090_29180__$1);
var G__29191 = null;
var G__29192 = 0;
var G__29193 = 0;
seq__29090_29167 = G__29190;
chunk__29091_29168 = G__29191;
count__29092_29169 = G__29192;
i__29093_29170 = G__29193;
continue;
}
}
} else
{}
}
break;
}
var c__22577__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22577__auto__,validate_chans){
return (function (){var f__22578__auto__ = (function (){var switch__22501__auto__ = ((function (c__22577__auto__,validate_chans){
return (function (state_29137){var state_val_29138 = (state_29137[1]);if((state_val_29138 === 1))
{var inst_29101 = cljs.core.nth.call(null,validate_chans,0,null);var inst_29102 = cljs.core.nth.call(null,inst_29101,0,null);var inst_29103 = cljs.core.nth.call(null,inst_29101,1,null);var inst_29104 = cljs.core.nth.call(null,inst_29101,2,null);var inst_29105 = cljs.core.nthnext.call(null,validate_chans,1);var inst_29106 = validate_chans;var inst_29107 = cljs.core.PersistentVector.EMPTY;var state_29137__$1 = (function (){var statearr_29139 = state_29137;(statearr_29139[7] = inst_29107);
(statearr_29139[8] = inst_29105);
(statearr_29139[9] = inst_29106);
(statearr_29139[10] = inst_29103);
(statearr_29139[11] = inst_29104);
(statearr_29139[12] = inst_29102);
return statearr_29139;
})();var statearr_29140_29194 = state_29137__$1;(statearr_29140_29194[2] = null);
(statearr_29140_29194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 2))
{var inst_29106 = (state_29137[9]);var inst_29111 = cljs.core.nth.call(null,inst_29106,0,null);var inst_29112 = cljs.core.nth.call(null,inst_29111,0,null);var inst_29113 = cljs.core.nth.call(null,inst_29111,1,null);var inst_29114 = cljs.core.nth.call(null,inst_29111,2,null);var inst_29115 = cljs.core.nthnext.call(null,inst_29106,1);var state_29137__$1 = (function (){var statearr_29141 = state_29137;(statearr_29141[13] = inst_29114);
(statearr_29141[14] = inst_29115);
(statearr_29141[15] = inst_29113);
return statearr_29141;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29137__$1,4,inst_29112);
} else
{if((state_val_29138 === 3))
{var inst_29135 = (state_29137[2]);var state_29137__$1 = state_29137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29137__$1,inst_29135);
} else
{if((state_val_29138 === 4))
{var inst_29114 = (state_29137[13]);var inst_29118 = (state_29137[16]);var inst_29117 = (state_29137[2]);var inst_29118__$1 = lt.objs.editor.lint.verify_linter_result.call(null,inst_29114,inst_29117);var state_29137__$1 = (function (){var statearr_29142 = state_29137;(statearr_29142[16] = inst_29118__$1);
return statearr_29142;
})();if(cljs.core.truth_(inst_29118__$1))
{var statearr_29143_29195 = state_29137__$1;(statearr_29143_29195[1] = 5);
} else
{var statearr_29144_29196 = state_29137__$1;(statearr_29144_29196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 5))
{var inst_29107 = (state_29137[7]);var inst_29118 = (state_29137[16]);var inst_29120 = cljs.core.conj.call(null,inst_29107,inst_29118);var state_29137__$1 = state_29137;var statearr_29145_29197 = state_29137__$1;(statearr_29145_29197[2] = inst_29120);
(statearr_29145_29197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 6))
{var inst_29107 = (state_29137[7]);var state_29137__$1 = state_29137;var statearr_29146_29198 = state_29137__$1;(statearr_29146_29198[2] = inst_29107);
(statearr_29146_29198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 7))
{var inst_29115 = (state_29137[14]);var inst_29123 = (state_29137[2]);var inst_29124 = cljs.core.seq.call(null,inst_29115);var state_29137__$1 = (function (){var statearr_29147 = state_29137;(statearr_29147[17] = inst_29123);
return statearr_29147;
})();if(inst_29124)
{var statearr_29148_29199 = state_29137__$1;(statearr_29148_29199[1] = 8);
} else
{var statearr_29149_29200 = state_29137__$1;(statearr_29149_29200[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 8))
{var inst_29115 = (state_29137[14]);var inst_29123 = (state_29137[17]);var inst_29106 = inst_29115;var inst_29107 = inst_29123;var state_29137__$1 = (function (){var statearr_29150 = state_29137;(statearr_29150[7] = inst_29107);
(statearr_29150[9] = inst_29106);
return statearr_29150;
})();var statearr_29151_29201 = state_29137__$1;(statearr_29151_29201[2] = null);
(statearr_29151_29201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 9))
{var inst_29123 = (state_29137[17]);var inst_29128 = cljs.core.apply.call(null,cljs.core.concat,inst_29123);var inst_29129 = cljs.core.map.call(null,lt.objs.editor.lint.__GT_cm_lint_msg,inst_29128);var inst_29130 = cljs.core.clj__GT_js.call(null,inst_29129);var inst_29131 = callback.call(null,inst_29130);var state_29137__$1 = state_29137;var statearr_29152_29202 = state_29137__$1;(statearr_29152_29202[2] = inst_29131);
(statearr_29152_29202[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29138 === 10))
{var inst_29133 = (state_29137[2]);var state_29137__$1 = state_29137;var statearr_29153_29203 = state_29137__$1;(statearr_29153_29203[2] = inst_29133);
(statearr_29153_29203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__22577__auto__,validate_chans))
;return ((function (switch__22501__auto__,c__22577__auto__,validate_chans){
return (function() {
var state_machine__22502__auto__ = null;
var state_machine__22502__auto____0 = (function (){var statearr_29157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29157[0] = state_machine__22502__auto__);
(statearr_29157[1] = 1);
return statearr_29157;
});
var state_machine__22502__auto____1 = (function (state_29137){while(true){
var ret_value__22503__auto__ = (function (){try{while(true){
var result__22504__auto__ = switch__22501__auto__.call(null,state_29137);if(cljs.core.keyword_identical_QMARK_.call(null,result__22504__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22504__auto__;
}
break;
}
}catch (e29158){if((e29158 instanceof Object))
{var ex__22505__auto__ = e29158;var statearr_29159_29204 = state_29137;(statearr_29159_29204[5] = ex__22505__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22503__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29205 = state_29137;
state_29137 = G__29205;
continue;
}
} else
{return ret_value__22503__auto__;
}
break;
}
});
state_machine__22502__auto__ = function(state_29137){
switch(arguments.length){
case 0:
return state_machine__22502__auto____0.call(this);
case 1:
return state_machine__22502__auto____1.call(this,state_29137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22502__auto____0;
state_machine__22502__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22502__auto____1;
return state_machine__22502__auto__;
})()
;})(switch__22501__auto__,c__22577__auto__,validate_chans))
})();var state__22579__auto__ = (function (){var statearr_29160 = f__22578__auto__.call(null);(statearr_29160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22577__auto__);
return statearr_29160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22579__auto__);
});})(c__22577__auto__,validate_chans))
);
return c__22577__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__29206){
var ed = cljs.core.first(arglist__29206);
var linter_objs = cljs.core.rest(arglist__29206);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.add_linter = (function add_linter(linters,linter_obj,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__29161_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29161_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.objs.editor.lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__29162){var vec__29164 = p__29162;var linter_obj = cljs.core.nth.call(null,vec__29164,0,null);var args = cljs.core.nthnext.call(null,vec__29164,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.objs.editor.lint.add_linter,linter_obj,args));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,new_linters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null)));lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),{"getAnnotations": validator_fn, "async": true},new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.prepare_editor_for_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint.settings')) {
goog.provide('lt.plugins.lt_lint.settings');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('lt.object');
goog.require('lt.object');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map