if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28992 = {};return obj28992;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj28994 = {};return obj28994;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj28996 = {};return obj28996;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj28998 = {};return obj28998;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj29000 = {};return obj29000;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj29002 = {};return obj29002;
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
var G__28938 = (cnt + 1);
cnt = G__28938;
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
{var v_28939 = this$.pop();if(keep_QMARK_.call(null,v_28939))
{this$.unshift(v_28939);
} else
{}
{
var G__28940 = (x + 1);
x = G__28940;
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
var count_28988 = 0;while(true){
var m_28989 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28989 == null))
{} else
{m_28989.call(null);
if((count_28988 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28990 = (count_28988 + 1);
count_28988 = G__28990;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28944 = (function (val,box,meta28945){
this.val = val;
this.box = box;
this.meta28945 = meta28945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28944.cljs$lang$type = true;
cljs.core.async.impl.channels.t28944.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28944";
cljs.core.async.impl.channels.t28944.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28944");
});
cljs.core.async.impl.channels.t28944.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28946){var self__ = this;
var _28946__$1 = this;return self__.meta28945;
});
cljs.core.async.impl.channels.t28944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28946,meta28945__$1){var self__ = this;
var _28946__$1 = this;return (new cljs.core.async.impl.channels.t28944(self__.val,self__.box,meta28945__$1));
});
cljs.core.async.impl.channels.__GT_t28944 = (function __GT_t28944(val__$1,box__$1,meta28945){return (new cljs.core.async.impl.channels.t28944(val__$1,box__$1,meta28945));
});
}
return (new cljs.core.async.impl.channels.t28944(val,box,null));
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
cljs.core.async.impl.channels.MMC = (function (){var obj28948 = {};return obj28948;
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
var taker_28963 = self__.takes.pop();if((taker_28963 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28963))
{var take_cb_28964 = cljs.core.async.impl.protocols.commit.call(null,taker_28963);var val_28965 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28964,val_28965,taker_28963,this$__$1){
return (function (){return take_cb_28964.call(null,val_28965);
});})(take_cb_28964,val_28965,taker_28963,this$__$1))
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
{var putter_28966 = self__.puts.pop();if((putter_28966 == null))
{} else
{var put_handler_28967 = putter_28966.handler;var val_28968 = putter_28966.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28967))
{var put_cb_28969 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28967);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28969,put_handler_28967,val_28968,putter_28966,_,retval,this$__$1){
return (function (){return put_cb_28969.call(null,true);
});})(put_cb_28969,put_handler_28967,val_28968,putter_28966,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28968)))
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
{var taker_28970 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28970))
{var take_cb_28971 = cljs.core.async.impl.protocols.commit.call(null,taker_28970);var val_28972__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28971,val_28972__$1,taker_28970,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28971.call(null,val_28972__$1);
});})(take_cb_28971,val_28972__$1,taker_28970,done_QMARK_,closed__$1,this$__$1))
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
var putter_28973 = self__.puts.pop();if((putter_28973 == null))
{} else
{var put_handler_28974 = putter_28973.handler;var val_28975 = putter_28973.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28974))
{var put_cb_28976 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28974);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28976,put_handler_28974,val_28975,putter_28973,this$__$1){
return (function (){return put_cb_28976.call(null,true);
});})(put_cb_28976,put_handler_28974,val_28975,putter_28973,this$__$1))
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
var G__28977 = null;
var G__28977__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28951){var t = e28951;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28977__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28952){var t = e28952;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28977 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28977__1.call(this,buf__$1);
case 2:
return G__28977__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28977;
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
var G__29023 = (level + 1);
level = G__29023;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_29024 = 0;while(true){
if((i_29024 < arr.length))
{(arr[i_29024] = null);
{
var G__29025 = (i_29024 + 1);
i_29024 = G__29025;
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
var G__29026 = x_SINGLEQUOTE_;
x__$1 = G__29026;
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
var G__29027 = x__$1;
var G__29028 = k;
var G__29029 = (level - 1);
var G__29030 = update;
x = G__29027;
k = G__29028;
level = G__29029;
update = G__29030;
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
{var i_29031 = (self__.level + 1);while(true){
if((i_29031 <= (new_level + 1)))
{(update[i_29031] = self__.header);
{
var G__29032 = (i_29031 + 1);
i_29031 = G__29032;
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
{var i_29033 = 0;while(true){
if((i_29033 <= self__.level))
{var links_29034 = (update[i_29033]).forward;if(((links_29034[i_29033]) === x__$1))
{(links_29034[i_29033] = (x__$1.forward[i_29033]));
{
var G__29035 = (i_29033 + 1);
i_29033 = G__29035;
continue;
}
} else
{{
var G__29036 = (i_29033 + 1);
i_29033 = G__29036;
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
var G__29037 = x_SINGLEQUOTE_;
x__$1 = G__29037;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__29038 = nx;
var G__29039 = (level__$1 - 1);
x = G__29038;
level__$1 = G__29039;
continue;
}
} else
{{
var G__29040 = x;
var G__29041 = (level__$1 - 1);
x = G__29040;
level__$1 = G__29041;
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
var G__29042 = x_SINGLEQUOTE_;
x__$1 = G__29042;
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
var G__29043 = nx;
var G__29044 = (level__$1 - 1);
x = G__29043;
level__$1 = G__29044;
continue;
}
} else
{{
var G__29045 = x;
var G__29046 = (level__$1 - 1);
x = G__29045;
level__$1 = G__29046;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28868 = (function (f,fn_handler,meta28869){
this.f = f;
this.fn_handler = fn_handler;
this.meta28869 = meta28869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28868.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28868.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28868";
cljs.core.async.impl.ioc_helpers.t28868.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28868");
});
cljs.core.async.impl.ioc_helpers.t28868.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28870){var self__ = this;
var _28870__$1 = this;return self__.meta28869;
});
cljs.core.async.impl.ioc_helpers.t28868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28870,meta28869__$1){var self__ = this;
var _28870__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28868(self__.f,self__.fn_handler,meta28869__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28868 = (function __GT_t28868(f__$1,fn_handler__$1,meta28869){return (new cljs.core.async.impl.ioc_helpers.t28868(f__$1,fn_handler__$1,meta28869));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28868(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28872){if((e28872 instanceof Object))
{var ex = e28872;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28872;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28875_28918 = state;(statearr_28875_28918[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28875_28918[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28876_28919 = state;(statearr_28876_28919[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28876_28919[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28879_28920 = state;(statearr_28879_28920[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28879_28920[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28880_28921 = state;(statearr_28880_28921[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28880_28921[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28881){var map__28886 = p__28881;var map__28886__$1 = ((cljs.core.seq_QMARK_.call(null,map__28886))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);var opts = map__28886__$1;var statearr_28887_28922 = state;(statearr_28887_28922[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28886,map__28886__$1,opts){
return (function (val){var statearr_28888_28923 = state;(statearr_28888_28923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28886,map__28886__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28889_28924 = state;(statearr_28889_28924[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28881 = null;if (arguments.length > 3) {
  p__28881 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28881);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28925){
var state = cljs.core.first(arglist__28925);
arglist__28925 = cljs.core.next(arglist__28925);
var cont_block = cljs.core.first(arglist__28925);
arglist__28925 = cljs.core.next(arglist__28925);
var ports = cljs.core.first(arglist__28925);
var p__28881 = cljs.core.rest(arglist__28925);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28881);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28891,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28891,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28891,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28891,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28891,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28891,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28891,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28890){var self__ = this;
var this__20396__auto____$1 = this;var pred__28893 = cljs.core.keyword_identical_QMARK_;var expr__28894 = k__20397__auto__;if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28894)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28890,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28894)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28890,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28894)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28890,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28894)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28890,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28893.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28894)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28890,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28890),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28890){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28890,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28892){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28892),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28892),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28892),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28892),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28892),null,cljs.core.dissoc.call(null,G__28892,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28897 = state;(statearr_28897[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28897;
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
{var statearr_28903 = state;(statearr_28903[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28903[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28903[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28903[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28903;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28904_28926 = state;(statearr_28904_28926[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28927 = state;
state = G__28927;
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
{var statearr_28905 = state;(statearr_28905[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28905[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28905;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28906 = state;(statearr_28906[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28906[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28906;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28907 = state;(statearr_28907[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28907[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28907;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25786 = (function (f,fn_handler,meta25787){
this.f = f;
this.fn_handler = fn_handler;
this.meta25787 = meta25787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25786.cljs$lang$type = true;
cljs.core.async.t25786.cljs$lang$ctorStr = "cljs.core.async/t25786";
cljs.core.async.t25786.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25786");
});
cljs.core.async.t25786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25788){var self__ = this;
var _25788__$1 = this;return self__.meta25787;
});
cljs.core.async.t25786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25788,meta25787__$1){var self__ = this;
var _25788__$1 = this;return (new cljs.core.async.t25786(self__.f,self__.fn_handler,meta25787__$1));
});
cljs.core.async.__GT_t25786 = (function __GT_t25786(f__$1,fn_handler__$1,meta25787){return (new cljs.core.async.t25786(f__$1,fn_handler__$1,meta25787));
});
}
return (new cljs.core.async.t25786(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25790 = buff;if(G__25790)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25790.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25790.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25790);
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
{var val_28493 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28493);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28493,ret){
return (function (){return fn1.call(null,val_28493);
});})(val_28493,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28494 = n;var x_28495 = 0;while(true){
if((x_28495 < n__20651__auto___28494))
{(a[x_28495] = 0);
{
var G__28496 = (x_28495 + 1);
x_28495 = G__28496;
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
var G__28497 = (i + 1);
i = G__28497;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25794 = (function (flag,alt_flag,meta25795){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25795 = meta25795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25794.cljs$lang$type = true;
cljs.core.async.t25794.cljs$lang$ctorStr = "cljs.core.async/t25794";
cljs.core.async.t25794.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25794");
});})(flag))
;
cljs.core.async.t25794.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25796){var self__ = this;
var _25796__$1 = this;return self__.meta25795;
});})(flag))
;
cljs.core.async.t25794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25796,meta25795__$1){var self__ = this;
var _25796__$1 = this;return (new cljs.core.async.t25794(self__.flag,self__.alt_flag,meta25795__$1));
});})(flag))
;
cljs.core.async.__GT_t25794 = ((function (flag){
return (function __GT_t25794(flag__$1,alt_flag__$1,meta25795){return (new cljs.core.async.t25794(flag__$1,alt_flag__$1,meta25795));
});})(flag))
;
}
return (new cljs.core.async.t25794(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25800 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25800 = (function (cb,flag,alt_handler,meta25801){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25801 = meta25801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25800.cljs$lang$type = true;
cljs.core.async.t25800.cljs$lang$ctorStr = "cljs.core.async/t25800";
cljs.core.async.t25800.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25800");
});
cljs.core.async.t25800.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25800.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25800.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25802){var self__ = this;
var _25802__$1 = this;return self__.meta25801;
});
cljs.core.async.t25800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25802,meta25801__$1){var self__ = this;
var _25802__$1 = this;return (new cljs.core.async.t25800(self__.cb,self__.flag,self__.alt_handler,meta25801__$1));
});
cljs.core.async.__GT_t25800 = (function __GT_t25800(cb__$1,flag__$1,alt_handler__$1,meta25801){return (new cljs.core.async.t25800(cb__$1,flag__$1,alt_handler__$1,meta25801));
});
}
return (new cljs.core.async.t25800(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25803_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25803_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25804_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25804_SHARP_,port], null));
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
var G__28498 = (i + 1);
i = G__28498;
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
var alts_BANG___delegate = function (ports,p__25805){var map__25807 = p__25805;var map__25807__$1 = ((cljs.core.seq_QMARK_.call(null,map__25807))?cljs.core.apply.call(null,cljs.core.hash_map,map__25807):map__25807);var opts = map__25807__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25805 = null;if (arguments.length > 1) {
  p__25805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25805);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28499){
var ports = cljs.core.first(arglist__28499);
var p__25805 = cljs.core.rest(arglist__28499);
return alts_BANG___delegate(ports,p__25805);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22567__auto___28500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28500){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28500){
return (function (state_25878){var state_val_25879 = (state_25878[1]);if((state_val_25879 === 1))
{var state_25878__$1 = state_25878;var statearr_25880_28501 = state_25878__$1;(statearr_25880_28501[2] = null);
(statearr_25880_28501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 2))
{var state_25878__$1 = state_25878;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25878__$1,4,from);
} else
{if((state_val_25879 === 3))
{var inst_25876 = (state_25878[2]);var state_25878__$1 = state_25878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25878__$1,inst_25876);
} else
{if((state_val_25879 === 4))
{var inst_25857 = (state_25878[7]);var inst_25857__$1 = (state_25878[2]);var inst_25858 = (inst_25857__$1 == null);var state_25878__$1 = (function (){var statearr_25881 = state_25878;(statearr_25881[7] = inst_25857__$1);
return statearr_25881;
})();if(cljs.core.truth_(inst_25858))
{var statearr_25882_28502 = state_25878__$1;(statearr_25882_28502[1] = 5);
} else
{var statearr_25883_28503 = state_25878__$1;(statearr_25883_28503[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 5))
{var state_25878__$1 = state_25878;if(cljs.core.truth_(close_QMARK_))
{var statearr_25884_28504 = state_25878__$1;(statearr_25884_28504[1] = 8);
} else
{var statearr_25885_28505 = state_25878__$1;(statearr_25885_28505[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 6))
{var inst_25857 = (state_25878[7]);var state_25878__$1 = state_25878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25878__$1,11,to,inst_25857);
} else
{if((state_val_25879 === 7))
{var inst_25874 = (state_25878[2]);var state_25878__$1 = state_25878;var statearr_25886_28506 = state_25878__$1;(statearr_25886_28506[2] = inst_25874);
(statearr_25886_28506[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 8))
{var inst_25861 = cljs.core.async.close_BANG_.call(null,to);var state_25878__$1 = state_25878;var statearr_25887_28507 = state_25878__$1;(statearr_25887_28507[2] = inst_25861);
(statearr_25887_28507[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 9))
{var state_25878__$1 = state_25878;var statearr_25888_28508 = state_25878__$1;(statearr_25888_28508[2] = null);
(statearr_25888_28508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 10))
{var inst_25864 = (state_25878[2]);var state_25878__$1 = state_25878;var statearr_25889_28509 = state_25878__$1;(statearr_25889_28509[2] = inst_25864);
(statearr_25889_28509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 11))
{var inst_25867 = (state_25878[2]);var state_25878__$1 = state_25878;if(cljs.core.truth_(inst_25867))
{var statearr_25890_28510 = state_25878__$1;(statearr_25890_28510[1] = 12);
} else
{var statearr_25891_28511 = state_25878__$1;(statearr_25891_28511[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 12))
{var state_25878__$1 = state_25878;var statearr_25892_28512 = state_25878__$1;(statearr_25892_28512[2] = null);
(statearr_25892_28512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 13))
{var state_25878__$1 = state_25878;var statearr_25893_28513 = state_25878__$1;(statearr_25893_28513[2] = null);
(statearr_25893_28513[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25879 === 14))
{var inst_25872 = (state_25878[2]);var state_25878__$1 = state_25878;var statearr_25894_28514 = state_25878__$1;(statearr_25894_28514[2] = inst_25872);
(statearr_25894_28514[1] = 7);
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
});})(c__22567__auto___28500))
;return ((function (switch__22491__auto__,c__22567__auto___28500){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_25898 = [null,null,null,null,null,null,null,null];(statearr_25898[0] = state_machine__22492__auto__);
(statearr_25898[1] = 1);
return statearr_25898;
});
var state_machine__22492__auto____1 = (function (state_25878){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_25878);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e25899){if((e25899 instanceof Object))
{var ex__22495__auto__ = e25899;var statearr_25900_28515 = state_25878;(statearr_25900_28515[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25878);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28516 = state_25878;
state_25878 = G__28516;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_25878){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_25878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28500))
})();var state__22569__auto__ = (function (){var statearr_25901 = f__22568__auto__.call(null);(statearr_25901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28500);
return statearr_25901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28500))
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
return (function (p__26084){var vec__26085 = p__26084;var v = cljs.core.nth.call(null,vec__26085,0,null);var p = cljs.core.nth.call(null,vec__26085,1,null);var job = vec__26085;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22567__auto___28517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results){
return (function (state_26090){var state_val_26091 = (state_26090[1]);if((state_val_26091 === 2))
{var inst_26087 = (state_26090[2]);var inst_26088 = cljs.core.async.close_BANG_.call(null,res);var state_26090__$1 = (function (){var statearr_26092 = state_26090;(statearr_26092[7] = inst_26087);
return statearr_26092;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26090__$1,inst_26088);
} else
{if((state_val_26091 === 1))
{var state_26090__$1 = state_26090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26090__$1,2,res,v);
} else
{return null;
}
}
});})(c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results))
;return ((function (switch__22491__auto__,c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26096 = [null,null,null,null,null,null,null,null];(statearr_26096[0] = state_machine__22492__auto__);
(statearr_26096[1] = 1);
return statearr_26096;
});
var state_machine__22492__auto____1 = (function (state_26090){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26090);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26097){if((e26097 instanceof Object))
{var ex__22495__auto__ = e26097;var statearr_26098_28518 = state_26090;(statearr_26098_28518[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28519 = state_26090;
state_26090 = G__28519;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26090){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results))
})();var state__22569__auto__ = (function (){var statearr_26099 = f__22568__auto__.call(null);(statearr_26099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28517);
return statearr_26099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28517,res,vec__26085,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26100){var vec__26101 = p__26100;var v = cljs.core.nth.call(null,vec__26101,0,null);var p = cljs.core.nth.call(null,vec__26101,1,null);var job = vec__26101;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28520 = n;var __28521 = 0;while(true){
if((__28521 < n__20651__auto___28520))
{var G__26102_28522 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26102_28522))
{var c__22567__auto___28523 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28521,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (__28521,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function (state_26115){var state_val_26116 = (state_26115[1]);if((state_val_26116 === 7))
{var inst_26111 = (state_26115[2]);var state_26115__$1 = state_26115;var statearr_26117_28524 = state_26115__$1;(statearr_26117_28524[2] = inst_26111);
(statearr_26117_28524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26116 === 6))
{var state_26115__$1 = state_26115;var statearr_26118_28525 = state_26115__$1;(statearr_26118_28525[2] = null);
(statearr_26118_28525[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26116 === 5))
{var state_26115__$1 = state_26115;var statearr_26119_28526 = state_26115__$1;(statearr_26119_28526[2] = null);
(statearr_26119_28526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26116 === 4))
{var inst_26105 = (state_26115[2]);var inst_26106 = async.call(null,inst_26105);var state_26115__$1 = state_26115;if(cljs.core.truth_(inst_26106))
{var statearr_26120_28527 = state_26115__$1;(statearr_26120_28527[1] = 5);
} else
{var statearr_26121_28528 = state_26115__$1;(statearr_26121_28528[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26116 === 3))
{var inst_26113 = (state_26115[2]);var state_26115__$1 = state_26115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26115__$1,inst_26113);
} else
{if((state_val_26116 === 2))
{var state_26115__$1 = state_26115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26115__$1,4,jobs);
} else
{if((state_val_26116 === 1))
{var state_26115__$1 = state_26115;var statearr_26122_28529 = state_26115__$1;(statearr_26122_28529[2] = null);
(statearr_26122_28529[1] = 2);
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
});})(__28521,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
;return ((function (__28521,switch__22491__auto__,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26126 = [null,null,null,null,null,null,null];(statearr_26126[0] = state_machine__22492__auto__);
(statearr_26126[1] = 1);
return statearr_26126;
});
var state_machine__22492__auto____1 = (function (state_26115){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26115);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26127){if((e26127 instanceof Object))
{var ex__22495__auto__ = e26127;var statearr_26128_28530 = state_26115;(statearr_26128_28530[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26115);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28531 = state_26115;
state_26115 = G__28531;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26115){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(__28521,switch__22491__auto__,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26129 = f__22568__auto__.call(null);(statearr_26129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28523);
return statearr_26129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(__28521,c__22567__auto___28523,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26102_28522))
{var c__22567__auto___28532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28521,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (__28521,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function (state_26142){var state_val_26143 = (state_26142[1]);if((state_val_26143 === 7))
{var inst_26138 = (state_26142[2]);var state_26142__$1 = state_26142;var statearr_26144_28533 = state_26142__$1;(statearr_26144_28533[2] = inst_26138);
(statearr_26144_28533[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26143 === 6))
{var state_26142__$1 = state_26142;var statearr_26145_28534 = state_26142__$1;(statearr_26145_28534[2] = null);
(statearr_26145_28534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26143 === 5))
{var state_26142__$1 = state_26142;var statearr_26146_28535 = state_26142__$1;(statearr_26146_28535[2] = null);
(statearr_26146_28535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26143 === 4))
{var inst_26132 = (state_26142[2]);var inst_26133 = process.call(null,inst_26132);var state_26142__$1 = state_26142;if(cljs.core.truth_(inst_26133))
{var statearr_26147_28536 = state_26142__$1;(statearr_26147_28536[1] = 5);
} else
{var statearr_26148_28537 = state_26142__$1;(statearr_26148_28537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26143 === 3))
{var inst_26140 = (state_26142[2]);var state_26142__$1 = state_26142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26142__$1,inst_26140);
} else
{if((state_val_26143 === 2))
{var state_26142__$1 = state_26142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26142__$1,4,jobs);
} else
{if((state_val_26143 === 1))
{var state_26142__$1 = state_26142;var statearr_26149_28538 = state_26142__$1;(statearr_26149_28538[2] = null);
(statearr_26149_28538[1] = 2);
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
});})(__28521,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
;return ((function (__28521,switch__22491__auto__,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26153 = [null,null,null,null,null,null,null];(statearr_26153[0] = state_machine__22492__auto__);
(statearr_26153[1] = 1);
return statearr_26153;
});
var state_machine__22492__auto____1 = (function (state_26142){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26142);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26154){if((e26154 instanceof Object))
{var ex__22495__auto__ = e26154;var statearr_26155_28539 = state_26142;(statearr_26155_28539[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28540 = state_26142;
state_26142 = G__28540;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26142){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(__28521,switch__22491__auto__,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26156 = f__22568__auto__.call(null);(statearr_26156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28532);
return statearr_26156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(__28521,c__22567__auto___28532,G__26102_28522,n__20651__auto___28520,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28541 = (__28521 + 1);
__28521 = G__28541;
continue;
}
} else
{}
break;
}
var c__22567__auto___28542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28542,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28542,jobs,results,process,async){
return (function (state_26177){var state_val_26178 = (state_26177[1]);if((state_val_26178 === 9))
{var inst_26170 = (state_26177[2]);var state_26177__$1 = (function (){var statearr_26179 = state_26177;(statearr_26179[7] = inst_26170);
return statearr_26179;
})();var statearr_26180_28543 = state_26177__$1;(statearr_26180_28543[2] = null);
(statearr_26180_28543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26178 === 8))
{var inst_26164 = (state_26177[8]);var inst_26168 = (state_26177[2]);var state_26177__$1 = (function (){var statearr_26181 = state_26177;(statearr_26181[9] = inst_26168);
return statearr_26181;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26177__$1,9,results,inst_26164);
} else
{if((state_val_26178 === 7))
{var inst_26173 = (state_26177[2]);var state_26177__$1 = state_26177;var statearr_26182_28544 = state_26177__$1;(statearr_26182_28544[2] = inst_26173);
(statearr_26182_28544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26178 === 6))
{var inst_26159 = (state_26177[10]);var inst_26164 = (state_26177[8]);var inst_26164__$1 = cljs.core.async.chan.call(null,1);var inst_26165 = [inst_26159,inst_26164__$1];var inst_26166 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26165,null));var state_26177__$1 = (function (){var statearr_26183 = state_26177;(statearr_26183[8] = inst_26164__$1);
return statearr_26183;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26177__$1,8,jobs,inst_26166);
} else
{if((state_val_26178 === 5))
{var inst_26162 = cljs.core.async.close_BANG_.call(null,jobs);var state_26177__$1 = state_26177;var statearr_26184_28545 = state_26177__$1;(statearr_26184_28545[2] = inst_26162);
(statearr_26184_28545[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26178 === 4))
{var inst_26159 = (state_26177[10]);var inst_26159__$1 = (state_26177[2]);var inst_26160 = (inst_26159__$1 == null);var state_26177__$1 = (function (){var statearr_26185 = state_26177;(statearr_26185[10] = inst_26159__$1);
return statearr_26185;
})();if(cljs.core.truth_(inst_26160))
{var statearr_26186_28546 = state_26177__$1;(statearr_26186_28546[1] = 5);
} else
{var statearr_26187_28547 = state_26177__$1;(statearr_26187_28547[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26178 === 3))
{var inst_26175 = (state_26177[2]);var state_26177__$1 = state_26177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26177__$1,inst_26175);
} else
{if((state_val_26178 === 2))
{var state_26177__$1 = state_26177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26177__$1,4,from);
} else
{if((state_val_26178 === 1))
{var state_26177__$1 = state_26177;var statearr_26188_28548 = state_26177__$1;(statearr_26188_28548[2] = null);
(statearr_26188_28548[1] = 2);
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
});})(c__22567__auto___28542,jobs,results,process,async))
;return ((function (switch__22491__auto__,c__22567__auto___28542,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26192 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26192[0] = state_machine__22492__auto__);
(statearr_26192[1] = 1);
return statearr_26192;
});
var state_machine__22492__auto____1 = (function (state_26177){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26177);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26193){if((e26193 instanceof Object))
{var ex__22495__auto__ = e26193;var statearr_26194_28549 = state_26177;(statearr_26194_28549[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26177);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28550 = state_26177;
state_26177 = G__28550;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26177){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28542,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26195 = f__22568__auto__.call(null);(statearr_26195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28542);
return statearr_26195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28542,jobs,results,process,async))
);
var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__,jobs,results,process,async){
return (function (state_26233){var state_val_26234 = (state_26233[1]);if((state_val_26234 === 1))
{var state_26233__$1 = state_26233;var statearr_26235_28551 = state_26233__$1;(statearr_26235_28551[2] = null);
(statearr_26235_28551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 2))
{var state_26233__$1 = state_26233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26233__$1,4,results);
} else
{if((state_val_26234 === 3))
{var inst_26231 = (state_26233[2]);var state_26233__$1 = state_26233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26233__$1,inst_26231);
} else
{if((state_val_26234 === 4))
{var inst_26198 = (state_26233[7]);var inst_26198__$1 = (state_26233[2]);var inst_26199 = (inst_26198__$1 == null);var state_26233__$1 = (function (){var statearr_26236 = state_26233;(statearr_26236[7] = inst_26198__$1);
return statearr_26236;
})();if(cljs.core.truth_(inst_26199))
{var statearr_26237_28552 = state_26233__$1;(statearr_26237_28552[1] = 5);
} else
{var statearr_26238_28553 = state_26233__$1;(statearr_26238_28553[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 5))
{var state_26233__$1 = state_26233;if(cljs.core.truth_(close_QMARK_))
{var statearr_26239_28554 = state_26233__$1;(statearr_26239_28554[1] = 8);
} else
{var statearr_26240_28555 = state_26233__$1;(statearr_26240_28555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 6))
{var inst_26198 = (state_26233[7]);var state_26233__$1 = state_26233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26233__$1,11,inst_26198);
} else
{if((state_val_26234 === 7))
{var inst_26229 = (state_26233[2]);var state_26233__$1 = state_26233;var statearr_26241_28556 = state_26233__$1;(statearr_26241_28556[2] = inst_26229);
(statearr_26241_28556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 8))
{var inst_26202 = cljs.core.async.close_BANG_.call(null,to);var state_26233__$1 = state_26233;var statearr_26242_28557 = state_26233__$1;(statearr_26242_28557[2] = inst_26202);
(statearr_26242_28557[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 9))
{var state_26233__$1 = state_26233;var statearr_26243_28558 = state_26233__$1;(statearr_26243_28558[2] = null);
(statearr_26243_28558[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 10))
{var inst_26205 = (state_26233[2]);var state_26233__$1 = state_26233;var statearr_26244_28559 = state_26233__$1;(statearr_26244_28559[2] = inst_26205);
(statearr_26244_28559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 11))
{var inst_26208 = (state_26233[2]);var state_26233__$1 = (function (){var statearr_26245 = state_26233;(statearr_26245[8] = inst_26208);
return statearr_26245;
})();var statearr_26246_28560 = state_26233__$1;(statearr_26246_28560[2] = null);
(statearr_26246_28560[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 12))
{var inst_26208 = (state_26233[8]);var state_26233__$1 = state_26233;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26233__$1,14,inst_26208);
} else
{if((state_val_26234 === 13))
{var inst_26226 = (state_26233[2]);var state_26233__$1 = (function (){var statearr_26247 = state_26233;(statearr_26247[9] = inst_26226);
return statearr_26247;
})();var statearr_26248_28561 = state_26233__$1;(statearr_26248_28561[2] = null);
(statearr_26248_28561[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 14))
{var inst_26213 = (state_26233[10]);var inst_26211 = (state_26233[11]);var inst_26211__$1 = (state_26233[2]);var inst_26212 = (inst_26211__$1 == null);var inst_26213__$1 = cljs.core.not.call(null,inst_26212);var state_26233__$1 = (function (){var statearr_26249 = state_26233;(statearr_26249[10] = inst_26213__$1);
(statearr_26249[11] = inst_26211__$1);
return statearr_26249;
})();if(inst_26213__$1)
{var statearr_26250_28562 = state_26233__$1;(statearr_26250_28562[1] = 15);
} else
{var statearr_26251_28563 = state_26233__$1;(statearr_26251_28563[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 15))
{var inst_26211 = (state_26233[11]);var state_26233__$1 = state_26233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26233__$1,18,to,inst_26211);
} else
{if((state_val_26234 === 16))
{var inst_26213 = (state_26233[10]);var state_26233__$1 = state_26233;var statearr_26252_28564 = state_26233__$1;(statearr_26252_28564[2] = inst_26213);
(statearr_26252_28564[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 17))
{var inst_26219 = (state_26233[2]);var state_26233__$1 = state_26233;if(cljs.core.truth_(inst_26219))
{var statearr_26253_28565 = state_26233__$1;(statearr_26253_28565[1] = 19);
} else
{var statearr_26254_28566 = state_26233__$1;(statearr_26254_28566[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 18))
{var inst_26216 = (state_26233[2]);var state_26233__$1 = state_26233;var statearr_26255_28567 = state_26233__$1;(statearr_26255_28567[2] = inst_26216);
(statearr_26255_28567[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 19))
{var state_26233__$1 = state_26233;var statearr_26256_28568 = state_26233__$1;(statearr_26256_28568[2] = null);
(statearr_26256_28568[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 20))
{var state_26233__$1 = state_26233;var statearr_26257_28569 = state_26233__$1;(statearr_26257_28569[2] = null);
(statearr_26257_28569[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26234 === 21))
{var inst_26224 = (state_26233[2]);var state_26233__$1 = state_26233;var statearr_26258_28570 = state_26233__$1;(statearr_26258_28570[2] = inst_26224);
(statearr_26258_28570[1] = 13);
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
});})(c__22567__auto__,jobs,results,process,async))
;return ((function (switch__22491__auto__,c__22567__auto__,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26262 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26262[0] = state_machine__22492__auto__);
(statearr_26262[1] = 1);
return statearr_26262;
});
var state_machine__22492__auto____1 = (function (state_26233){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26233);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26263){if((e26263 instanceof Object))
{var ex__22495__auto__ = e26263;var statearr_26264_28571 = state_26233;(statearr_26264_28571[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26233);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28572 = state_26233;
state_26233 = G__28572;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26233){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26265 = f__22568__auto__.call(null);(statearr_26265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__,jobs,results,process,async))
);
return c__22567__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22567__auto___28573 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28573,tc,fc){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28573,tc,fc){
return (function (state_26341){var state_val_26342 = (state_26341[1]);if((state_val_26342 === 1))
{var state_26341__$1 = state_26341;var statearr_26343_28574 = state_26341__$1;(statearr_26343_28574[2] = null);
(statearr_26343_28574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 2))
{var state_26341__$1 = state_26341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26341__$1,4,ch);
} else
{if((state_val_26342 === 3))
{var inst_26339 = (state_26341[2]);var state_26341__$1 = state_26341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26341__$1,inst_26339);
} else
{if((state_val_26342 === 4))
{var inst_26318 = (state_26341[7]);var inst_26318__$1 = (state_26341[2]);var inst_26319 = (inst_26318__$1 == null);var state_26341__$1 = (function (){var statearr_26344 = state_26341;(statearr_26344[7] = inst_26318__$1);
return statearr_26344;
})();if(cljs.core.truth_(inst_26319))
{var statearr_26345_28575 = state_26341__$1;(statearr_26345_28575[1] = 5);
} else
{var statearr_26346_28576 = state_26341__$1;(statearr_26346_28576[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 5))
{var inst_26321 = cljs.core.async.close_BANG_.call(null,tc);var inst_26322 = cljs.core.async.close_BANG_.call(null,fc);var state_26341__$1 = (function (){var statearr_26347 = state_26341;(statearr_26347[8] = inst_26321);
return statearr_26347;
})();var statearr_26348_28577 = state_26341__$1;(statearr_26348_28577[2] = inst_26322);
(statearr_26348_28577[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 6))
{var inst_26318 = (state_26341[7]);var inst_26324 = p.call(null,inst_26318);var state_26341__$1 = state_26341;if(cljs.core.truth_(inst_26324))
{var statearr_26349_28578 = state_26341__$1;(statearr_26349_28578[1] = 9);
} else
{var statearr_26350_28579 = state_26341__$1;(statearr_26350_28579[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 7))
{var inst_26337 = (state_26341[2]);var state_26341__$1 = state_26341;var statearr_26351_28580 = state_26341__$1;(statearr_26351_28580[2] = inst_26337);
(statearr_26351_28580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 8))
{var inst_26330 = (state_26341[2]);var state_26341__$1 = state_26341;if(cljs.core.truth_(inst_26330))
{var statearr_26352_28581 = state_26341__$1;(statearr_26352_28581[1] = 12);
} else
{var statearr_26353_28582 = state_26341__$1;(statearr_26353_28582[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 9))
{var state_26341__$1 = state_26341;var statearr_26354_28583 = state_26341__$1;(statearr_26354_28583[2] = tc);
(statearr_26354_28583[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 10))
{var state_26341__$1 = state_26341;var statearr_26355_28584 = state_26341__$1;(statearr_26355_28584[2] = fc);
(statearr_26355_28584[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 11))
{var inst_26318 = (state_26341[7]);var inst_26328 = (state_26341[2]);var state_26341__$1 = state_26341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26341__$1,8,inst_26328,inst_26318);
} else
{if((state_val_26342 === 12))
{var state_26341__$1 = state_26341;var statearr_26356_28585 = state_26341__$1;(statearr_26356_28585[2] = null);
(statearr_26356_28585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 13))
{var state_26341__$1 = state_26341;var statearr_26357_28586 = state_26341__$1;(statearr_26357_28586[2] = null);
(statearr_26357_28586[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26342 === 14))
{var inst_26335 = (state_26341[2]);var state_26341__$1 = state_26341;var statearr_26358_28587 = state_26341__$1;(statearr_26358_28587[2] = inst_26335);
(statearr_26358_28587[1] = 7);
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
});})(c__22567__auto___28573,tc,fc))
;return ((function (switch__22491__auto__,c__22567__auto___28573,tc,fc){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26362 = [null,null,null,null,null,null,null,null,null];(statearr_26362[0] = state_machine__22492__auto__);
(statearr_26362[1] = 1);
return statearr_26362;
});
var state_machine__22492__auto____1 = (function (state_26341){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26341);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26363){if((e26363 instanceof Object))
{var ex__22495__auto__ = e26363;var statearr_26364_28588 = state_26341;(statearr_26364_28588[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28589 = state_26341;
state_26341 = G__28589;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26341){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28573,tc,fc))
})();var state__22569__auto__ = (function (){var statearr_26365 = f__22568__auto__.call(null);(statearr_26365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28573);
return statearr_26365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28573,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__){
return (function (state_26412){var state_val_26413 = (state_26412[1]);if((state_val_26413 === 7))
{var inst_26408 = (state_26412[2]);var state_26412__$1 = state_26412;var statearr_26414_28590 = state_26412__$1;(statearr_26414_28590[2] = inst_26408);
(statearr_26414_28590[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26413 === 6))
{var inst_26398 = (state_26412[7]);var inst_26401 = (state_26412[8]);var inst_26405 = f.call(null,inst_26398,inst_26401);var inst_26398__$1 = inst_26405;var state_26412__$1 = (function (){var statearr_26415 = state_26412;(statearr_26415[7] = inst_26398__$1);
return statearr_26415;
})();var statearr_26416_28591 = state_26412__$1;(statearr_26416_28591[2] = null);
(statearr_26416_28591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26413 === 5))
{var inst_26398 = (state_26412[7]);var state_26412__$1 = state_26412;var statearr_26417_28592 = state_26412__$1;(statearr_26417_28592[2] = inst_26398);
(statearr_26417_28592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26413 === 4))
{var inst_26401 = (state_26412[8]);var inst_26401__$1 = (state_26412[2]);var inst_26402 = (inst_26401__$1 == null);var state_26412__$1 = (function (){var statearr_26418 = state_26412;(statearr_26418[8] = inst_26401__$1);
return statearr_26418;
})();if(cljs.core.truth_(inst_26402))
{var statearr_26419_28593 = state_26412__$1;(statearr_26419_28593[1] = 5);
} else
{var statearr_26420_28594 = state_26412__$1;(statearr_26420_28594[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26413 === 3))
{var inst_26410 = (state_26412[2]);var state_26412__$1 = state_26412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26412__$1,inst_26410);
} else
{if((state_val_26413 === 2))
{var state_26412__$1 = state_26412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26412__$1,4,ch);
} else
{if((state_val_26413 === 1))
{var inst_26398 = init;var state_26412__$1 = (function (){var statearr_26421 = state_26412;(statearr_26421[7] = inst_26398);
return statearr_26421;
})();var statearr_26422_28595 = state_26412__$1;(statearr_26422_28595[2] = null);
(statearr_26422_28595[1] = 2);
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
});})(c__22567__auto__))
;return ((function (switch__22491__auto__,c__22567__auto__){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26426 = [null,null,null,null,null,null,null,null,null];(statearr_26426[0] = state_machine__22492__auto__);
(statearr_26426[1] = 1);
return statearr_26426;
});
var state_machine__22492__auto____1 = (function (state_26412){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26412);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26427){if((e26427 instanceof Object))
{var ex__22495__auto__ = e26427;var statearr_26428_28596 = state_26412;(statearr_26428_28596[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28597 = state_26412;
state_26412 = G__28597;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26412){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_26429 = f__22568__auto__.call(null);(statearr_26429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__))
);
return c__22567__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__){
return (function (state_26503){var state_val_26504 = (state_26503[1]);if((state_val_26504 === 1))
{var inst_26479 = cljs.core.seq.call(null,coll);var inst_26480 = inst_26479;var state_26503__$1 = (function (){var statearr_26505 = state_26503;(statearr_26505[7] = inst_26480);
return statearr_26505;
})();var statearr_26506_28598 = state_26503__$1;(statearr_26506_28598[2] = null);
(statearr_26506_28598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 2))
{var inst_26480 = (state_26503[7]);var state_26503__$1 = state_26503;if(cljs.core.truth_(inst_26480))
{var statearr_26507_28599 = state_26503__$1;(statearr_26507_28599[1] = 4);
} else
{var statearr_26508_28600 = state_26503__$1;(statearr_26508_28600[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 3))
{var inst_26501 = (state_26503[2]);var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26503__$1,inst_26501);
} else
{if((state_val_26504 === 4))
{var inst_26480 = (state_26503[7]);var inst_26483 = cljs.core.first.call(null,inst_26480);var state_26503__$1 = state_26503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26503__$1,7,ch,inst_26483);
} else
{if((state_val_26504 === 5))
{var inst_26480 = (state_26503[7]);var state_26503__$1 = state_26503;var statearr_26509_28601 = state_26503__$1;(statearr_26509_28601[2] = inst_26480);
(statearr_26509_28601[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 6))
{var inst_26488 = (state_26503[2]);var state_26503__$1 = state_26503;if(cljs.core.truth_(inst_26488))
{var statearr_26510_28602 = state_26503__$1;(statearr_26510_28602[1] = 8);
} else
{var statearr_26511_28603 = state_26503__$1;(statearr_26511_28603[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 7))
{var inst_26485 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26512_28604 = state_26503__$1;(statearr_26512_28604[2] = inst_26485);
(statearr_26512_28604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 8))
{var inst_26480 = (state_26503[7]);var inst_26490 = cljs.core.next.call(null,inst_26480);var inst_26480__$1 = inst_26490;var state_26503__$1 = (function (){var statearr_26513 = state_26503;(statearr_26513[7] = inst_26480__$1);
return statearr_26513;
})();var statearr_26514_28605 = state_26503__$1;(statearr_26514_28605[2] = null);
(statearr_26514_28605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 9))
{var state_26503__$1 = state_26503;if(cljs.core.truth_(close_QMARK_))
{var statearr_26515_28606 = state_26503__$1;(statearr_26515_28606[1] = 11);
} else
{var statearr_26516_28607 = state_26503__$1;(statearr_26516_28607[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 10))
{var inst_26499 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26517_28608 = state_26503__$1;(statearr_26517_28608[2] = inst_26499);
(statearr_26517_28608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 11))
{var inst_26494 = cljs.core.async.close_BANG_.call(null,ch);var state_26503__$1 = state_26503;var statearr_26518_28609 = state_26503__$1;(statearr_26518_28609[2] = inst_26494);
(statearr_26518_28609[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 12))
{var state_26503__$1 = state_26503;var statearr_26519_28610 = state_26503__$1;(statearr_26519_28610[2] = null);
(statearr_26519_28610[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26504 === 13))
{var inst_26497 = (state_26503[2]);var state_26503__$1 = state_26503;var statearr_26520_28611 = state_26503__$1;(statearr_26520_28611[2] = inst_26497);
(statearr_26520_28611[1] = 10);
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
});})(c__22567__auto__))
;return ((function (switch__22491__auto__,c__22567__auto__){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26524 = [null,null,null,null,null,null,null,null];(statearr_26524[0] = state_machine__22492__auto__);
(statearr_26524[1] = 1);
return statearr_26524;
});
var state_machine__22492__auto____1 = (function (state_26503){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26503);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26525){if((e26525 instanceof Object))
{var ex__22495__auto__ = e26525;var statearr_26526_28612 = state_26503;(statearr_26526_28612[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28613 = state_26503;
state_26503 = G__28613;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26503){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_26527 = f__22568__auto__.call(null);(statearr_26527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__))
);
return c__22567__auto__;
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
cljs.core.async.Mux = (function (){var obj26529 = {};return obj26529;
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
cljs.core.async.Mult = (function (){var obj26531 = {};return obj26531;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26753 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26753 = (function (cs,ch,mult,meta26754){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26754 = meta26754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26753.cljs$lang$type = true;
cljs.core.async.t26753.cljs$lang$ctorStr = "cljs.core.async/t26753";
cljs.core.async.t26753.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26753");
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26753.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26753.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26755){var self__ = this;
var _26755__$1 = this;return self__.meta26754;
});})(cs))
;
cljs.core.async.t26753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26755,meta26754__$1){var self__ = this;
var _26755__$1 = this;return (new cljs.core.async.t26753(self__.cs,self__.ch,self__.mult,meta26754__$1));
});})(cs))
;
cljs.core.async.__GT_t26753 = ((function (cs){
return (function __GT_t26753(cs__$1,ch__$1,mult__$1,meta26754){return (new cljs.core.async.t26753(cs__$1,ch__$1,mult__$1,meta26754));
});})(cs))
;
}
return (new cljs.core.async.t26753(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22567__auto___28614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28614,cs,m,dchan,dctr,done){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28614,cs,m,dchan,dctr,done){
return (function (state_26886){var state_val_26887 = (state_26886[1]);if((state_val_26887 === 32))
{var inst_26826 = (state_26886[7]);var inst_26828 = (state_26886[8]);var inst_26827 = (state_26886[9]);var inst_26829 = (state_26886[10]);var inst_26841 = (state_26886[2]);var inst_26842 = (inst_26829 + 1);var tmp26888 = inst_26826;var tmp26889 = inst_26828;var tmp26890 = inst_26827;var inst_26826__$1 = tmp26888;var inst_26827__$1 = tmp26890;var inst_26828__$1 = tmp26889;var inst_26829__$1 = inst_26842;var state_26886__$1 = (function (){var statearr_26891 = state_26886;(statearr_26891[7] = inst_26826__$1);
(statearr_26891[8] = inst_26828__$1);
(statearr_26891[9] = inst_26827__$1);
(statearr_26891[10] = inst_26829__$1);
(statearr_26891[11] = inst_26841);
return statearr_26891;
})();var statearr_26892_28615 = state_26886__$1;(statearr_26892_28615[2] = null);
(statearr_26892_28615[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 1))
{var state_26886__$1 = state_26886;var statearr_26893_28616 = state_26886__$1;(statearr_26893_28616[2] = null);
(statearr_26893_28616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 33))
{var inst_26845 = (state_26886[12]);var inst_26847 = cljs.core.chunked_seq_QMARK_.call(null,inst_26845);var state_26886__$1 = state_26886;if(inst_26847)
{var statearr_26894_28617 = state_26886__$1;(statearr_26894_28617[1] = 36);
} else
{var statearr_26895_28618 = state_26886__$1;(statearr_26895_28618[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 2))
{var state_26886__$1 = state_26886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26886__$1,4,ch);
} else
{if((state_val_26887 === 34))
{var state_26886__$1 = state_26886;var statearr_26896_28619 = state_26886__$1;(statearr_26896_28619[2] = null);
(statearr_26896_28619[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 3))
{var inst_26884 = (state_26886[2]);var state_26886__$1 = state_26886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26886__$1,inst_26884);
} else
{if((state_val_26887 === 35))
{var inst_26868 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26897_28620 = state_26886__$1;(statearr_26897_28620[2] = inst_26868);
(statearr_26897_28620[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 4))
{var inst_26758 = (state_26886[13]);var inst_26758__$1 = (state_26886[2]);var inst_26759 = (inst_26758__$1 == null);var state_26886__$1 = (function (){var statearr_26898 = state_26886;(statearr_26898[13] = inst_26758__$1);
return statearr_26898;
})();if(cljs.core.truth_(inst_26759))
{var statearr_26899_28621 = state_26886__$1;(statearr_26899_28621[1] = 5);
} else
{var statearr_26900_28622 = state_26886__$1;(statearr_26900_28622[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 36))
{var inst_26845 = (state_26886[12]);var inst_26849 = cljs.core.chunk_first.call(null,inst_26845);var inst_26850 = cljs.core.chunk_rest.call(null,inst_26845);var inst_26851 = cljs.core.count.call(null,inst_26849);var inst_26826 = inst_26850;var inst_26827 = inst_26849;var inst_26828 = inst_26851;var inst_26829 = 0;var state_26886__$1 = (function (){var statearr_26901 = state_26886;(statearr_26901[7] = inst_26826);
(statearr_26901[8] = inst_26828);
(statearr_26901[9] = inst_26827);
(statearr_26901[10] = inst_26829);
return statearr_26901;
})();var statearr_26902_28623 = state_26886__$1;(statearr_26902_28623[2] = null);
(statearr_26902_28623[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 5))
{var inst_26765 = cljs.core.deref.call(null,cs);var inst_26766 = cljs.core.seq.call(null,inst_26765);var inst_26767 = inst_26766;var inst_26768 = null;var inst_26769 = 0;var inst_26770 = 0;var state_26886__$1 = (function (){var statearr_26903 = state_26886;(statearr_26903[14] = inst_26768);
(statearr_26903[15] = inst_26769);
(statearr_26903[16] = inst_26767);
(statearr_26903[17] = inst_26770);
return statearr_26903;
})();var statearr_26904_28624 = state_26886__$1;(statearr_26904_28624[2] = null);
(statearr_26904_28624[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 37))
{var inst_26845 = (state_26886[12]);var inst_26854 = (state_26886[18]);var inst_26758 = (state_26886[13]);var inst_26854__$1 = cljs.core.first.call(null,inst_26845);var inst_26855 = cljs.core.async.put_BANG_.call(null,inst_26854__$1,inst_26758,done);var state_26886__$1 = (function (){var statearr_26905 = state_26886;(statearr_26905[18] = inst_26854__$1);
return statearr_26905;
})();if(cljs.core.truth_(inst_26855))
{var statearr_26906_28625 = state_26886__$1;(statearr_26906_28625[1] = 39);
} else
{var statearr_26907_28626 = state_26886__$1;(statearr_26907_28626[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 6))
{var inst_26818 = (state_26886[19]);var inst_26817 = cljs.core.deref.call(null,cs);var inst_26818__$1 = cljs.core.keys.call(null,inst_26817);var inst_26819 = cljs.core.count.call(null,inst_26818__$1);var inst_26820 = cljs.core.reset_BANG_.call(null,dctr,inst_26819);var inst_26825 = cljs.core.seq.call(null,inst_26818__$1);var inst_26826 = inst_26825;var inst_26827 = null;var inst_26828 = 0;var inst_26829 = 0;var state_26886__$1 = (function (){var statearr_26908 = state_26886;(statearr_26908[7] = inst_26826);
(statearr_26908[20] = inst_26820);
(statearr_26908[19] = inst_26818__$1);
(statearr_26908[8] = inst_26828);
(statearr_26908[9] = inst_26827);
(statearr_26908[10] = inst_26829);
return statearr_26908;
})();var statearr_26909_28627 = state_26886__$1;(statearr_26909_28627[2] = null);
(statearr_26909_28627[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 38))
{var inst_26865 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26910_28628 = state_26886__$1;(statearr_26910_28628[2] = inst_26865);
(statearr_26910_28628[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 7))
{var inst_26882 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26911_28629 = state_26886__$1;(statearr_26911_28629[2] = inst_26882);
(statearr_26911_28629[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 39))
{var state_26886__$1 = state_26886;var statearr_26912_28630 = state_26886__$1;(statearr_26912_28630[2] = null);
(statearr_26912_28630[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 8))
{var inst_26769 = (state_26886[15]);var inst_26770 = (state_26886[17]);var inst_26772 = (inst_26770 < inst_26769);var inst_26773 = inst_26772;var state_26886__$1 = state_26886;if(cljs.core.truth_(inst_26773))
{var statearr_26913_28631 = state_26886__$1;(statearr_26913_28631[1] = 10);
} else
{var statearr_26914_28632 = state_26886__$1;(statearr_26914_28632[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 40))
{var inst_26854 = (state_26886[18]);var inst_26858 = done.call(null,null);var inst_26859 = cljs.core.async.untap_STAR_.call(null,m,inst_26854);var state_26886__$1 = (function (){var statearr_26915 = state_26886;(statearr_26915[21] = inst_26858);
return statearr_26915;
})();var statearr_26916_28633 = state_26886__$1;(statearr_26916_28633[2] = inst_26859);
(statearr_26916_28633[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 9))
{var inst_26815 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26917_28634 = state_26886__$1;(statearr_26917_28634[2] = inst_26815);
(statearr_26917_28634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 41))
{var inst_26845 = (state_26886[12]);var inst_26861 = (state_26886[2]);var inst_26862 = cljs.core.next.call(null,inst_26845);var inst_26826 = inst_26862;var inst_26827 = null;var inst_26828 = 0;var inst_26829 = 0;var state_26886__$1 = (function (){var statearr_26918 = state_26886;(statearr_26918[22] = inst_26861);
(statearr_26918[7] = inst_26826);
(statearr_26918[8] = inst_26828);
(statearr_26918[9] = inst_26827);
(statearr_26918[10] = inst_26829);
return statearr_26918;
})();var statearr_26919_28635 = state_26886__$1;(statearr_26919_28635[2] = null);
(statearr_26919_28635[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 10))
{var inst_26768 = (state_26886[14]);var inst_26770 = (state_26886[17]);var inst_26776 = cljs.core._nth.call(null,inst_26768,inst_26770);var inst_26777 = cljs.core.nth.call(null,inst_26776,0,null);var inst_26778 = cljs.core.nth.call(null,inst_26776,1,null);var state_26886__$1 = (function (){var statearr_26920 = state_26886;(statearr_26920[23] = inst_26777);
return statearr_26920;
})();if(cljs.core.truth_(inst_26778))
{var statearr_26921_28636 = state_26886__$1;(statearr_26921_28636[1] = 13);
} else
{var statearr_26922_28637 = state_26886__$1;(statearr_26922_28637[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 42))
{var state_26886__$1 = state_26886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26886__$1,45,dchan);
} else
{if((state_val_26887 === 11))
{var inst_26787 = (state_26886[24]);var inst_26767 = (state_26886[16]);var inst_26787__$1 = cljs.core.seq.call(null,inst_26767);var state_26886__$1 = (function (){var statearr_26923 = state_26886;(statearr_26923[24] = inst_26787__$1);
return statearr_26923;
})();if(inst_26787__$1)
{var statearr_26924_28638 = state_26886__$1;(statearr_26924_28638[1] = 16);
} else
{var statearr_26925_28639 = state_26886__$1;(statearr_26925_28639[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 43))
{var state_26886__$1 = state_26886;var statearr_26926_28640 = state_26886__$1;(statearr_26926_28640[2] = null);
(statearr_26926_28640[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 12))
{var inst_26813 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26927_28641 = state_26886__$1;(statearr_26927_28641[2] = inst_26813);
(statearr_26927_28641[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 44))
{var inst_26879 = (state_26886[2]);var state_26886__$1 = (function (){var statearr_26928 = state_26886;(statearr_26928[25] = inst_26879);
return statearr_26928;
})();var statearr_26929_28642 = state_26886__$1;(statearr_26929_28642[2] = null);
(statearr_26929_28642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 13))
{var inst_26777 = (state_26886[23]);var inst_26780 = cljs.core.async.close_BANG_.call(null,inst_26777);var state_26886__$1 = state_26886;var statearr_26930_28643 = state_26886__$1;(statearr_26930_28643[2] = inst_26780);
(statearr_26930_28643[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 45))
{var inst_26876 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26934_28644 = state_26886__$1;(statearr_26934_28644[2] = inst_26876);
(statearr_26934_28644[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 14))
{var state_26886__$1 = state_26886;var statearr_26935_28645 = state_26886__$1;(statearr_26935_28645[2] = null);
(statearr_26935_28645[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 15))
{var inst_26768 = (state_26886[14]);var inst_26769 = (state_26886[15]);var inst_26767 = (state_26886[16]);var inst_26770 = (state_26886[17]);var inst_26783 = (state_26886[2]);var inst_26784 = (inst_26770 + 1);var tmp26931 = inst_26768;var tmp26932 = inst_26769;var tmp26933 = inst_26767;var inst_26767__$1 = tmp26933;var inst_26768__$1 = tmp26931;var inst_26769__$1 = tmp26932;var inst_26770__$1 = inst_26784;var state_26886__$1 = (function (){var statearr_26936 = state_26886;(statearr_26936[26] = inst_26783);
(statearr_26936[14] = inst_26768__$1);
(statearr_26936[15] = inst_26769__$1);
(statearr_26936[16] = inst_26767__$1);
(statearr_26936[17] = inst_26770__$1);
return statearr_26936;
})();var statearr_26937_28646 = state_26886__$1;(statearr_26937_28646[2] = null);
(statearr_26937_28646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 16))
{var inst_26787 = (state_26886[24]);var inst_26789 = cljs.core.chunked_seq_QMARK_.call(null,inst_26787);var state_26886__$1 = state_26886;if(inst_26789)
{var statearr_26938_28647 = state_26886__$1;(statearr_26938_28647[1] = 19);
} else
{var statearr_26939_28648 = state_26886__$1;(statearr_26939_28648[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 17))
{var state_26886__$1 = state_26886;var statearr_26940_28649 = state_26886__$1;(statearr_26940_28649[2] = null);
(statearr_26940_28649[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 18))
{var inst_26811 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26941_28650 = state_26886__$1;(statearr_26941_28650[2] = inst_26811);
(statearr_26941_28650[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 19))
{var inst_26787 = (state_26886[24]);var inst_26791 = cljs.core.chunk_first.call(null,inst_26787);var inst_26792 = cljs.core.chunk_rest.call(null,inst_26787);var inst_26793 = cljs.core.count.call(null,inst_26791);var inst_26767 = inst_26792;var inst_26768 = inst_26791;var inst_26769 = inst_26793;var inst_26770 = 0;var state_26886__$1 = (function (){var statearr_26942 = state_26886;(statearr_26942[14] = inst_26768);
(statearr_26942[15] = inst_26769);
(statearr_26942[16] = inst_26767);
(statearr_26942[17] = inst_26770);
return statearr_26942;
})();var statearr_26943_28651 = state_26886__$1;(statearr_26943_28651[2] = null);
(statearr_26943_28651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 20))
{var inst_26787 = (state_26886[24]);var inst_26797 = cljs.core.first.call(null,inst_26787);var inst_26798 = cljs.core.nth.call(null,inst_26797,0,null);var inst_26799 = cljs.core.nth.call(null,inst_26797,1,null);var state_26886__$1 = (function (){var statearr_26944 = state_26886;(statearr_26944[27] = inst_26798);
return statearr_26944;
})();if(cljs.core.truth_(inst_26799))
{var statearr_26945_28652 = state_26886__$1;(statearr_26945_28652[1] = 22);
} else
{var statearr_26946_28653 = state_26886__$1;(statearr_26946_28653[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 21))
{var inst_26808 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26947_28654 = state_26886__$1;(statearr_26947_28654[2] = inst_26808);
(statearr_26947_28654[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 22))
{var inst_26798 = (state_26886[27]);var inst_26801 = cljs.core.async.close_BANG_.call(null,inst_26798);var state_26886__$1 = state_26886;var statearr_26948_28655 = state_26886__$1;(statearr_26948_28655[2] = inst_26801);
(statearr_26948_28655[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 23))
{var state_26886__$1 = state_26886;var statearr_26949_28656 = state_26886__$1;(statearr_26949_28656[2] = null);
(statearr_26949_28656[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 24))
{var inst_26787 = (state_26886[24]);var inst_26804 = (state_26886[2]);var inst_26805 = cljs.core.next.call(null,inst_26787);var inst_26767 = inst_26805;var inst_26768 = null;var inst_26769 = 0;var inst_26770 = 0;var state_26886__$1 = (function (){var statearr_26950 = state_26886;(statearr_26950[14] = inst_26768);
(statearr_26950[15] = inst_26769);
(statearr_26950[28] = inst_26804);
(statearr_26950[16] = inst_26767);
(statearr_26950[17] = inst_26770);
return statearr_26950;
})();var statearr_26951_28657 = state_26886__$1;(statearr_26951_28657[2] = null);
(statearr_26951_28657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 25))
{var inst_26828 = (state_26886[8]);var inst_26829 = (state_26886[10]);var inst_26831 = (inst_26829 < inst_26828);var inst_26832 = inst_26831;var state_26886__$1 = state_26886;if(cljs.core.truth_(inst_26832))
{var statearr_26952_28658 = state_26886__$1;(statearr_26952_28658[1] = 27);
} else
{var statearr_26953_28659 = state_26886__$1;(statearr_26953_28659[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 26))
{var inst_26818 = (state_26886[19]);var inst_26872 = (state_26886[2]);var inst_26873 = cljs.core.seq.call(null,inst_26818);var state_26886__$1 = (function (){var statearr_26954 = state_26886;(statearr_26954[29] = inst_26872);
return statearr_26954;
})();if(inst_26873)
{var statearr_26955_28660 = state_26886__$1;(statearr_26955_28660[1] = 42);
} else
{var statearr_26956_28661 = state_26886__$1;(statearr_26956_28661[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 27))
{var inst_26827 = (state_26886[9]);var inst_26829 = (state_26886[10]);var inst_26834 = (state_26886[30]);var inst_26758 = (state_26886[13]);var inst_26834__$1 = cljs.core._nth.call(null,inst_26827,inst_26829);var inst_26835 = cljs.core.async.put_BANG_.call(null,inst_26834__$1,inst_26758,done);var state_26886__$1 = (function (){var statearr_26957 = state_26886;(statearr_26957[30] = inst_26834__$1);
return statearr_26957;
})();if(cljs.core.truth_(inst_26835))
{var statearr_26958_28662 = state_26886__$1;(statearr_26958_28662[1] = 30);
} else
{var statearr_26959_28663 = state_26886__$1;(statearr_26959_28663[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 28))
{var inst_26826 = (state_26886[7]);var inst_26845 = (state_26886[12]);var inst_26845__$1 = cljs.core.seq.call(null,inst_26826);var state_26886__$1 = (function (){var statearr_26960 = state_26886;(statearr_26960[12] = inst_26845__$1);
return statearr_26960;
})();if(inst_26845__$1)
{var statearr_26961_28664 = state_26886__$1;(statearr_26961_28664[1] = 33);
} else
{var statearr_26962_28665 = state_26886__$1;(statearr_26962_28665[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 29))
{var inst_26870 = (state_26886[2]);var state_26886__$1 = state_26886;var statearr_26963_28666 = state_26886__$1;(statearr_26963_28666[2] = inst_26870);
(statearr_26963_28666[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 30))
{var state_26886__$1 = state_26886;var statearr_26964_28667 = state_26886__$1;(statearr_26964_28667[2] = null);
(statearr_26964_28667[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26887 === 31))
{var inst_26834 = (state_26886[30]);var inst_26838 = done.call(null,null);var inst_26839 = cljs.core.async.untap_STAR_.call(null,m,inst_26834);var state_26886__$1 = (function (){var statearr_26965 = state_26886;(statearr_26965[31] = inst_26838);
return statearr_26965;
})();var statearr_26966_28668 = state_26886__$1;(statearr_26966_28668[2] = inst_26839);
(statearr_26966_28668[1] = 32);
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
});})(c__22567__auto___28614,cs,m,dchan,dctr,done))
;return ((function (switch__22491__auto__,c__22567__auto___28614,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26970[0] = state_machine__22492__auto__);
(statearr_26970[1] = 1);
return statearr_26970;
});
var state_machine__22492__auto____1 = (function (state_26886){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26886);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26971){if((e26971 instanceof Object))
{var ex__22495__auto__ = e26971;var statearr_26972_28669 = state_26886;(statearr_26972_28669[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28670 = state_26886;
state_26886 = G__28670;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26886){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28614,cs,m,dchan,dctr,done))
})();var state__22569__auto__ = (function (){var statearr_26973 = f__22568__auto__.call(null);(statearr_26973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28614);
return statearr_26973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28614,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26975 = {};return obj26975;
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
;var m = (function (){if(typeof cljs.core.async.t27095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27095 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27096){
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
this.meta27096 = meta27096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27095.cljs$lang$type = true;
cljs.core.async.t27095.cljs$lang$ctorStr = "cljs.core.async/t27095";
cljs.core.async.t27095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27097){var self__ = this;
var _27097__$1 = this;return self__.meta27096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27097,meta27096__$1){var self__ = this;
var _27097__$1 = this;return (new cljs.core.async.t27095(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27095(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27096){return (new cljs.core.async.t27095(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27095(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22567__auto___28671 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27167){var state_val_27168 = (state_27167[1]);if((state_val_27168 === 1))
{var inst_27101 = (state_27167[7]);var inst_27101__$1 = calc_state.call(null);var inst_27102 = cljs.core.seq_QMARK_.call(null,inst_27101__$1);var state_27167__$1 = (function (){var statearr_27169 = state_27167;(statearr_27169[7] = inst_27101__$1);
return statearr_27169;
})();if(inst_27102)
{var statearr_27170_28672 = state_27167__$1;(statearr_27170_28672[1] = 2);
} else
{var statearr_27171_28673 = state_27167__$1;(statearr_27171_28673[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 2))
{var inst_27101 = (state_27167[7]);var inst_27104 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27101);var state_27167__$1 = state_27167;var statearr_27172_28674 = state_27167__$1;(statearr_27172_28674[2] = inst_27104);
(statearr_27172_28674[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 3))
{var inst_27101 = (state_27167[7]);var state_27167__$1 = state_27167;var statearr_27173_28675 = state_27167__$1;(statearr_27173_28675[2] = inst_27101);
(statearr_27173_28675[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 4))
{var inst_27101 = (state_27167[7]);var inst_27107 = (state_27167[2]);var inst_27108 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27109 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27110 = cljs.core.get.call(null,inst_27107,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27111 = inst_27101;var state_27167__$1 = (function (){var statearr_27174 = state_27167;(statearr_27174[8] = inst_27111);
(statearr_27174[9] = inst_27110);
(statearr_27174[10] = inst_27109);
(statearr_27174[11] = inst_27108);
return statearr_27174;
})();var statearr_27175_28676 = state_27167__$1;(statearr_27175_28676[2] = null);
(statearr_27175_28676[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 5))
{var inst_27111 = (state_27167[8]);var inst_27114 = cljs.core.seq_QMARK_.call(null,inst_27111);var state_27167__$1 = state_27167;if(inst_27114)
{var statearr_27176_28677 = state_27167__$1;(statearr_27176_28677[1] = 7);
} else
{var statearr_27177_28678 = state_27167__$1;(statearr_27177_28678[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 6))
{var inst_27165 = (state_27167[2]);var state_27167__$1 = state_27167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27167__$1,inst_27165);
} else
{if((state_val_27168 === 7))
{var inst_27111 = (state_27167[8]);var inst_27116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27111);var state_27167__$1 = state_27167;var statearr_27178_28679 = state_27167__$1;(statearr_27178_28679[2] = inst_27116);
(statearr_27178_28679[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 8))
{var inst_27111 = (state_27167[8]);var state_27167__$1 = state_27167;var statearr_27179_28680 = state_27167__$1;(statearr_27179_28680[2] = inst_27111);
(statearr_27179_28680[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 9))
{var inst_27119 = (state_27167[12]);var inst_27119__$1 = (state_27167[2]);var inst_27120 = cljs.core.get.call(null,inst_27119__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27121 = cljs.core.get.call(null,inst_27119__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27122 = cljs.core.get.call(null,inst_27119__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27167__$1 = (function (){var statearr_27180 = state_27167;(statearr_27180[12] = inst_27119__$1);
(statearr_27180[13] = inst_27122);
(statearr_27180[14] = inst_27121);
return statearr_27180;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27167__$1,10,inst_27120);
} else
{if((state_val_27168 === 10))
{var inst_27127 = (state_27167[15]);var inst_27126 = (state_27167[16]);var inst_27125 = (state_27167[2]);var inst_27126__$1 = cljs.core.nth.call(null,inst_27125,0,null);var inst_27127__$1 = cljs.core.nth.call(null,inst_27125,1,null);var inst_27128 = (inst_27126__$1 == null);var inst_27129 = cljs.core._EQ_.call(null,inst_27127__$1,change);var inst_27130 = (inst_27128) || (inst_27129);var state_27167__$1 = (function (){var statearr_27181 = state_27167;(statearr_27181[15] = inst_27127__$1);
(statearr_27181[16] = inst_27126__$1);
return statearr_27181;
})();if(cljs.core.truth_(inst_27130))
{var statearr_27182_28681 = state_27167__$1;(statearr_27182_28681[1] = 11);
} else
{var statearr_27183_28682 = state_27167__$1;(statearr_27183_28682[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 11))
{var inst_27126 = (state_27167[16]);var inst_27132 = (inst_27126 == null);var state_27167__$1 = state_27167;if(cljs.core.truth_(inst_27132))
{var statearr_27184_28683 = state_27167__$1;(statearr_27184_28683[1] = 14);
} else
{var statearr_27185_28684 = state_27167__$1;(statearr_27185_28684[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 12))
{var inst_27127 = (state_27167[15]);var inst_27122 = (state_27167[13]);var inst_27141 = (state_27167[17]);var inst_27141__$1 = inst_27122.call(null,inst_27127);var state_27167__$1 = (function (){var statearr_27186 = state_27167;(statearr_27186[17] = inst_27141__$1);
return statearr_27186;
})();if(cljs.core.truth_(inst_27141__$1))
{var statearr_27187_28685 = state_27167__$1;(statearr_27187_28685[1] = 17);
} else
{var statearr_27188_28686 = state_27167__$1;(statearr_27188_28686[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 13))
{var inst_27163 = (state_27167[2]);var state_27167__$1 = state_27167;var statearr_27189_28687 = state_27167__$1;(statearr_27189_28687[2] = inst_27163);
(statearr_27189_28687[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 14))
{var inst_27127 = (state_27167[15]);var inst_27134 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27127);var state_27167__$1 = state_27167;var statearr_27190_28688 = state_27167__$1;(statearr_27190_28688[2] = inst_27134);
(statearr_27190_28688[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 15))
{var state_27167__$1 = state_27167;var statearr_27191_28689 = state_27167__$1;(statearr_27191_28689[2] = null);
(statearr_27191_28689[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 16))
{var inst_27137 = (state_27167[2]);var inst_27138 = calc_state.call(null);var inst_27111 = inst_27138;var state_27167__$1 = (function (){var statearr_27192 = state_27167;(statearr_27192[8] = inst_27111);
(statearr_27192[18] = inst_27137);
return statearr_27192;
})();var statearr_27193_28690 = state_27167__$1;(statearr_27193_28690[2] = null);
(statearr_27193_28690[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 17))
{var inst_27141 = (state_27167[17]);var state_27167__$1 = state_27167;var statearr_27194_28691 = state_27167__$1;(statearr_27194_28691[2] = inst_27141);
(statearr_27194_28691[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 18))
{var inst_27127 = (state_27167[15]);var inst_27122 = (state_27167[13]);var inst_27121 = (state_27167[14]);var inst_27144 = cljs.core.empty_QMARK_.call(null,inst_27122);var inst_27145 = inst_27121.call(null,inst_27127);var inst_27146 = cljs.core.not.call(null,inst_27145);var inst_27147 = (inst_27144) && (inst_27146);var state_27167__$1 = state_27167;var statearr_27195_28692 = state_27167__$1;(statearr_27195_28692[2] = inst_27147);
(statearr_27195_28692[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 19))
{var inst_27149 = (state_27167[2]);var state_27167__$1 = state_27167;if(cljs.core.truth_(inst_27149))
{var statearr_27196_28693 = state_27167__$1;(statearr_27196_28693[1] = 20);
} else
{var statearr_27197_28694 = state_27167__$1;(statearr_27197_28694[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 20))
{var inst_27126 = (state_27167[16]);var state_27167__$1 = state_27167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27167__$1,23,out,inst_27126);
} else
{if((state_val_27168 === 21))
{var inst_27119 = (state_27167[12]);var inst_27111 = inst_27119;var state_27167__$1 = (function (){var statearr_27198 = state_27167;(statearr_27198[8] = inst_27111);
return statearr_27198;
})();var statearr_27199_28695 = state_27167__$1;(statearr_27199_28695[2] = null);
(statearr_27199_28695[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 22))
{var inst_27161 = (state_27167[2]);var state_27167__$1 = state_27167;var statearr_27200_28696 = state_27167__$1;(statearr_27200_28696[2] = inst_27161);
(statearr_27200_28696[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 23))
{var inst_27152 = (state_27167[2]);var state_27167__$1 = state_27167;if(cljs.core.truth_(inst_27152))
{var statearr_27201_28697 = state_27167__$1;(statearr_27201_28697[1] = 24);
} else
{var statearr_27202_28698 = state_27167__$1;(statearr_27202_28698[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 24))
{var inst_27119 = (state_27167[12]);var inst_27111 = inst_27119;var state_27167__$1 = (function (){var statearr_27203 = state_27167;(statearr_27203[8] = inst_27111);
return statearr_27203;
})();var statearr_27204_28699 = state_27167__$1;(statearr_27204_28699[2] = null);
(statearr_27204_28699[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 25))
{var state_27167__$1 = state_27167;var statearr_27205_28700 = state_27167__$1;(statearr_27205_28700[2] = null);
(statearr_27205_28700[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27168 === 26))
{var inst_27157 = (state_27167[2]);var state_27167__$1 = state_27167;var statearr_27206_28701 = state_27167__$1;(statearr_27206_28701[2] = inst_27157);
(statearr_27206_28701[1] = 22);
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
});})(c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22491__auto__,c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27210[0] = state_machine__22492__auto__);
(statearr_27210[1] = 1);
return statearr_27210;
});
var state_machine__22492__auto____1 = (function (state_27167){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27167);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27211){if((e27211 instanceof Object))
{var ex__22495__auto__ = e27211;var statearr_27212_28702 = state_27167;(statearr_27212_28702[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27167);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27211;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28703 = state_27167;
state_27167 = G__28703;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22569__auto__ = (function (){var statearr_27213 = f__22568__auto__.call(null);(statearr_27213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28671);
return statearr_27213;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28671,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27215 = {};return obj27215;
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
return (function (p1__27216_SHARP_){if(cljs.core.truth_(p1__27216_SHARP_.call(null,topic)))
{return p1__27216_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27216_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27339 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27340){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27340 = meta27340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27339.cljs$lang$type = true;
cljs.core.async.t27339.cljs$lang$ctorStr = "cljs.core.async/t27339";
cljs.core.async.t27339.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27339");
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27339.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27341){var self__ = this;
var _27341__$1 = this;return self__.meta27340;
});})(mults,ensure_mult))
;
cljs.core.async.t27339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27341,meta27340__$1){var self__ = this;
var _27341__$1 = this;return (new cljs.core.async.t27339(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27340__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27339 = ((function (mults,ensure_mult){
return (function __GT_t27339(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27340){return (new cljs.core.async.t27339(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27340));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27339(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22567__auto___28704 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28704,mults,ensure_mult,p){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28704,mults,ensure_mult,p){
return (function (state_27413){var state_val_27414 = (state_27413[1]);if((state_val_27414 === 1))
{var state_27413__$1 = state_27413;var statearr_27415_28705 = state_27413__$1;(statearr_27415_28705[2] = null);
(statearr_27415_28705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 2))
{var state_27413__$1 = state_27413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27413__$1,4,ch);
} else
{if((state_val_27414 === 3))
{var inst_27411 = (state_27413[2]);var state_27413__$1 = state_27413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27413__$1,inst_27411);
} else
{if((state_val_27414 === 4))
{var inst_27344 = (state_27413[7]);var inst_27344__$1 = (state_27413[2]);var inst_27345 = (inst_27344__$1 == null);var state_27413__$1 = (function (){var statearr_27416 = state_27413;(statearr_27416[7] = inst_27344__$1);
return statearr_27416;
})();if(cljs.core.truth_(inst_27345))
{var statearr_27417_28706 = state_27413__$1;(statearr_27417_28706[1] = 5);
} else
{var statearr_27418_28707 = state_27413__$1;(statearr_27418_28707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 5))
{var inst_27351 = cljs.core.deref.call(null,mults);var inst_27352 = cljs.core.vals.call(null,inst_27351);var inst_27353 = cljs.core.seq.call(null,inst_27352);var inst_27354 = inst_27353;var inst_27355 = null;var inst_27356 = 0;var inst_27357 = 0;var state_27413__$1 = (function (){var statearr_27419 = state_27413;(statearr_27419[8] = inst_27356);
(statearr_27419[9] = inst_27357);
(statearr_27419[10] = inst_27354);
(statearr_27419[11] = inst_27355);
return statearr_27419;
})();var statearr_27420_28708 = state_27413__$1;(statearr_27420_28708[2] = null);
(statearr_27420_28708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 6))
{var inst_27394 = (state_27413[12]);var inst_27392 = (state_27413[13]);var inst_27344 = (state_27413[7]);var inst_27392__$1 = topic_fn.call(null,inst_27344);var inst_27393 = cljs.core.deref.call(null,mults);var inst_27394__$1 = cljs.core.get.call(null,inst_27393,inst_27392__$1);var state_27413__$1 = (function (){var statearr_27421 = state_27413;(statearr_27421[12] = inst_27394__$1);
(statearr_27421[13] = inst_27392__$1);
return statearr_27421;
})();if(cljs.core.truth_(inst_27394__$1))
{var statearr_27422_28709 = state_27413__$1;(statearr_27422_28709[1] = 19);
} else
{var statearr_27423_28710 = state_27413__$1;(statearr_27423_28710[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 7))
{var inst_27409 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27424_28711 = state_27413__$1;(statearr_27424_28711[2] = inst_27409);
(statearr_27424_28711[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 8))
{var inst_27356 = (state_27413[8]);var inst_27357 = (state_27413[9]);var inst_27359 = (inst_27357 < inst_27356);var inst_27360 = inst_27359;var state_27413__$1 = state_27413;if(cljs.core.truth_(inst_27360))
{var statearr_27428_28712 = state_27413__$1;(statearr_27428_28712[1] = 10);
} else
{var statearr_27429_28713 = state_27413__$1;(statearr_27429_28713[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 9))
{var inst_27390 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27430_28714 = state_27413__$1;(statearr_27430_28714[2] = inst_27390);
(statearr_27430_28714[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 10))
{var inst_27356 = (state_27413[8]);var inst_27357 = (state_27413[9]);var inst_27354 = (state_27413[10]);var inst_27355 = (state_27413[11]);var inst_27362 = cljs.core._nth.call(null,inst_27355,inst_27357);var inst_27363 = cljs.core.async.muxch_STAR_.call(null,inst_27362);var inst_27364 = cljs.core.async.close_BANG_.call(null,inst_27363);var inst_27365 = (inst_27357 + 1);var tmp27425 = inst_27356;var tmp27426 = inst_27354;var tmp27427 = inst_27355;var inst_27354__$1 = tmp27426;var inst_27355__$1 = tmp27427;var inst_27356__$1 = tmp27425;var inst_27357__$1 = inst_27365;var state_27413__$1 = (function (){var statearr_27431 = state_27413;(statearr_27431[8] = inst_27356__$1);
(statearr_27431[9] = inst_27357__$1);
(statearr_27431[10] = inst_27354__$1);
(statearr_27431[11] = inst_27355__$1);
(statearr_27431[14] = inst_27364);
return statearr_27431;
})();var statearr_27432_28715 = state_27413__$1;(statearr_27432_28715[2] = null);
(statearr_27432_28715[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 11))
{var inst_27354 = (state_27413[10]);var inst_27368 = (state_27413[15]);var inst_27368__$1 = cljs.core.seq.call(null,inst_27354);var state_27413__$1 = (function (){var statearr_27433 = state_27413;(statearr_27433[15] = inst_27368__$1);
return statearr_27433;
})();if(inst_27368__$1)
{var statearr_27434_28716 = state_27413__$1;(statearr_27434_28716[1] = 13);
} else
{var statearr_27435_28717 = state_27413__$1;(statearr_27435_28717[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 12))
{var inst_27388 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27436_28718 = state_27413__$1;(statearr_27436_28718[2] = inst_27388);
(statearr_27436_28718[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 13))
{var inst_27368 = (state_27413[15]);var inst_27370 = cljs.core.chunked_seq_QMARK_.call(null,inst_27368);var state_27413__$1 = state_27413;if(inst_27370)
{var statearr_27437_28719 = state_27413__$1;(statearr_27437_28719[1] = 16);
} else
{var statearr_27438_28720 = state_27413__$1;(statearr_27438_28720[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 14))
{var state_27413__$1 = state_27413;var statearr_27439_28721 = state_27413__$1;(statearr_27439_28721[2] = null);
(statearr_27439_28721[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 15))
{var inst_27386 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27440_28722 = state_27413__$1;(statearr_27440_28722[2] = inst_27386);
(statearr_27440_28722[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 16))
{var inst_27368 = (state_27413[15]);var inst_27372 = cljs.core.chunk_first.call(null,inst_27368);var inst_27373 = cljs.core.chunk_rest.call(null,inst_27368);var inst_27374 = cljs.core.count.call(null,inst_27372);var inst_27354 = inst_27373;var inst_27355 = inst_27372;var inst_27356 = inst_27374;var inst_27357 = 0;var state_27413__$1 = (function (){var statearr_27441 = state_27413;(statearr_27441[8] = inst_27356);
(statearr_27441[9] = inst_27357);
(statearr_27441[10] = inst_27354);
(statearr_27441[11] = inst_27355);
return statearr_27441;
})();var statearr_27442_28723 = state_27413__$1;(statearr_27442_28723[2] = null);
(statearr_27442_28723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 17))
{var inst_27368 = (state_27413[15]);var inst_27377 = cljs.core.first.call(null,inst_27368);var inst_27378 = cljs.core.async.muxch_STAR_.call(null,inst_27377);var inst_27379 = cljs.core.async.close_BANG_.call(null,inst_27378);var inst_27380 = cljs.core.next.call(null,inst_27368);var inst_27354 = inst_27380;var inst_27355 = null;var inst_27356 = 0;var inst_27357 = 0;var state_27413__$1 = (function (){var statearr_27443 = state_27413;(statearr_27443[8] = inst_27356);
(statearr_27443[9] = inst_27357);
(statearr_27443[10] = inst_27354);
(statearr_27443[11] = inst_27355);
(statearr_27443[16] = inst_27379);
return statearr_27443;
})();var statearr_27444_28724 = state_27413__$1;(statearr_27444_28724[2] = null);
(statearr_27444_28724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 18))
{var inst_27383 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27445_28725 = state_27413__$1;(statearr_27445_28725[2] = inst_27383);
(statearr_27445_28725[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 19))
{var inst_27394 = (state_27413[12]);var inst_27344 = (state_27413[7]);var inst_27396 = cljs.core.async.muxch_STAR_.call(null,inst_27394);var state_27413__$1 = state_27413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27413__$1,22,inst_27396,inst_27344);
} else
{if((state_val_27414 === 20))
{var state_27413__$1 = state_27413;var statearr_27446_28726 = state_27413__$1;(statearr_27446_28726[2] = null);
(statearr_27446_28726[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 21))
{var inst_27406 = (state_27413[2]);var state_27413__$1 = (function (){var statearr_27447 = state_27413;(statearr_27447[17] = inst_27406);
return statearr_27447;
})();var statearr_27448_28727 = state_27413__$1;(statearr_27448_28727[2] = null);
(statearr_27448_28727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 22))
{var inst_27398 = (state_27413[2]);var state_27413__$1 = state_27413;if(cljs.core.truth_(inst_27398))
{var statearr_27449_28728 = state_27413__$1;(statearr_27449_28728[1] = 23);
} else
{var statearr_27450_28729 = state_27413__$1;(statearr_27450_28729[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 23))
{var state_27413__$1 = state_27413;var statearr_27451_28730 = state_27413__$1;(statearr_27451_28730[2] = null);
(statearr_27451_28730[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 24))
{var inst_27392 = (state_27413[13]);var inst_27401 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27392);var state_27413__$1 = state_27413;var statearr_27452_28731 = state_27413__$1;(statearr_27452_28731[2] = inst_27401);
(statearr_27452_28731[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27414 === 25))
{var inst_27403 = (state_27413[2]);var state_27413__$1 = state_27413;var statearr_27453_28732 = state_27413__$1;(statearr_27453_28732[2] = inst_27403);
(statearr_27453_28732[1] = 21);
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
});})(c__22567__auto___28704,mults,ensure_mult,p))
;return ((function (switch__22491__auto__,c__22567__auto___28704,mults,ensure_mult,p){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27457[0] = state_machine__22492__auto__);
(statearr_27457[1] = 1);
return statearr_27457;
});
var state_machine__22492__auto____1 = (function (state_27413){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27413);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27458){if((e27458 instanceof Object))
{var ex__22495__auto__ = e27458;var statearr_27459_28733 = state_27413;(statearr_27459_28733[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28734 = state_27413;
state_27413 = G__28734;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27413){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28704,mults,ensure_mult,p))
})();var state__22569__auto__ = (function (){var statearr_27460 = f__22568__auto__.call(null);(statearr_27460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28704);
return statearr_27460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28704,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__22567__auto___28735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27567){var state_val_27568 = (state_27567[1]);if((state_val_27568 === 1))
{var state_27567__$1 = state_27567;var statearr_27569_28736 = state_27567__$1;(statearr_27569_28736[2] = null);
(statearr_27569_28736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 2))
{var inst_27530 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27531 = 0;var state_27567__$1 = (function (){var statearr_27570 = state_27567;(statearr_27570[7] = inst_27530);
(statearr_27570[8] = inst_27531);
return statearr_27570;
})();var statearr_27571_28737 = state_27567__$1;(statearr_27571_28737[2] = null);
(statearr_27571_28737[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 3))
{var inst_27565 = (state_27567[2]);var state_27567__$1 = state_27567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27567__$1,inst_27565);
} else
{if((state_val_27568 === 4))
{var inst_27531 = (state_27567[8]);var inst_27533 = (inst_27531 < cnt);var state_27567__$1 = state_27567;if(cljs.core.truth_(inst_27533))
{var statearr_27572_28738 = state_27567__$1;(statearr_27572_28738[1] = 6);
} else
{var statearr_27573_28739 = state_27567__$1;(statearr_27573_28739[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 5))
{var inst_27551 = (state_27567[2]);var state_27567__$1 = (function (){var statearr_27574 = state_27567;(statearr_27574[9] = inst_27551);
return statearr_27574;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27567__$1,12,dchan);
} else
{if((state_val_27568 === 6))
{var state_27567__$1 = state_27567;var statearr_27575_28740 = state_27567__$1;(statearr_27575_28740[2] = null);
(statearr_27575_28740[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 7))
{var state_27567__$1 = state_27567;var statearr_27576_28741 = state_27567__$1;(statearr_27576_28741[2] = null);
(statearr_27576_28741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 8))
{var inst_27549 = (state_27567[2]);var state_27567__$1 = state_27567;var statearr_27577_28742 = state_27567__$1;(statearr_27577_28742[2] = inst_27549);
(statearr_27577_28742[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 9))
{var inst_27531 = (state_27567[8]);var inst_27544 = (state_27567[2]);var inst_27545 = (inst_27531 + 1);var inst_27531__$1 = inst_27545;var state_27567__$1 = (function (){var statearr_27578 = state_27567;(statearr_27578[8] = inst_27531__$1);
(statearr_27578[10] = inst_27544);
return statearr_27578;
})();var statearr_27579_28743 = state_27567__$1;(statearr_27579_28743[2] = null);
(statearr_27579_28743[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 10))
{var inst_27535 = (state_27567[2]);var inst_27536 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27567__$1 = (function (){var statearr_27580 = state_27567;(statearr_27580[11] = inst_27535);
return statearr_27580;
})();var statearr_27581_28744 = state_27567__$1;(statearr_27581_28744[2] = inst_27536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 11))
{var inst_27531 = (state_27567[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27567,10,Object,null,9);var inst_27540 = chs__$1.call(null,inst_27531);var inst_27541 = done.call(null,inst_27531);var inst_27542 = cljs.core.async.take_BANG_.call(null,inst_27540,inst_27541);var state_27567__$1 = state_27567;var statearr_27582_28745 = state_27567__$1;(statearr_27582_28745[2] = inst_27542);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 12))
{var inst_27553 = (state_27567[12]);var inst_27553__$1 = (state_27567[2]);var inst_27554 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27553__$1);var state_27567__$1 = (function (){var statearr_27583 = state_27567;(statearr_27583[12] = inst_27553__$1);
return statearr_27583;
})();if(cljs.core.truth_(inst_27554))
{var statearr_27584_28746 = state_27567__$1;(statearr_27584_28746[1] = 13);
} else
{var statearr_27585_28747 = state_27567__$1;(statearr_27585_28747[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 13))
{var inst_27556 = cljs.core.async.close_BANG_.call(null,out);var state_27567__$1 = state_27567;var statearr_27586_28748 = state_27567__$1;(statearr_27586_28748[2] = inst_27556);
(statearr_27586_28748[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 14))
{var inst_27553 = (state_27567[12]);var inst_27558 = cljs.core.apply.call(null,f,inst_27553);var state_27567__$1 = state_27567;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27567__$1,16,out,inst_27558);
} else
{if((state_val_27568 === 15))
{var inst_27563 = (state_27567[2]);var state_27567__$1 = state_27567;var statearr_27587_28749 = state_27567__$1;(statearr_27587_28749[2] = inst_27563);
(statearr_27587_28749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27568 === 16))
{var inst_27560 = (state_27567[2]);var state_27567__$1 = (function (){var statearr_27588 = state_27567;(statearr_27588[13] = inst_27560);
return statearr_27588;
})();var statearr_27589_28750 = state_27567__$1;(statearr_27589_28750[2] = null);
(statearr_27589_28750[1] = 2);
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
});})(c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22491__auto__,c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27593[0] = state_machine__22492__auto__);
(statearr_27593[1] = 1);
return statearr_27593;
});
var state_machine__22492__auto____1 = (function (state_27567){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27567);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27594){if((e27594 instanceof Object))
{var ex__22495__auto__ = e27594;var statearr_27595_28751 = state_27567;(statearr_27595_28751[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28752 = state_27567;
state_27567 = G__28752;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27567){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22569__auto__ = (function (){var statearr_27596 = f__22568__auto__.call(null);(statearr_27596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28735);
return statearr_27596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28735,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28753 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28753,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28753,out){
return (function (state_27680){var state_val_27681 = (state_27680[1]);if((state_val_27681 === 1))
{var inst_27651 = cljs.core.vec.call(null,chs);var inst_27652 = inst_27651;var state_27680__$1 = (function (){var statearr_27682 = state_27680;(statearr_27682[7] = inst_27652);
return statearr_27682;
})();var statearr_27683_28754 = state_27680__$1;(statearr_27683_28754[2] = null);
(statearr_27683_28754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 2))
{var inst_27652 = (state_27680[7]);var inst_27654 = cljs.core.count.call(null,inst_27652);var inst_27655 = (inst_27654 > 0);var state_27680__$1 = state_27680;if(cljs.core.truth_(inst_27655))
{var statearr_27684_28755 = state_27680__$1;(statearr_27684_28755[1] = 4);
} else
{var statearr_27685_28756 = state_27680__$1;(statearr_27685_28756[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 3))
{var inst_27678 = (state_27680[2]);var state_27680__$1 = state_27680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27680__$1,inst_27678);
} else
{if((state_val_27681 === 4))
{var inst_27652 = (state_27680[7]);var state_27680__$1 = state_27680;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27680__$1,7,inst_27652);
} else
{if((state_val_27681 === 5))
{var inst_27674 = cljs.core.async.close_BANG_.call(null,out);var state_27680__$1 = state_27680;var statearr_27686_28757 = state_27680__$1;(statearr_27686_28757[2] = inst_27674);
(statearr_27686_28757[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 6))
{var inst_27676 = (state_27680[2]);var state_27680__$1 = state_27680;var statearr_27687_28758 = state_27680__$1;(statearr_27687_28758[2] = inst_27676);
(statearr_27687_28758[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 7))
{var inst_27659 = (state_27680[8]);var inst_27660 = (state_27680[9]);var inst_27659__$1 = (state_27680[2]);var inst_27660__$1 = cljs.core.nth.call(null,inst_27659__$1,0,null);var inst_27661 = cljs.core.nth.call(null,inst_27659__$1,1,null);var inst_27662 = (inst_27660__$1 == null);var state_27680__$1 = (function (){var statearr_27688 = state_27680;(statearr_27688[8] = inst_27659__$1);
(statearr_27688[10] = inst_27661);
(statearr_27688[9] = inst_27660__$1);
return statearr_27688;
})();if(cljs.core.truth_(inst_27662))
{var statearr_27689_28759 = state_27680__$1;(statearr_27689_28759[1] = 8);
} else
{var statearr_27690_28760 = state_27680__$1;(statearr_27690_28760[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 8))
{var inst_27652 = (state_27680[7]);var inst_27659 = (state_27680[8]);var inst_27661 = (state_27680[10]);var inst_27660 = (state_27680[9]);var inst_27664 = (function (){var c = inst_27661;var v = inst_27660;var vec__27657 = inst_27659;var cs = inst_27652;return ((function (c,v,vec__27657,cs,inst_27652,inst_27659,inst_27661,inst_27660,state_val_27681,c__22567__auto___28753,out){
return (function (p1__27597_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27597_SHARP_);
});
;})(c,v,vec__27657,cs,inst_27652,inst_27659,inst_27661,inst_27660,state_val_27681,c__22567__auto___28753,out))
})();var inst_27665 = cljs.core.filterv.call(null,inst_27664,inst_27652);var inst_27652__$1 = inst_27665;var state_27680__$1 = (function (){var statearr_27691 = state_27680;(statearr_27691[7] = inst_27652__$1);
return statearr_27691;
})();var statearr_27692_28761 = state_27680__$1;(statearr_27692_28761[2] = null);
(statearr_27692_28761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 9))
{var inst_27660 = (state_27680[9]);var state_27680__$1 = state_27680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27680__$1,11,out,inst_27660);
} else
{if((state_val_27681 === 10))
{var inst_27672 = (state_27680[2]);var state_27680__$1 = state_27680;var statearr_27694_28762 = state_27680__$1;(statearr_27694_28762[2] = inst_27672);
(statearr_27694_28762[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27681 === 11))
{var inst_27652 = (state_27680[7]);var inst_27669 = (state_27680[2]);var tmp27693 = inst_27652;var inst_27652__$1 = tmp27693;var state_27680__$1 = (function (){var statearr_27695 = state_27680;(statearr_27695[7] = inst_27652__$1);
(statearr_27695[11] = inst_27669);
return statearr_27695;
})();var statearr_27696_28763 = state_27680__$1;(statearr_27696_28763[2] = null);
(statearr_27696_28763[1] = 2);
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
});})(c__22567__auto___28753,out))
;return ((function (switch__22491__auto__,c__22567__auto___28753,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27700 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27700[0] = state_machine__22492__auto__);
(statearr_27700[1] = 1);
return statearr_27700;
});
var state_machine__22492__auto____1 = (function (state_27680){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27680);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27701){if((e27701 instanceof Object))
{var ex__22495__auto__ = e27701;var statearr_27702_28764 = state_27680;(statearr_27702_28764[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28765 = state_27680;
state_27680 = G__28765;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27680){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28753,out))
})();var state__22569__auto__ = (function (){var statearr_27703 = f__22568__auto__.call(null);(statearr_27703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28753);
return statearr_27703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28753,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28766,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28766,out){
return (function (state_27773){var state_val_27774 = (state_27773[1]);if((state_val_27774 === 1))
{var inst_27750 = 0;var state_27773__$1 = (function (){var statearr_27775 = state_27773;(statearr_27775[7] = inst_27750);
return statearr_27775;
})();var statearr_27776_28767 = state_27773__$1;(statearr_27776_28767[2] = null);
(statearr_27776_28767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 2))
{var inst_27750 = (state_27773[7]);var inst_27752 = (inst_27750 < n);var state_27773__$1 = state_27773;if(cljs.core.truth_(inst_27752))
{var statearr_27777_28768 = state_27773__$1;(statearr_27777_28768[1] = 4);
} else
{var statearr_27778_28769 = state_27773__$1;(statearr_27778_28769[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 3))
{var inst_27770 = (state_27773[2]);var inst_27771 = cljs.core.async.close_BANG_.call(null,out);var state_27773__$1 = (function (){var statearr_27779 = state_27773;(statearr_27779[8] = inst_27770);
return statearr_27779;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27773__$1,inst_27771);
} else
{if((state_val_27774 === 4))
{var state_27773__$1 = state_27773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27773__$1,7,ch);
} else
{if((state_val_27774 === 5))
{var state_27773__$1 = state_27773;var statearr_27780_28770 = state_27773__$1;(statearr_27780_28770[2] = null);
(statearr_27780_28770[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 6))
{var inst_27768 = (state_27773[2]);var state_27773__$1 = state_27773;var statearr_27781_28771 = state_27773__$1;(statearr_27781_28771[2] = inst_27768);
(statearr_27781_28771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 7))
{var inst_27755 = (state_27773[9]);var inst_27755__$1 = (state_27773[2]);var inst_27756 = (inst_27755__$1 == null);var inst_27757 = cljs.core.not.call(null,inst_27756);var state_27773__$1 = (function (){var statearr_27782 = state_27773;(statearr_27782[9] = inst_27755__$1);
return statearr_27782;
})();if(inst_27757)
{var statearr_27783_28772 = state_27773__$1;(statearr_27783_28772[1] = 8);
} else
{var statearr_27784_28773 = state_27773__$1;(statearr_27784_28773[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 8))
{var inst_27755 = (state_27773[9]);var state_27773__$1 = state_27773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27773__$1,11,out,inst_27755);
} else
{if((state_val_27774 === 9))
{var state_27773__$1 = state_27773;var statearr_27785_28774 = state_27773__$1;(statearr_27785_28774[2] = null);
(statearr_27785_28774[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 10))
{var inst_27765 = (state_27773[2]);var state_27773__$1 = state_27773;var statearr_27786_28775 = state_27773__$1;(statearr_27786_28775[2] = inst_27765);
(statearr_27786_28775[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27774 === 11))
{var inst_27750 = (state_27773[7]);var inst_27760 = (state_27773[2]);var inst_27761 = (inst_27750 + 1);var inst_27750__$1 = inst_27761;var state_27773__$1 = (function (){var statearr_27787 = state_27773;(statearr_27787[7] = inst_27750__$1);
(statearr_27787[10] = inst_27760);
return statearr_27787;
})();var statearr_27788_28776 = state_27773__$1;(statearr_27788_28776[2] = null);
(statearr_27788_28776[1] = 2);
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
});})(c__22567__auto___28766,out))
;return ((function (switch__22491__auto__,c__22567__auto___28766,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27792 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27792[0] = state_machine__22492__auto__);
(statearr_27792[1] = 1);
return statearr_27792;
});
var state_machine__22492__auto____1 = (function (state_27773){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27773);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object))
{var ex__22495__auto__ = e27793;var statearr_27794_28777 = state_27773;(statearr_27794_28777[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28778 = state_27773;
state_27773 = G__28778;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27773){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28766,out))
})();var state__22569__auto__ = (function (){var statearr_27795 = f__22568__auto__.call(null);(statearr_27795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28766);
return statearr_27795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28766,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27803 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27803 = (function (ch,f,map_LT_,meta27804){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27804 = meta27804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27803.cljs$lang$type = true;
cljs.core.async.t27803.cljs$lang$ctorStr = "cljs.core.async/t27803";
cljs.core.async.t27803.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27803");
});
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27806 = (function (fn1,_,meta27804,ch,f,map_LT_,meta27807){
this.fn1 = fn1;
this._ = _;
this.meta27804 = meta27804;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27807 = meta27807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27806.cljs$lang$type = true;
cljs.core.async.t27806.cljs$lang$ctorStr = "cljs.core.async/t27806";
cljs.core.async.t27806.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27806");
});})(___$1))
;
cljs.core.async.t27806.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27806.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27806.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27806.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27796_SHARP_){return f1.call(null,(((p1__27796_SHARP_ == null))?null:self__.f.call(null,p1__27796_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27808){var self__ = this;
var _27808__$1 = this;return self__.meta27807;
});})(___$1))
;
cljs.core.async.t27806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27808,meta27807__$1){var self__ = this;
var _27808__$1 = this;return (new cljs.core.async.t27806(self__.fn1,self__._,self__.meta27804,self__.ch,self__.f,self__.map_LT_,meta27807__$1));
});})(___$1))
;
cljs.core.async.__GT_t27806 = ((function (___$1){
return (function __GT_t27806(fn1__$1,___$2,meta27804__$1,ch__$2,f__$2,map_LT___$2,meta27807){return (new cljs.core.async.t27806(fn1__$1,___$2,meta27804__$1,ch__$2,f__$2,map_LT___$2,meta27807));
});})(___$1))
;
}
return (new cljs.core.async.t27806(fn1,___$1,self__.meta27804,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27805){var self__ = this;
var _27805__$1 = this;return self__.meta27804;
});
cljs.core.async.t27803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27805,meta27804__$1){var self__ = this;
var _27805__$1 = this;return (new cljs.core.async.t27803(self__.ch,self__.f,self__.map_LT_,meta27804__$1));
});
cljs.core.async.__GT_t27803 = (function __GT_t27803(ch__$1,f__$1,map_LT___$1,meta27804){return (new cljs.core.async.t27803(ch__$1,f__$1,map_LT___$1,meta27804));
});
}
return (new cljs.core.async.t27803(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27812 = (function (ch,f,map_GT_,meta27813){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27813 = meta27813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27812.cljs$lang$type = true;
cljs.core.async.t27812.cljs$lang$ctorStr = "cljs.core.async/t27812";
cljs.core.async.t27812.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27812");
});
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27814){var self__ = this;
var _27814__$1 = this;return self__.meta27813;
});
cljs.core.async.t27812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27814,meta27813__$1){var self__ = this;
var _27814__$1 = this;return (new cljs.core.async.t27812(self__.ch,self__.f,self__.map_GT_,meta27813__$1));
});
cljs.core.async.__GT_t27812 = (function __GT_t27812(ch__$1,f__$1,map_GT___$1,meta27813){return (new cljs.core.async.t27812(ch__$1,f__$1,map_GT___$1,meta27813));
});
}
return (new cljs.core.async.t27812(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27818 = (function (ch,p,filter_GT_,meta27819){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27819 = meta27819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27818.cljs$lang$type = true;
cljs.core.async.t27818.cljs$lang$ctorStr = "cljs.core.async/t27818";
cljs.core.async.t27818.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27818");
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27818.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27820){var self__ = this;
var _27820__$1 = this;return self__.meta27819;
});
cljs.core.async.t27818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27820,meta27819__$1){var self__ = this;
var _27820__$1 = this;return (new cljs.core.async.t27818(self__.ch,self__.p,self__.filter_GT_,meta27819__$1));
});
cljs.core.async.__GT_t27818 = (function __GT_t27818(ch__$1,p__$1,filter_GT___$1,meta27819){return (new cljs.core.async.t27818(ch__$1,p__$1,filter_GT___$1,meta27819));
});
}
return (new cljs.core.async.t27818(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28779 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28779,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28779,out){
return (function (state_27882){var state_val_27883 = (state_27882[1]);if((state_val_27883 === 1))
{var state_27882__$1 = state_27882;var statearr_27884_28780 = state_27882__$1;(statearr_27884_28780[2] = null);
(statearr_27884_28780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 2))
{var state_27882__$1 = state_27882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27882__$1,4,ch);
} else
{if((state_val_27883 === 3))
{var inst_27880 = (state_27882[2]);var state_27882__$1 = state_27882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27882__$1,inst_27880);
} else
{if((state_val_27883 === 4))
{var inst_27864 = (state_27882[7]);var inst_27864__$1 = (state_27882[2]);var inst_27865 = (inst_27864__$1 == null);var state_27882__$1 = (function (){var statearr_27885 = state_27882;(statearr_27885[7] = inst_27864__$1);
return statearr_27885;
})();if(cljs.core.truth_(inst_27865))
{var statearr_27886_28781 = state_27882__$1;(statearr_27886_28781[1] = 5);
} else
{var statearr_27887_28782 = state_27882__$1;(statearr_27887_28782[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 5))
{var inst_27867 = cljs.core.async.close_BANG_.call(null,out);var state_27882__$1 = state_27882;var statearr_27888_28783 = state_27882__$1;(statearr_27888_28783[2] = inst_27867);
(statearr_27888_28783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 6))
{var inst_27864 = (state_27882[7]);var inst_27869 = p.call(null,inst_27864);var state_27882__$1 = state_27882;if(cljs.core.truth_(inst_27869))
{var statearr_27889_28784 = state_27882__$1;(statearr_27889_28784[1] = 8);
} else
{var statearr_27890_28785 = state_27882__$1;(statearr_27890_28785[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 7))
{var inst_27878 = (state_27882[2]);var state_27882__$1 = state_27882;var statearr_27891_28786 = state_27882__$1;(statearr_27891_28786[2] = inst_27878);
(statearr_27891_28786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 8))
{var inst_27864 = (state_27882[7]);var state_27882__$1 = state_27882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27882__$1,11,out,inst_27864);
} else
{if((state_val_27883 === 9))
{var state_27882__$1 = state_27882;var statearr_27892_28787 = state_27882__$1;(statearr_27892_28787[2] = null);
(statearr_27892_28787[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 10))
{var inst_27875 = (state_27882[2]);var state_27882__$1 = (function (){var statearr_27893 = state_27882;(statearr_27893[8] = inst_27875);
return statearr_27893;
})();var statearr_27894_28788 = state_27882__$1;(statearr_27894_28788[2] = null);
(statearr_27894_28788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27883 === 11))
{var inst_27872 = (state_27882[2]);var state_27882__$1 = state_27882;var statearr_27895_28789 = state_27882__$1;(statearr_27895_28789[2] = inst_27872);
(statearr_27895_28789[1] = 10);
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
});})(c__22567__auto___28779,out))
;return ((function (switch__22491__auto__,c__22567__auto___28779,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27899 = [null,null,null,null,null,null,null,null,null];(statearr_27899[0] = state_machine__22492__auto__);
(statearr_27899[1] = 1);
return statearr_27899;
});
var state_machine__22492__auto____1 = (function (state_27882){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27882);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27900){if((e27900 instanceof Object))
{var ex__22495__auto__ = e27900;var statearr_27901_28790 = state_27882;(statearr_27901_28790[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28791 = state_27882;
state_27882 = G__28791;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27882){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28779,out))
})();var state__22569__auto__ = (function (){var statearr_27902 = f__22568__auto__.call(null);(statearr_27902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28779);
return statearr_27902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28779,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__){
return (function (state_28068){var state_val_28069 = (state_28068[1]);if((state_val_28069 === 1))
{var state_28068__$1 = state_28068;var statearr_28070_28792 = state_28068__$1;(statearr_28070_28792[2] = null);
(statearr_28070_28792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 2))
{var state_28068__$1 = state_28068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28068__$1,4,in$);
} else
{if((state_val_28069 === 3))
{var inst_28066 = (state_28068[2]);var state_28068__$1 = state_28068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28068__$1,inst_28066);
} else
{if((state_val_28069 === 4))
{var inst_28009 = (state_28068[7]);var inst_28009__$1 = (state_28068[2]);var inst_28010 = (inst_28009__$1 == null);var state_28068__$1 = (function (){var statearr_28071 = state_28068;(statearr_28071[7] = inst_28009__$1);
return statearr_28071;
})();if(cljs.core.truth_(inst_28010))
{var statearr_28072_28793 = state_28068__$1;(statearr_28072_28793[1] = 5);
} else
{var statearr_28073_28794 = state_28068__$1;(statearr_28073_28794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 5))
{var inst_28012 = cljs.core.async.close_BANG_.call(null,out);var state_28068__$1 = state_28068;var statearr_28074_28795 = state_28068__$1;(statearr_28074_28795[2] = inst_28012);
(statearr_28074_28795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 6))
{var inst_28009 = (state_28068[7]);var inst_28018 = f.call(null,inst_28009);var inst_28019 = cljs.core.seq.call(null,inst_28018);var inst_28020 = inst_28019;var inst_28021 = null;var inst_28022 = 0;var inst_28023 = 0;var state_28068__$1 = (function (){var statearr_28075 = state_28068;(statearr_28075[8] = inst_28020);
(statearr_28075[9] = inst_28022);
(statearr_28075[10] = inst_28021);
(statearr_28075[11] = inst_28023);
return statearr_28075;
})();var statearr_28076_28796 = state_28068__$1;(statearr_28076_28796[2] = null);
(statearr_28076_28796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 7))
{var inst_28064 = (state_28068[2]);var state_28068__$1 = state_28068;var statearr_28077_28797 = state_28068__$1;(statearr_28077_28797[2] = inst_28064);
(statearr_28077_28797[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 8))
{var inst_28022 = (state_28068[9]);var inst_28023 = (state_28068[11]);var inst_28025 = (inst_28023 < inst_28022);var inst_28026 = inst_28025;var state_28068__$1 = state_28068;if(cljs.core.truth_(inst_28026))
{var statearr_28078_28798 = state_28068__$1;(statearr_28078_28798[1] = 10);
} else
{var statearr_28079_28799 = state_28068__$1;(statearr_28079_28799[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 9))
{var inst_28056 = (state_28068[2]);var inst_28057 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28068__$1 = (function (){var statearr_28080 = state_28068;(statearr_28080[12] = inst_28056);
return statearr_28080;
})();if(cljs.core.truth_(inst_28057))
{var statearr_28081_28800 = state_28068__$1;(statearr_28081_28800[1] = 21);
} else
{var statearr_28082_28801 = state_28068__$1;(statearr_28082_28801[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 10))
{var inst_28021 = (state_28068[10]);var inst_28023 = (state_28068[11]);var inst_28028 = cljs.core._nth.call(null,inst_28021,inst_28023);var state_28068__$1 = state_28068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28068__$1,13,out,inst_28028);
} else
{if((state_val_28069 === 11))
{var inst_28020 = (state_28068[8]);var inst_28034 = (state_28068[13]);var inst_28034__$1 = cljs.core.seq.call(null,inst_28020);var state_28068__$1 = (function (){var statearr_28086 = state_28068;(statearr_28086[13] = inst_28034__$1);
return statearr_28086;
})();if(inst_28034__$1)
{var statearr_28087_28802 = state_28068__$1;(statearr_28087_28802[1] = 14);
} else
{var statearr_28088_28803 = state_28068__$1;(statearr_28088_28803[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 12))
{var inst_28054 = (state_28068[2]);var state_28068__$1 = state_28068;var statearr_28089_28804 = state_28068__$1;(statearr_28089_28804[2] = inst_28054);
(statearr_28089_28804[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 13))
{var inst_28020 = (state_28068[8]);var inst_28022 = (state_28068[9]);var inst_28021 = (state_28068[10]);var inst_28023 = (state_28068[11]);var inst_28030 = (state_28068[2]);var inst_28031 = (inst_28023 + 1);var tmp28083 = inst_28020;var tmp28084 = inst_28022;var tmp28085 = inst_28021;var inst_28020__$1 = tmp28083;var inst_28021__$1 = tmp28085;var inst_28022__$1 = tmp28084;var inst_28023__$1 = inst_28031;var state_28068__$1 = (function (){var statearr_28090 = state_28068;(statearr_28090[14] = inst_28030);
(statearr_28090[8] = inst_28020__$1);
(statearr_28090[9] = inst_28022__$1);
(statearr_28090[10] = inst_28021__$1);
(statearr_28090[11] = inst_28023__$1);
return statearr_28090;
})();var statearr_28091_28805 = state_28068__$1;(statearr_28091_28805[2] = null);
(statearr_28091_28805[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 14))
{var inst_28034 = (state_28068[13]);var inst_28036 = cljs.core.chunked_seq_QMARK_.call(null,inst_28034);var state_28068__$1 = state_28068;if(inst_28036)
{var statearr_28092_28806 = state_28068__$1;(statearr_28092_28806[1] = 17);
} else
{var statearr_28093_28807 = state_28068__$1;(statearr_28093_28807[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 15))
{var state_28068__$1 = state_28068;var statearr_28094_28808 = state_28068__$1;(statearr_28094_28808[2] = null);
(statearr_28094_28808[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 16))
{var inst_28052 = (state_28068[2]);var state_28068__$1 = state_28068;var statearr_28095_28809 = state_28068__$1;(statearr_28095_28809[2] = inst_28052);
(statearr_28095_28809[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 17))
{var inst_28034 = (state_28068[13]);var inst_28038 = cljs.core.chunk_first.call(null,inst_28034);var inst_28039 = cljs.core.chunk_rest.call(null,inst_28034);var inst_28040 = cljs.core.count.call(null,inst_28038);var inst_28020 = inst_28039;var inst_28021 = inst_28038;var inst_28022 = inst_28040;var inst_28023 = 0;var state_28068__$1 = (function (){var statearr_28096 = state_28068;(statearr_28096[8] = inst_28020);
(statearr_28096[9] = inst_28022);
(statearr_28096[10] = inst_28021);
(statearr_28096[11] = inst_28023);
return statearr_28096;
})();var statearr_28097_28810 = state_28068__$1;(statearr_28097_28810[2] = null);
(statearr_28097_28810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 18))
{var inst_28034 = (state_28068[13]);var inst_28043 = cljs.core.first.call(null,inst_28034);var state_28068__$1 = state_28068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28068__$1,20,out,inst_28043);
} else
{if((state_val_28069 === 19))
{var inst_28049 = (state_28068[2]);var state_28068__$1 = state_28068;var statearr_28098_28811 = state_28068__$1;(statearr_28098_28811[2] = inst_28049);
(statearr_28098_28811[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 20))
{var inst_28034 = (state_28068[13]);var inst_28045 = (state_28068[2]);var inst_28046 = cljs.core.next.call(null,inst_28034);var inst_28020 = inst_28046;var inst_28021 = null;var inst_28022 = 0;var inst_28023 = 0;var state_28068__$1 = (function (){var statearr_28099 = state_28068;(statearr_28099[15] = inst_28045);
(statearr_28099[8] = inst_28020);
(statearr_28099[9] = inst_28022);
(statearr_28099[10] = inst_28021);
(statearr_28099[11] = inst_28023);
return statearr_28099;
})();var statearr_28100_28812 = state_28068__$1;(statearr_28100_28812[2] = null);
(statearr_28100_28812[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 21))
{var state_28068__$1 = state_28068;var statearr_28101_28813 = state_28068__$1;(statearr_28101_28813[2] = null);
(statearr_28101_28813[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 22))
{var state_28068__$1 = state_28068;var statearr_28102_28814 = state_28068__$1;(statearr_28102_28814[2] = null);
(statearr_28102_28814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28069 === 23))
{var inst_28062 = (state_28068[2]);var state_28068__$1 = state_28068;var statearr_28103_28815 = state_28068__$1;(statearr_28103_28815[2] = inst_28062);
(statearr_28103_28815[1] = 7);
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
});})(c__22567__auto__))
;return ((function (switch__22491__auto__,c__22567__auto__){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28107[0] = state_machine__22492__auto__);
(statearr_28107[1] = 1);
return statearr_28107;
});
var state_machine__22492__auto____1 = (function (state_28068){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28068);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28108){if((e28108 instanceof Object))
{var ex__22495__auto__ = e28108;var statearr_28109_28816 = state_28068;(statearr_28109_28816[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28817 = state_28068;
state_28068 = G__28817;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28068){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_28110 = f__22568__auto__.call(null);(statearr_28110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_28110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__))
);
return c__22567__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28818 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28818,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28818,out){
return (function (state_28182){var state_val_28183 = (state_28182[1]);if((state_val_28183 === 1))
{var inst_28159 = null;var state_28182__$1 = (function (){var statearr_28184 = state_28182;(statearr_28184[7] = inst_28159);
return statearr_28184;
})();var statearr_28185_28819 = state_28182__$1;(statearr_28185_28819[2] = null);
(statearr_28185_28819[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 2))
{var state_28182__$1 = state_28182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28182__$1,4,ch);
} else
{if((state_val_28183 === 3))
{var inst_28179 = (state_28182[2]);var inst_28180 = cljs.core.async.close_BANG_.call(null,out);var state_28182__$1 = (function (){var statearr_28186 = state_28182;(statearr_28186[8] = inst_28179);
return statearr_28186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28182__$1,inst_28180);
} else
{if((state_val_28183 === 4))
{var inst_28162 = (state_28182[9]);var inst_28162__$1 = (state_28182[2]);var inst_28163 = (inst_28162__$1 == null);var inst_28164 = cljs.core.not.call(null,inst_28163);var state_28182__$1 = (function (){var statearr_28187 = state_28182;(statearr_28187[9] = inst_28162__$1);
return statearr_28187;
})();if(inst_28164)
{var statearr_28188_28820 = state_28182__$1;(statearr_28188_28820[1] = 5);
} else
{var statearr_28189_28821 = state_28182__$1;(statearr_28189_28821[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 5))
{var inst_28159 = (state_28182[7]);var inst_28162 = (state_28182[9]);var inst_28166 = cljs.core._EQ_.call(null,inst_28162,inst_28159);var state_28182__$1 = state_28182;if(inst_28166)
{var statearr_28190_28822 = state_28182__$1;(statearr_28190_28822[1] = 8);
} else
{var statearr_28191_28823 = state_28182__$1;(statearr_28191_28823[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 6))
{var state_28182__$1 = state_28182;var statearr_28193_28824 = state_28182__$1;(statearr_28193_28824[2] = null);
(statearr_28193_28824[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 7))
{var inst_28177 = (state_28182[2]);var state_28182__$1 = state_28182;var statearr_28194_28825 = state_28182__$1;(statearr_28194_28825[2] = inst_28177);
(statearr_28194_28825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 8))
{var inst_28159 = (state_28182[7]);var tmp28192 = inst_28159;var inst_28159__$1 = tmp28192;var state_28182__$1 = (function (){var statearr_28195 = state_28182;(statearr_28195[7] = inst_28159__$1);
return statearr_28195;
})();var statearr_28196_28826 = state_28182__$1;(statearr_28196_28826[2] = null);
(statearr_28196_28826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 9))
{var inst_28162 = (state_28182[9]);var state_28182__$1 = state_28182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28182__$1,11,out,inst_28162);
} else
{if((state_val_28183 === 10))
{var inst_28174 = (state_28182[2]);var state_28182__$1 = state_28182;var statearr_28197_28827 = state_28182__$1;(statearr_28197_28827[2] = inst_28174);
(statearr_28197_28827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28183 === 11))
{var inst_28162 = (state_28182[9]);var inst_28171 = (state_28182[2]);var inst_28159 = inst_28162;var state_28182__$1 = (function (){var statearr_28198 = state_28182;(statearr_28198[10] = inst_28171);
(statearr_28198[7] = inst_28159);
return statearr_28198;
})();var statearr_28199_28828 = state_28182__$1;(statearr_28199_28828[2] = null);
(statearr_28199_28828[1] = 2);
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
});})(c__22567__auto___28818,out))
;return ((function (switch__22491__auto__,c__22567__auto___28818,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28203 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28203[0] = state_machine__22492__auto__);
(statearr_28203[1] = 1);
return statearr_28203;
});
var state_machine__22492__auto____1 = (function (state_28182){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28182);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object))
{var ex__22495__auto__ = e28204;var statearr_28205_28829 = state_28182;(statearr_28205_28829[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28830 = state_28182;
state_28182 = G__28830;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28182){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28818,out))
})();var state__22569__auto__ = (function (){var statearr_28206 = f__22568__auto__.call(null);(statearr_28206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28818);
return statearr_28206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28818,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28831,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28831,out){
return (function (state_28311){var state_val_28312 = (state_28311[1]);if((state_val_28312 === 1))
{var inst_28274 = (new Array(n));var inst_28275 = inst_28274;var inst_28276 = 0;var state_28311__$1 = (function (){var statearr_28313 = state_28311;(statearr_28313[7] = inst_28275);
(statearr_28313[8] = inst_28276);
return statearr_28313;
})();var statearr_28314_28832 = state_28311__$1;(statearr_28314_28832[2] = null);
(statearr_28314_28832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 2))
{var state_28311__$1 = state_28311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28311__$1,4,ch);
} else
{if((state_val_28312 === 3))
{var inst_28309 = (state_28311[2]);var state_28311__$1 = state_28311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28311__$1,inst_28309);
} else
{if((state_val_28312 === 4))
{var inst_28279 = (state_28311[9]);var inst_28279__$1 = (state_28311[2]);var inst_28280 = (inst_28279__$1 == null);var inst_28281 = cljs.core.not.call(null,inst_28280);var state_28311__$1 = (function (){var statearr_28315 = state_28311;(statearr_28315[9] = inst_28279__$1);
return statearr_28315;
})();if(inst_28281)
{var statearr_28316_28833 = state_28311__$1;(statearr_28316_28833[1] = 5);
} else
{var statearr_28317_28834 = state_28311__$1;(statearr_28317_28834[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 5))
{var inst_28279 = (state_28311[9]);var inst_28284 = (state_28311[10]);var inst_28275 = (state_28311[7]);var inst_28276 = (state_28311[8]);var inst_28283 = (inst_28275[inst_28276] = inst_28279);var inst_28284__$1 = (inst_28276 + 1);var inst_28285 = (inst_28284__$1 < n);var state_28311__$1 = (function (){var statearr_28318 = state_28311;(statearr_28318[11] = inst_28283);
(statearr_28318[10] = inst_28284__$1);
return statearr_28318;
})();if(cljs.core.truth_(inst_28285))
{var statearr_28319_28835 = state_28311__$1;(statearr_28319_28835[1] = 8);
} else
{var statearr_28320_28836 = state_28311__$1;(statearr_28320_28836[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 6))
{var inst_28276 = (state_28311[8]);var inst_28297 = (inst_28276 > 0);var state_28311__$1 = state_28311;if(cljs.core.truth_(inst_28297))
{var statearr_28322_28837 = state_28311__$1;(statearr_28322_28837[1] = 12);
} else
{var statearr_28323_28838 = state_28311__$1;(statearr_28323_28838[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 7))
{var inst_28307 = (state_28311[2]);var state_28311__$1 = state_28311;var statearr_28324_28839 = state_28311__$1;(statearr_28324_28839[2] = inst_28307);
(statearr_28324_28839[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 8))
{var inst_28284 = (state_28311[10]);var inst_28275 = (state_28311[7]);var tmp28321 = inst_28275;var inst_28275__$1 = tmp28321;var inst_28276 = inst_28284;var state_28311__$1 = (function (){var statearr_28325 = state_28311;(statearr_28325[7] = inst_28275__$1);
(statearr_28325[8] = inst_28276);
return statearr_28325;
})();var statearr_28326_28840 = state_28311__$1;(statearr_28326_28840[2] = null);
(statearr_28326_28840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 9))
{var inst_28275 = (state_28311[7]);var inst_28289 = cljs.core.vec.call(null,inst_28275);var state_28311__$1 = state_28311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28311__$1,11,out,inst_28289);
} else
{if((state_val_28312 === 10))
{var inst_28295 = (state_28311[2]);var state_28311__$1 = state_28311;var statearr_28327_28841 = state_28311__$1;(statearr_28327_28841[2] = inst_28295);
(statearr_28327_28841[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 11))
{var inst_28291 = (state_28311[2]);var inst_28292 = (new Array(n));var inst_28275 = inst_28292;var inst_28276 = 0;var state_28311__$1 = (function (){var statearr_28328 = state_28311;(statearr_28328[12] = inst_28291);
(statearr_28328[7] = inst_28275);
(statearr_28328[8] = inst_28276);
return statearr_28328;
})();var statearr_28329_28842 = state_28311__$1;(statearr_28329_28842[2] = null);
(statearr_28329_28842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 12))
{var inst_28275 = (state_28311[7]);var inst_28299 = cljs.core.vec.call(null,inst_28275);var state_28311__$1 = state_28311;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28311__$1,15,out,inst_28299);
} else
{if((state_val_28312 === 13))
{var state_28311__$1 = state_28311;var statearr_28330_28843 = state_28311__$1;(statearr_28330_28843[2] = null);
(statearr_28330_28843[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 14))
{var inst_28304 = (state_28311[2]);var inst_28305 = cljs.core.async.close_BANG_.call(null,out);var state_28311__$1 = (function (){var statearr_28331 = state_28311;(statearr_28331[13] = inst_28304);
return statearr_28331;
})();var statearr_28332_28844 = state_28311__$1;(statearr_28332_28844[2] = inst_28305);
(statearr_28332_28844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28312 === 15))
{var inst_28301 = (state_28311[2]);var state_28311__$1 = state_28311;var statearr_28333_28845 = state_28311__$1;(statearr_28333_28845[2] = inst_28301);
(statearr_28333_28845[1] = 14);
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
});})(c__22567__auto___28831,out))
;return ((function (switch__22491__auto__,c__22567__auto___28831,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28337[0] = state_machine__22492__auto__);
(statearr_28337[1] = 1);
return statearr_28337;
});
var state_machine__22492__auto____1 = (function (state_28311){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28311);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28338){if((e28338 instanceof Object))
{var ex__22495__auto__ = e28338;var statearr_28339_28846 = state_28311;(statearr_28339_28846[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28847 = state_28311;
state_28311 = G__28847;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28311){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28831,out))
})();var state__22569__auto__ = (function (){var statearr_28340 = f__22568__auto__.call(null);(statearr_28340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28831);
return statearr_28340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28831,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___28848 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28848,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28848,out){
return (function (state_28453){var state_val_28454 = (state_28453[1]);if((state_val_28454 === 1))
{var inst_28412 = [];var inst_28413 = inst_28412;var inst_28414 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28453__$1 = (function (){var statearr_28455 = state_28453;(statearr_28455[7] = inst_28414);
(statearr_28455[8] = inst_28413);
return statearr_28455;
})();var statearr_28456_28849 = state_28453__$1;(statearr_28456_28849[2] = null);
(statearr_28456_28849[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 2))
{var state_28453__$1 = state_28453;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28453__$1,4,ch);
} else
{if((state_val_28454 === 3))
{var inst_28451 = (state_28453[2]);var state_28453__$1 = state_28453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28453__$1,inst_28451);
} else
{if((state_val_28454 === 4))
{var inst_28417 = (state_28453[9]);var inst_28417__$1 = (state_28453[2]);var inst_28418 = (inst_28417__$1 == null);var inst_28419 = cljs.core.not.call(null,inst_28418);var state_28453__$1 = (function (){var statearr_28457 = state_28453;(statearr_28457[9] = inst_28417__$1);
return statearr_28457;
})();if(inst_28419)
{var statearr_28458_28850 = state_28453__$1;(statearr_28458_28850[1] = 5);
} else
{var statearr_28459_28851 = state_28453__$1;(statearr_28459_28851[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 5))
{var inst_28417 = (state_28453[9]);var inst_28414 = (state_28453[7]);var inst_28421 = (state_28453[10]);var inst_28421__$1 = f.call(null,inst_28417);var inst_28422 = cljs.core._EQ_.call(null,inst_28421__$1,inst_28414);var inst_28423 = cljs.core.keyword_identical_QMARK_.call(null,inst_28414,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28424 = (inst_28422) || (inst_28423);var state_28453__$1 = (function (){var statearr_28460 = state_28453;(statearr_28460[10] = inst_28421__$1);
return statearr_28460;
})();if(cljs.core.truth_(inst_28424))
{var statearr_28461_28852 = state_28453__$1;(statearr_28461_28852[1] = 8);
} else
{var statearr_28462_28853 = state_28453__$1;(statearr_28462_28853[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 6))
{var inst_28413 = (state_28453[8]);var inst_28438 = inst_28413.length;var inst_28439 = (inst_28438 > 0);var state_28453__$1 = state_28453;if(cljs.core.truth_(inst_28439))
{var statearr_28464_28854 = state_28453__$1;(statearr_28464_28854[1] = 12);
} else
{var statearr_28465_28855 = state_28453__$1;(statearr_28465_28855[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 7))
{var inst_28449 = (state_28453[2]);var state_28453__$1 = state_28453;var statearr_28466_28856 = state_28453__$1;(statearr_28466_28856[2] = inst_28449);
(statearr_28466_28856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 8))
{var inst_28417 = (state_28453[9]);var inst_28413 = (state_28453[8]);var inst_28421 = (state_28453[10]);var inst_28426 = inst_28413.push(inst_28417);var tmp28463 = inst_28413;var inst_28413__$1 = tmp28463;var inst_28414 = inst_28421;var state_28453__$1 = (function (){var statearr_28467 = state_28453;(statearr_28467[7] = inst_28414);
(statearr_28467[8] = inst_28413__$1);
(statearr_28467[11] = inst_28426);
return statearr_28467;
})();var statearr_28468_28857 = state_28453__$1;(statearr_28468_28857[2] = null);
(statearr_28468_28857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 9))
{var inst_28413 = (state_28453[8]);var inst_28429 = cljs.core.vec.call(null,inst_28413);var state_28453__$1 = state_28453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28453__$1,11,out,inst_28429);
} else
{if((state_val_28454 === 10))
{var inst_28436 = (state_28453[2]);var state_28453__$1 = state_28453;var statearr_28469_28858 = state_28453__$1;(statearr_28469_28858[2] = inst_28436);
(statearr_28469_28858[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 11))
{var inst_28417 = (state_28453[9]);var inst_28421 = (state_28453[10]);var inst_28431 = (state_28453[2]);var inst_28432 = [];var inst_28433 = inst_28432.push(inst_28417);var inst_28413 = inst_28432;var inst_28414 = inst_28421;var state_28453__$1 = (function (){var statearr_28470 = state_28453;(statearr_28470[7] = inst_28414);
(statearr_28470[8] = inst_28413);
(statearr_28470[12] = inst_28433);
(statearr_28470[13] = inst_28431);
return statearr_28470;
})();var statearr_28471_28859 = state_28453__$1;(statearr_28471_28859[2] = null);
(statearr_28471_28859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 12))
{var inst_28413 = (state_28453[8]);var inst_28441 = cljs.core.vec.call(null,inst_28413);var state_28453__$1 = state_28453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28453__$1,15,out,inst_28441);
} else
{if((state_val_28454 === 13))
{var state_28453__$1 = state_28453;var statearr_28472_28860 = state_28453__$1;(statearr_28472_28860[2] = null);
(statearr_28472_28860[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 14))
{var inst_28446 = (state_28453[2]);var inst_28447 = cljs.core.async.close_BANG_.call(null,out);var state_28453__$1 = (function (){var statearr_28473 = state_28453;(statearr_28473[14] = inst_28446);
return statearr_28473;
})();var statearr_28474_28861 = state_28453__$1;(statearr_28474_28861[2] = inst_28447);
(statearr_28474_28861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28454 === 15))
{var inst_28443 = (state_28453[2]);var state_28453__$1 = state_28453;var statearr_28475_28862 = state_28453__$1;(statearr_28475_28862[2] = inst_28443);
(statearr_28475_28862[1] = 14);
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
});})(c__22567__auto___28848,out))
;return ((function (switch__22491__auto__,c__22567__auto___28848,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28479[0] = state_machine__22492__auto__);
(statearr_28479[1] = 1);
return statearr_28479;
});
var state_machine__22492__auto____1 = (function (state_28453){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28453);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28480){if((e28480 instanceof Object))
{var ex__22495__auto__ = e28480;var statearr_28481_28863 = state_28453;(statearr_28481_28863[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28453);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28864 = state_28453;
state_28453 = G__28864;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28453){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28848,out))
})();var state__22569__auto__ = (function (){var statearr_28482 = f__22568__auto__.call(null);(statearr_28482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28848);
return statearr_28482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28848,out))
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","example-word-linter","lt.plugins.example-linter/example-word-linter",3076569534),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255)], null),new cljs.core.Keyword(null,"linter-name","linter-name",2860858810),"Example word linter",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,ed,words){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"words","words",1127222811),words], null));
}));
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
lt.plugins.example_linter.__BEH__lint_words_in_editor = (function __BEH__lint_words_in_editor(obj,editor_text,callback,_){return callback.call(null,lt.plugins.example_linter.lint_words.call(null,editor_text,new cljs.core.Keyword(null,"words","words",1127222811).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.example-linter","lint-words-in-editor","lt.plugins.example-linter/lint-words-in-editor",3990699255),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.example_linter.__BEH__lint_words_in_editor,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.example_linter');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.doc');
goog.require('lt.plugins.doc');
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","linters","lt.plugins.lt-lint/linters",4588091878),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linters","linters",1191258613)], null),new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.lt-lint","lint-handler","lt.plugins.lt-lint/lint-handler",4141791963)], null));
lt.plugins.lt_lint.default_timeout = 5000;
lt.plugins.lt_lint.verify_linter_result = (function verify_linter_result(obj,res){if((res == null))
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
lt.plugins.lt_lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__29563){var map__29565 = p__29563;var map__29565__$1 = ((cljs.core.seq_QMARK_.call(null,map__29565))?cljs.core.apply.call(null,cljs.core.hash_map,map__29565):map__29565);var msg = map__29565__$1;var to = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__29565__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
});
lt.plugins.lt_lint.is_lint_mark_QMARK_ = (function is_lint_mark_QMARK_(tm){return cljs.core.re_find.call(null,/^CodeMirror-lint-mark-/,tm.className);
});
lt.plugins.lt_lint.lint_messages_for_cursor = (function lint_messages_for_cursor(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));return cljs.core.seq.call(null,cljs.core.filter.call(null,lt.plugins.lt_lint.is_lint_mark_QMARK_,text_marks));
});
lt.plugins.lt_lint.lint_messages_for_ed = (function lint_messages_for_ed(ed){var text_marks = lt.objs.editor.__GT_cm_ed.call(null,ed).getAllMarks();return cljs.core.seq.call(null,cljs.core.filter.call(null,lt.plugins.lt_lint.is_lint_mark_QMARK_,text_marks));
});
lt.plugins.lt_lint.lint_messages_for_cursor = (function lint_messages_for_cursor(ed){var text_marks = lt.objs.editor.find_marks.call(null,ed,lt.objs.editor.__GT_cursor.call(null,ed));return cljs.core.seq.call(null,cljs.core.filter.call(null,lt.plugins.lt_lint.is_lint_mark_QMARK_,text_marks));
});
lt.plugins.lt_lint.text_mark__GT_lint_result = (function text_mark__GT_lint_result(text_mark){return cljs.core.js__GT_clj.call(null,text_mark.__annotation,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
lt.plugins.lt_lint.on_cursor_activity = (function on_cursor_activity(ed){var temp__4090__auto__ = lt.plugins.lt_lint.lint_messages_for_cursor.call(null,ed);if(temp__4090__auto__)
{var lint_marks = temp__4090__auto__;if((1 < cljs.core.count.call(null,lint_marks)))
{return lt.objs.notifos.set_msg_BANG_.call(null,"Multiple lint messages found.");
} else
{var annotation = lt.plugins.lt_lint.text_mark__GT_lint_result.call(null,cljs.core.first.call(null,lint_marks));return lt.objs.notifos.set_msg_BANG_.call(null,new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(annotation),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"severity","severity",2492204655).cljs$core$IFn$_invoke$arity$1(annotation)], null));
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
lt.plugins.lt_lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (ed,linter_objs){new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
return (function (editor_text,callback,options){lt.objs.editor.off.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.plugins.lt_lint.on_cursor_activity,ed));
lt.objs.editor.on.call(null,ed,new cljs.core.Keyword(null,"cursorActivity","cursorActivity",2053482487),cljs.core.partial.call(null,lt.plugins.lt_lint.on_cursor_activity,ed));
var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.plugins.lt_lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__,ch){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__,ch){
return (function (state_29657){var state_val_29658 = (state_29657[1]);if((state_val_29658 === 2))
{var inst_29655 = (state_29657[2]);var state_29657__$1 = state_29657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29657__$1,inst_29655);
} else
{if((state_val_29658 === 1))
{var inst_29652 = (function (){return ((function (state_val_29658,c__22567__auto__,ch){
return (function (p1__29566_SHARP_){return cljs.core.assoc.call(null,p1__29566_SHARP_,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701),obj);
});
;})(state_val_29658,c__22567__auto__,ch))
})();var inst_29653 = cljs.core.map.call(null,inst_29652,results);var state_29657__$1 = state_29657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29657__$1,2,ch,inst_29653);
} else
{return null;
}
}
});})(c__22567__auto__,ch))
;return ((function (switch__22491__auto__,c__22567__auto__,ch){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_29662 = [null,null,null,null,null,null,null];(statearr_29662[0] = state_machine__22492__auto__);
(statearr_29662[1] = 1);
return statearr_29662;
});
var state_machine__22492__auto____1 = (function (state_29657){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_29657);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e29663){if((e29663 instanceof Object))
{var ex__22495__auto__ = e29663;var statearr_29664_29754 = state_29657;(statearr_29664_29754[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29755 = state_29657;
state_29657 = G__29755;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_29657){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_29657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,ch))
})();var state__22569__auto__ = (function (){var statearr_29665 = f__22568__auto__.call(null);(statearr_29665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_29665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__,ch))
);
return c__22567__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__29666_29756 = cljs.core.seq.call(null,validate_chans);var chunk__29667_29757 = null;var count__29668_29758 = 0;var i__29669_29759 = 0;while(true){
if((i__29669_29759 < count__29668_29758))
{var vec__29670_29760 = cljs.core._nth.call(null,chunk__29667_29757,i__29669_29759);var __29761 = cljs.core.nth.call(null,vec__29670_29760,0,null);var f_29762 = cljs.core.nth.call(null,vec__29670_29760,1,null);var obj_29763 = cljs.core.nth.call(null,vec__29670_29760,2,null);lt.object.raise.call(null,obj_29763,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29762,ed);
{
var G__29764 = seq__29666_29756;
var G__29765 = chunk__29667_29757;
var G__29766 = count__29668_29758;
var G__29767 = (i__29669_29759 + 1);
seq__29666_29756 = G__29764;
chunk__29667_29757 = G__29765;
count__29668_29758 = G__29766;
i__29669_29759 = G__29767;
continue;
}
} else
{var temp__4092__auto___29768 = cljs.core.seq.call(null,seq__29666_29756);if(temp__4092__auto___29768)
{var seq__29666_29769__$1 = temp__4092__auto___29768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29666_29769__$1))
{var c__20551__auto___29770 = cljs.core.chunk_first.call(null,seq__29666_29769__$1);{
var G__29771 = cljs.core.chunk_rest.call(null,seq__29666_29769__$1);
var G__29772 = c__20551__auto___29770;
var G__29773 = cljs.core.count.call(null,c__20551__auto___29770);
var G__29774 = 0;
seq__29666_29756 = G__29771;
chunk__29667_29757 = G__29772;
count__29668_29758 = G__29773;
i__29669_29759 = G__29774;
continue;
}
} else
{var vec__29671_29775 = cljs.core.first.call(null,seq__29666_29769__$1);var __29776 = cljs.core.nth.call(null,vec__29671_29775,0,null);var f_29777 = cljs.core.nth.call(null,vec__29671_29775,1,null);var obj_29778 = cljs.core.nth.call(null,vec__29671_29775,2,null);lt.object.raise.call(null,obj_29778,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29777,ed);
{
var G__29779 = cljs.core.next.call(null,seq__29666_29769__$1);
var G__29780 = null;
var G__29781 = 0;
var G__29782 = 0;
seq__29666_29756 = G__29779;
chunk__29667_29757 = G__29780;
count__29668_29758 = G__29781;
i__29669_29759 = G__29782;
continue;
}
}
} else
{}
}
break;
}
var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__,validate_chans){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__,validate_chans){
return (function (state_29713){var state_val_29714 = (state_29713[1]);if((state_val_29714 === 1))
{var inst_29677 = cljs.core.nth.call(null,validate_chans,0,null);var inst_29678 = cljs.core.nth.call(null,inst_29677,0,null);var inst_29679 = cljs.core.nth.call(null,inst_29677,1,null);var inst_29680 = cljs.core.nth.call(null,inst_29677,2,null);var inst_29681 = cljs.core.nthnext.call(null,validate_chans,1);var inst_29682 = validate_chans;var inst_29683 = cljs.core.PersistentVector.EMPTY;var state_29713__$1 = (function (){var statearr_29715 = state_29713;(statearr_29715[7] = inst_29680);
(statearr_29715[8] = inst_29681);
(statearr_29715[9] = inst_29678);
(statearr_29715[10] = inst_29683);
(statearr_29715[11] = inst_29682);
(statearr_29715[12] = inst_29679);
return statearr_29715;
})();var statearr_29716_29783 = state_29713__$1;(statearr_29716_29783[2] = null);
(statearr_29716_29783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 2))
{var inst_29682 = (state_29713[11]);var inst_29687 = cljs.core.nth.call(null,inst_29682,0,null);var inst_29688 = cljs.core.nth.call(null,inst_29687,0,null);var inst_29689 = cljs.core.nth.call(null,inst_29687,1,null);var inst_29690 = cljs.core.nth.call(null,inst_29687,2,null);var inst_29691 = cljs.core.nthnext.call(null,inst_29682,1);var state_29713__$1 = (function (){var statearr_29717 = state_29713;(statearr_29717[13] = inst_29689);
(statearr_29717[14] = inst_29690);
(statearr_29717[15] = inst_29691);
return statearr_29717;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29713__$1,4,inst_29688);
} else
{if((state_val_29714 === 3))
{var inst_29711 = (state_29713[2]);var state_29713__$1 = state_29713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29713__$1,inst_29711);
} else
{if((state_val_29714 === 4))
{var inst_29694 = (state_29713[16]);var inst_29690 = (state_29713[14]);var inst_29693 = (state_29713[2]);var inst_29694__$1 = lt.plugins.lt_lint.verify_linter_result.call(null,inst_29690,inst_29693);var state_29713__$1 = (function (){var statearr_29718 = state_29713;(statearr_29718[16] = inst_29694__$1);
return statearr_29718;
})();if(cljs.core.truth_(inst_29694__$1))
{var statearr_29719_29784 = state_29713__$1;(statearr_29719_29784[1] = 5);
} else
{var statearr_29720_29785 = state_29713__$1;(statearr_29720_29785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 5))
{var inst_29694 = (state_29713[16]);var inst_29683 = (state_29713[10]);var inst_29696 = cljs.core.conj.call(null,inst_29683,inst_29694);var state_29713__$1 = state_29713;var statearr_29721_29786 = state_29713__$1;(statearr_29721_29786[2] = inst_29696);
(statearr_29721_29786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 6))
{var inst_29683 = (state_29713[10]);var state_29713__$1 = state_29713;var statearr_29722_29787 = state_29713__$1;(statearr_29722_29787[2] = inst_29683);
(statearr_29722_29787[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 7))
{var inst_29691 = (state_29713[15]);var inst_29699 = (state_29713[2]);var inst_29700 = cljs.core.seq.call(null,inst_29691);var state_29713__$1 = (function (){var statearr_29723 = state_29713;(statearr_29723[17] = inst_29699);
return statearr_29723;
})();if(inst_29700)
{var statearr_29724_29788 = state_29713__$1;(statearr_29724_29788[1] = 8);
} else
{var statearr_29725_29789 = state_29713__$1;(statearr_29725_29789[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 8))
{var inst_29699 = (state_29713[17]);var inst_29691 = (state_29713[15]);var inst_29682 = inst_29691;var inst_29683 = inst_29699;var state_29713__$1 = (function (){var statearr_29726 = state_29713;(statearr_29726[10] = inst_29683);
(statearr_29726[11] = inst_29682);
return statearr_29726;
})();var statearr_29727_29790 = state_29713__$1;(statearr_29727_29790[2] = null);
(statearr_29727_29790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 9))
{var inst_29699 = (state_29713[17]);var inst_29704 = cljs.core.apply.call(null,cljs.core.concat,inst_29699);var inst_29705 = cljs.core.map.call(null,lt.plugins.lt_lint.__GT_cm_lint_msg,inst_29704);var inst_29706 = cljs.core.clj__GT_js.call(null,inst_29705);var inst_29707 = callback.call(null,inst_29706);var state_29713__$1 = state_29713;var statearr_29728_29791 = state_29713__$1;(statearr_29728_29791[2] = inst_29707);
(statearr_29728_29791[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29714 === 10))
{var inst_29709 = (state_29713[2]);var state_29713__$1 = state_29713;var statearr_29729_29792 = state_29713__$1;(statearr_29729_29792[2] = inst_29709);
(statearr_29729_29792[1] = 3);
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
});})(c__22567__auto__,validate_chans))
;return ((function (switch__22491__auto__,c__22567__auto__,validate_chans){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_29733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29733[0] = state_machine__22492__auto__);
(statearr_29733[1] = 1);
return statearr_29733;
});
var state_machine__22492__auto____1 = (function (state_29713){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_29713);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e29734){if((e29734 instanceof Object))
{var ex__22495__auto__ = e29734;var statearr_29735_29793 = state_29713;(statearr_29735_29793[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29794 = state_29713;
state_29713 = G__29794;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_29713){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_29713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,validate_chans))
})();var state__22569__auto__ = (function (){var statearr_29736 = f__22568__auto__.call(null);(statearr_29736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_29736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__,validate_chans))
);
return c__22567__auto__;
});
};
var validate_with_all_linters = function (ed,var_args){
var linter_objs = null;if (arguments.length > 1) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return validate_with_all_linters__delegate.call(this,ed,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 1;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__29795){
var ed = cljs.core.first(arglist__29795);
var linter_objs = cljs.core.rest(arglist__29795);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.plugins.lt_lint.add_linter = (function add_linter(linters,linter_obj,ed,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,ed,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__29737_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29737_SHARP_)),linter_obj);
});})(obj))
,linters),obj);
});
lt.plugins.lt_lint.start_lint_BANG_ = (function start_lint_BANG_(linters,ed,editor_text,callback,options){cljs.core.keys.call(null,cljs.core.deref.call(null,linters));
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));return cljs.core.apply.call(null,lt.plugins.lt_lint.validate_with_all_linters,ed,cljs.core.get_in.call(null,cljs.core.deref.call(null,linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null))).call(null,editor_text,callback,options);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","lint-handler","lt.plugins.lt-lint/lint-handler",4141791963),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_lint.start_lint_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.lt-lint","start-lint!","lt.plugins.lt-lint/start-lint!",1252432662),null], null), null));
lt.plugins.lt_lint.linters = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","linters","lt.plugins.lt-lint/linters",4588091878));
lt.plugins.lt_lint.editor_linting = (function editor_linting(ed,editor_text,callback,options){return lt.object.raise.call(null,lt.plugins.lt_lint.linters,new cljs.core.Keyword("lt.plugins.lt-lint","start-lint!","lt.plugins.lt-lint/start-lint!",1252432662),ed,editor_text,callback,options);
});
lt.plugins.lt_lint.set_cm_lint_settings_BANG_ = (function set_cm_lint_settings_BANG_(ed){var map__29739 = new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var map__29739__$1 = ((cljs.core.seq_QMARK_.call(null,map__29739))?cljs.core.apply.call(null,cljs.core.hash_map,map__29739):map__29739);var change_timeout = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),500);var auto_QMARK_ = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"auto?","auto?",1107086306),true);var lint_QMARK_ = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"lint?","lint?",1116881934));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),(cljs.core.truth_(lint_QMARK_)?{"delay": change_timeout, "lintOnChange": auto_QMARK_, "getAnnotations": cljs.core.partial.call(null,lt.plugins.lt_lint.editor_linting,ed), "async": true}:null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.plugins.lt_lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__29740){var vec__29742 = p__29740;var linter_obj = cljs.core.nth.call(null,vec__29742,0,null);var args = cljs.core.nthnext.call(null,vec__29742,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));lt.object.merge_BANG_.call(null,lt.plugins.lt_lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.plugins.lt_lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),lt.plugins.lt_lint.add_linter,linter_obj,ed,args));
lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lint?","lint?",1116881934),true], null)));
lt.plugins.lt_lint.set_cm_lint_settings_BANG_.call(null,ed);
return new cljs.core.Keyword(null,"ed","ed",1013907473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","register-linter","lt.plugins.lt-lint/register-linter",3174668797),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_lint.prepare_editor_for_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :opt-arg1 val1 :opt-arg2 val2 ...]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.lt_lint.__BEH__auto_linting_properties = (function __BEH__auto_linting_properties(ed,enabled_QMARK_,change_timeout){lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto?","auto?",1107086306),enabled_QMARK_,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),change_timeout], null)));
return lt.plugins.lt_lint.set_cm_lint_settings_BANG_.call(null,ed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.lt-lint","auto-linting-properties","lt.plugins.lt-lint/auto-linting-properties",2746697402),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.lt_lint.__BEH__auto_linting_properties,new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: Auto linting settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"enabled?",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"boolean","boolean",1078615962)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"change timeout",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"number","number",4274507451)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","run-linters!","lt.plugins.lt-lint/run-linters!",3509772891),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: run linters for current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.__GT_cm_ed.call(null,ed).performLint();
} else
{return null;
}
})], null));
lt.plugins.lt_lint.doc_message_text = (function doc_message_text(p__29743){var map__29745 = p__29743;var map__29745__$1 = ((cljs.core.seq_QMARK_.call(null,map__29745))?cljs.core.apply.call(null,cljs.core.hash_map,map__29745):map__29745);var from_linter = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));var message = cljs.core.get.call(null,map__29745__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,from_linter))),cljs.core.str(":\n\n"),cljs.core.str(message)].join('');
});
lt.plugins.lt_lint.inline_doc_for_lint_messages = (function inline_doc_for_lint_messages(msgs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msgs)).line], null),new cljs.core.Keyword(null,"name","name",1017277949),"Lint results",new cljs.core.Keyword(null,"doc","doc",1014003882),clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,lt.plugins.lt_lint.doc_message_text,msgs))], null);
});
lt.plugins.lt_lint.show_lint_message = (function show_lint_message(ed,lint_messages){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),lt.plugins.lt_lint.inline_doc_for_lint_messages.call(null,lint_messages));
});
lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_ = (function doc_shown_for_lint_message_QMARK_(ed,lint_messages){var lines_in_lint_messages = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.ffirst,new cljs.core.Keyword(null,"range","range",1122184367)),cljs.core.comp.call(null,cljs.core.first,cljs.core.last,new cljs.core.Keyword(null,"range","range",1122184367))),lint_messages));return cljs.core.some.call(null,cljs.core.partial.call(null,lt.plugins.doc.doc_on_line_QMARK_,ed),cljs.core.range.call(null,cljs.core.apply.call(null,cljs.core.min,lines_in_lint_messages),(cljs.core.apply.call(null,cljs.core.max,lines_in_lint_messages) + 1)));
});
lt.plugins.lt_lint.toggle_lint_message = (function toggle_lint_message(ed){var temp__4090__auto__ = cljs.core.map.call(null,lt.plugins.lt_lint.text_mark__GT_lint_result,lt.plugins.lt_lint.lint_messages_for_cursor.call(null,ed));if(cljs.core.truth_(temp__4090__auto__))
{var lint_messages = temp__4090__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto____$1 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,lint_messages);if(cljs.core.truth_(temp__4090__auto____$1))
{var cur = temp__4090__auto____$1;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.plugins.lt_lint.show_lint_message.call(null,ed,lint_messages);
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No lint message found at cursor...",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.plugins.lt_lint.toggle_all_lint_messages = (function toggle_all_lint_messages(ed){var temp__4092__auto__ = cljs.core.map.call(null,lt.plugins.lt_lint.text_mark__GT_lint_result,lt.plugins.lt_lint.lint_messages_for_ed.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var lint_messages = temp__4092__auto__;var all_shown_QMARK_ = (function (){var or__19803__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038),new cljs.core.Keyword(null,"all-shown?","all-shown?",1120148076)], null));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return false;
}
})();var seq__29750_29796 = cljs.core.seq.call(null,lint_messages);var chunk__29751_29797 = null;var count__29752_29798 = 0;var i__29753_29799 = 0;while(true){
if((i__29753_29799 < count__29752_29798))
{var msg_29800 = cljs.core._nth.call(null,chunk__29751_29797,i__29753_29799);cljs.core.dissoc.call(null,msg_29800,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));
if(cljs.core.truth_(all_shown_QMARK_))
{var temp__4092__auto___29801__$1 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29800], null));if(cljs.core.truth_(temp__4092__auto___29801__$1))
{var cur_29802 = temp__4092__auto___29801__$1;lt.plugins.doc.remove_BANG_.call(null,ed,cur_29802);
} else
{}
} else
{if(cljs.core.truth_(lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29800], null))))
{} else
{lt.plugins.lt_lint.show_lint_message.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29800], null));
}
}
{
var G__29803 = seq__29750_29796;
var G__29804 = chunk__29751_29797;
var G__29805 = count__29752_29798;
var G__29806 = (i__29753_29799 + 1);
seq__29750_29796 = G__29803;
chunk__29751_29797 = G__29804;
count__29752_29798 = G__29805;
i__29753_29799 = G__29806;
continue;
}
} else
{var temp__4092__auto___29807__$1 = cljs.core.seq.call(null,seq__29750_29796);if(temp__4092__auto___29807__$1)
{var seq__29750_29808__$1 = temp__4092__auto___29807__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29750_29808__$1))
{var c__20551__auto___29809 = cljs.core.chunk_first.call(null,seq__29750_29808__$1);{
var G__29810 = cljs.core.chunk_rest.call(null,seq__29750_29808__$1);
var G__29811 = c__20551__auto___29809;
var G__29812 = cljs.core.count.call(null,c__20551__auto___29809);
var G__29813 = 0;
seq__29750_29796 = G__29810;
chunk__29751_29797 = G__29811;
count__29752_29798 = G__29812;
i__29753_29799 = G__29813;
continue;
}
} else
{var msg_29814 = cljs.core.first.call(null,seq__29750_29808__$1);cljs.core.dissoc.call(null,msg_29814,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));
if(cljs.core.truth_(all_shown_QMARK_))
{var temp__4092__auto___29815__$2 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29814], null));if(cljs.core.truth_(temp__4092__auto___29815__$2))
{var cur_29816 = temp__4092__auto___29815__$2;lt.plugins.doc.remove_BANG_.call(null,ed,cur_29816);
} else
{}
} else
{if(cljs.core.truth_(lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29814], null))))
{} else
{lt.plugins.lt_lint.show_lint_message.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29814], null));
}
}
{
var G__29817 = cljs.core.next.call(null,seq__29750_29808__$1);
var G__29818 = null;
var G__29819 = 0;
var G__29820 = 0;
seq__29750_29796 = G__29817;
chunk__29751_29797 = G__29818;
count__29752_29798 = G__29819;
i__29753_29799 = G__29820;
continue;
}
}
} else
{}
}
break;
}
return lt.object.merge_BANG_.call(null,ed,cljs.core.update_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-shown?","all-shown?",1120148076),cljs.core.not.call(null,all_shown_QMARK_)], null)));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","toggle-lint-message","lt.plugins.lt-lint/toggle-lint-message",2461476177),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: toggle lint message",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_lint.toggle_lint_message.call(null,ed);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","toggle-all-lint-messages","lt.plugins.lt-lint/toggle-all-lint-messages",2763619820),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: toggle all lint messages in editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_lint.toggle_all_lint_messages.call(null,ed);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=linting_compiled.js.map