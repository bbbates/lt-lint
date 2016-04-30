if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj28657 = {};return obj28657;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj28659 = {};return obj28659;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj28661 = {};return obj28661;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj28663 = {};return obj28663;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj28665 = {};return obj28665;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj28667 = {};return obj28667;
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
var G__28603 = (cnt + 1);
cnt = G__28603;
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
{var v_28604 = this$.pop();if(keep_QMARK_.call(null,v_28604))
{this$.unshift(v_28604);
} else
{}
{
var G__28605 = (x + 1);
x = G__28605;
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
var count_28653 = 0;while(true){
var m_28654 = cljs.core.async.impl.dispatch.tasks.pop();if((m_28654 == null))
{} else
{m_28654.call(null);
if((count_28653 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__28655 = (count_28653 + 1);
count_28653 = G__28655;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t28609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t28609 = (function (val,box,meta28610){
this.val = val;
this.box = box;
this.meta28610 = meta28610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t28609.cljs$lang$type = true;
cljs.core.async.impl.channels.t28609.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t28609";
cljs.core.async.impl.channels.t28609.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t28609");
});
cljs.core.async.impl.channels.t28609.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t28609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28611){var self__ = this;
var _28611__$1 = this;return self__.meta28610;
});
cljs.core.async.impl.channels.t28609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28611,meta28610__$1){var self__ = this;
var _28611__$1 = this;return (new cljs.core.async.impl.channels.t28609(self__.val,self__.box,meta28610__$1));
});
cljs.core.async.impl.channels.__GT_t28609 = (function __GT_t28609(val__$1,box__$1,meta28610){return (new cljs.core.async.impl.channels.t28609(val__$1,box__$1,meta28610));
});
}
return (new cljs.core.async.impl.channels.t28609(val,box,null));
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
cljs.core.async.impl.channels.MMC = (function (){var obj28613 = {};return obj28613;
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
var taker_28628 = self__.takes.pop();if((taker_28628 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28628))
{var take_cb_28629 = cljs.core.async.impl.protocols.commit.call(null,taker_28628);var val_28630 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28629,val_28630,taker_28628,this$__$1){
return (function (){return take_cb_28629.call(null,val_28630);
});})(take_cb_28629,val_28630,taker_28628,this$__$1))
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
{var putter_28631 = self__.puts.pop();if((putter_28631 == null))
{} else
{var put_handler_28632 = putter_28631.handler;var val_28633 = putter_28631.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28632))
{var put_cb_28634 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28632);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28634,put_handler_28632,val_28633,putter_28631,_,retval,this$__$1){
return (function (){return put_cb_28634.call(null,true);
});})(put_cb_28634,put_handler_28632,val_28633,putter_28631,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_28633)))
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
{var taker_28635 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_28635))
{var take_cb_28636 = cljs.core.async.impl.protocols.commit.call(null,taker_28635);var val_28637__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_28636,val_28637__$1,taker_28635,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_28636.call(null,val_28637__$1);
});})(take_cb_28636,val_28637__$1,taker_28635,done_QMARK_,closed__$1,this$__$1))
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
var putter_28638 = self__.puts.pop();if((putter_28638 == null))
{} else
{var put_handler_28639 = putter_28638.handler;var val_28640 = putter_28638.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_28639))
{var put_cb_28641 = cljs.core.async.impl.protocols.commit.call(null,put_handler_28639);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_28641,put_handler_28639,val_28640,putter_28638,this$__$1){
return (function (){return put_cb_28641.call(null,true);
});})(put_cb_28641,put_handler_28639,val_28640,putter_28638,this$__$1))
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
var G__28642 = null;
var G__28642__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e28616){var t = e28616;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__28642__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e28617){var t = e28617;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__28642 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28642__1.call(this,buf__$1);
case 2:
return G__28642__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__28642;
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
var G__28688 = (level + 1);
level = G__28688;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_28689 = 0;while(true){
if((i_28689 < arr.length))
{(arr[i_28689] = null);
{
var G__28690 = (i_28689 + 1);
i_28689 = G__28690;
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
var G__28691 = x_SINGLEQUOTE_;
x__$1 = G__28691;
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
var G__28692 = x__$1;
var G__28693 = k;
var G__28694 = (level - 1);
var G__28695 = update;
x = G__28692;
k = G__28693;
level = G__28694;
update = G__28695;
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
{var i_28696 = (self__.level + 1);while(true){
if((i_28696 <= (new_level + 1)))
{(update[i_28696] = self__.header);
{
var G__28697 = (i_28696 + 1);
i_28696 = G__28697;
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
{var i_28698 = 0;while(true){
if((i_28698 <= self__.level))
{var links_28699 = (update[i_28698]).forward;if(((links_28699[i_28698]) === x__$1))
{(links_28699[i_28698] = (x__$1.forward[i_28698]));
{
var G__28700 = (i_28698 + 1);
i_28698 = G__28700;
continue;
}
} else
{{
var G__28701 = (i_28698 + 1);
i_28698 = G__28701;
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
var G__28702 = x_SINGLEQUOTE_;
x__$1 = G__28702;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__28703 = nx;
var G__28704 = (level__$1 - 1);
x = G__28703;
level__$1 = G__28704;
continue;
}
} else
{{
var G__28705 = x;
var G__28706 = (level__$1 - 1);
x = G__28705;
level__$1 = G__28706;
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
var G__28707 = x_SINGLEQUOTE_;
x__$1 = G__28707;
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
var G__28708 = nx;
var G__28709 = (level__$1 - 1);
x = G__28708;
level__$1 = G__28709;
continue;
}
} else
{{
var G__28710 = x;
var G__28711 = (level__$1 - 1);
x = G__28710;
level__$1 = G__28711;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t28533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t28533 = (function (f,fn_handler,meta28534){
this.f = f;
this.fn_handler = fn_handler;
this.meta28534 = meta28534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t28533.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t28533.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t28533";
cljs.core.async.impl.ioc_helpers.t28533.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t28533");
});
cljs.core.async.impl.ioc_helpers.t28533.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t28533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t28533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t28533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28535){var self__ = this;
var _28535__$1 = this;return self__.meta28534;
});
cljs.core.async.impl.ioc_helpers.t28533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28535,meta28534__$1){var self__ = this;
var _28535__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t28533(self__.f,self__.fn_handler,meta28534__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t28533 = (function __GT_t28533(f__$1,fn_handler__$1,meta28534){return (new cljs.core.async.impl.ioc_helpers.t28533(f__$1,fn_handler__$1,meta28534));
});
}
return (new cljs.core.async.impl.ioc_helpers.t28533(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e28537){if((e28537 instanceof Object))
{var ex = e28537;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28537;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_28540_28583 = state;(statearr_28540_28583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_28540_28583[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28541_28584 = state;(statearr_28541_28584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28541_28584[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_28544_28585 = state;(statearr_28544_28585[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_28544_28585[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_28545_28586 = state;(statearr_28545_28586[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_28545_28586[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28546){var map__28551 = p__28546;var map__28551__$1 = ((cljs.core.seq_QMARK_.call(null,map__28551))?cljs.core.apply.call(null,cljs.core.hash_map,map__28551):map__28551);var opts = map__28551__$1;var statearr_28552_28587 = state;(statearr_28552_28587[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__28551,map__28551__$1,opts){
return (function (val){var statearr_28553_28588 = state;(statearr_28553_28588[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28551,map__28551__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_28554_28589 = state;(statearr_28554_28589[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28546 = null;if (arguments.length > 3) {
  p__28546 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28546);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28590){
var state = cljs.core.first(arglist__28590);
arglist__28590 = cljs.core.next(arglist__28590);
var cont_block = cljs.core.first(arglist__28590);
arglist__28590 = cljs.core.next(arglist__28590);
var ports = cljs.core.first(arglist__28590);
var p__28546 = cljs.core.rest(arglist__28590);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28546);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k28556,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k28556,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28556,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28556,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28556,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k28556,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k28556,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__28555){var self__ = this;
var this__20396__auto____$1 = this;var pred__28558 = cljs.core.keyword_identical_QMARK_;var expr__28559 = k__20397__auto__;if(cljs.core.truth_(pred__28558.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__28559)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__28555,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28558.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__28559)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__28555,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28558.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__28559)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__28555,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28558.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__28559)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__28555,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28558.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__28559)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__28555,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__28555),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__28555){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__28555,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__28557){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__28557),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__28557),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__28557),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__28557),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__28557),null,cljs.core.dissoc.call(null,G__28557,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_28562 = state;(statearr_28562[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_28562;
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
{var statearr_28568 = state;(statearr_28568[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_28568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_28568[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_28568[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_28568;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_28569_28591 = state;(statearr_28569_28591[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__28592 = state;
state = G__28592;
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
{var statearr_28570 = state;(statearr_28570[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28570[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28570;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_28571 = state;(statearr_28571[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28571[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_28571;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_28572 = state;(statearr_28572[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_28572[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_28572;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t25451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25451 = (function (f,fn_handler,meta25452){
this.f = f;
this.fn_handler = fn_handler;
this.meta25452 = meta25452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25451.cljs$lang$type = true;
cljs.core.async.t25451.cljs$lang$ctorStr = "cljs.core.async/t25451";
cljs.core.async.t25451.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25451");
});
cljs.core.async.t25451.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t25451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t25451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25453){var self__ = this;
var _25453__$1 = this;return self__.meta25452;
});
cljs.core.async.t25451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25453,meta25452__$1){var self__ = this;
var _25453__$1 = this;return (new cljs.core.async.t25451(self__.f,self__.fn_handler,meta25452__$1));
});
cljs.core.async.__GT_t25451 = (function __GT_t25451(f__$1,fn_handler__$1,meta25452){return (new cljs.core.async.t25451(f__$1,fn_handler__$1,meta25452));
});
}
return (new cljs.core.async.t25451(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__25455 = buff;if(G__25455)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__25455.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__25455.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25455);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25455);
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
{var val_28158 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28158);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28158,ret){
return (function (){return fn1.call(null,val_28158);
});})(val_28158,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28159 = n;var x_28160 = 0;while(true){
if((x_28160 < n__20651__auto___28159))
{(a[x_28160] = 0);
{
var G__28161 = (x_28160 + 1);
x_28160 = G__28161;
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
var G__28162 = (i + 1);
i = G__28162;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t25459 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25459 = (function (flag,alt_flag,meta25460){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25460 = meta25460;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25459.cljs$lang$type = true;
cljs.core.async.t25459.cljs$lang$ctorStr = "cljs.core.async/t25459";
cljs.core.async.t25459.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25459");
});})(flag))
;
cljs.core.async.t25459.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t25459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t25459.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25461){var self__ = this;
var _25461__$1 = this;return self__.meta25460;
});})(flag))
;
cljs.core.async.t25459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25461,meta25460__$1){var self__ = this;
var _25461__$1 = this;return (new cljs.core.async.t25459(self__.flag,self__.alt_flag,meta25460__$1));
});})(flag))
;
cljs.core.async.__GT_t25459 = ((function (flag){
return (function __GT_t25459(flag__$1,alt_flag__$1,meta25460){return (new cljs.core.async.t25459(flag__$1,alt_flag__$1,meta25460));
});})(flag))
;
}
return (new cljs.core.async.t25459(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t25465 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25465 = (function (cb,flag,alt_handler,meta25466){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25466 = meta25466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25465.cljs$lang$type = true;
cljs.core.async.t25465.cljs$lang$ctorStr = "cljs.core.async/t25465";
cljs.core.async.t25465.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t25465");
});
cljs.core.async.t25465.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t25465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t25465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t25465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25467){var self__ = this;
var _25467__$1 = this;return self__.meta25466;
});
cljs.core.async.t25465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25467,meta25466__$1){var self__ = this;
var _25467__$1 = this;return (new cljs.core.async.t25465(self__.cb,self__.flag,self__.alt_handler,meta25466__$1));
});
cljs.core.async.__GT_t25465 = (function __GT_t25465(cb__$1,flag__$1,alt_handler__$1,meta25466){return (new cljs.core.async.t25465(cb__$1,flag__$1,alt_handler__$1,meta25466));
});
}
return (new cljs.core.async.t25465(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25468_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25468_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25469_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25469_SHARP_,port], null));
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
var G__28163 = (i + 1);
i = G__28163;
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
var alts_BANG___delegate = function (ports,p__25470){var map__25472 = p__25470;var map__25472__$1 = ((cljs.core.seq_QMARK_.call(null,map__25472))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);var opts = map__25472__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__25470 = null;if (arguments.length > 1) {
  p__25470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__25470);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28164){
var ports = cljs.core.first(arglist__28164);
var p__25470 = cljs.core.rest(arglist__28164);
return alts_BANG___delegate(ports,p__25470);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22463__auto___28165 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28165){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28165){
return (function (state_25543){var state_val_25544 = (state_25543[1]);if((state_val_25544 === 1))
{var state_25543__$1 = state_25543;var statearr_25545_28166 = state_25543__$1;(statearr_25545_28166[2] = null);
(statearr_25545_28166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 2))
{var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25543__$1,4,from);
} else
{if((state_val_25544 === 3))
{var inst_25541 = (state_25543[2]);var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25543__$1,inst_25541);
} else
{if((state_val_25544 === 4))
{var inst_25522 = (state_25543[7]);var inst_25522__$1 = (state_25543[2]);var inst_25523 = (inst_25522__$1 == null);var state_25543__$1 = (function (){var statearr_25546 = state_25543;(statearr_25546[7] = inst_25522__$1);
return statearr_25546;
})();if(cljs.core.truth_(inst_25523))
{var statearr_25547_28167 = state_25543__$1;(statearr_25547_28167[1] = 5);
} else
{var statearr_25548_28168 = state_25543__$1;(statearr_25548_28168[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 5))
{var state_25543__$1 = state_25543;if(cljs.core.truth_(close_QMARK_))
{var statearr_25549_28169 = state_25543__$1;(statearr_25549_28169[1] = 8);
} else
{var statearr_25550_28170 = state_25543__$1;(statearr_25550_28170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 6))
{var inst_25522 = (state_25543[7]);var state_25543__$1 = state_25543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25543__$1,11,to,inst_25522);
} else
{if((state_val_25544 === 7))
{var inst_25539 = (state_25543[2]);var state_25543__$1 = state_25543;var statearr_25551_28171 = state_25543__$1;(statearr_25551_28171[2] = inst_25539);
(statearr_25551_28171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 8))
{var inst_25526 = cljs.core.async.close_BANG_.call(null,to);var state_25543__$1 = state_25543;var statearr_25552_28172 = state_25543__$1;(statearr_25552_28172[2] = inst_25526);
(statearr_25552_28172[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 9))
{var state_25543__$1 = state_25543;var statearr_25553_28173 = state_25543__$1;(statearr_25553_28173[2] = null);
(statearr_25553_28173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 10))
{var inst_25529 = (state_25543[2]);var state_25543__$1 = state_25543;var statearr_25554_28174 = state_25543__$1;(statearr_25554_28174[2] = inst_25529);
(statearr_25554_28174[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 11))
{var inst_25532 = (state_25543[2]);var state_25543__$1 = state_25543;if(cljs.core.truth_(inst_25532))
{var statearr_25555_28175 = state_25543__$1;(statearr_25555_28175[1] = 12);
} else
{var statearr_25556_28176 = state_25543__$1;(statearr_25556_28176[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 12))
{var state_25543__$1 = state_25543;var statearr_25557_28177 = state_25543__$1;(statearr_25557_28177[2] = null);
(statearr_25557_28177[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 13))
{var state_25543__$1 = state_25543;var statearr_25558_28178 = state_25543__$1;(statearr_25558_28178[2] = null);
(statearr_25558_28178[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25544 === 14))
{var inst_25537 = (state_25543[2]);var state_25543__$1 = state_25543;var statearr_25559_28179 = state_25543__$1;(statearr_25559_28179[2] = inst_25537);
(statearr_25559_28179[1] = 7);
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
});})(c__22463__auto___28165))
;return ((function (switch__22387__auto__,c__22463__auto___28165){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25563 = [null,null,null,null,null,null,null,null];(statearr_25563[0] = state_machine__22388__auto__);
(statearr_25563[1] = 1);
return statearr_25563;
});
var state_machine__22388__auto____1 = (function (state_25543){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25543);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25564){if((e25564 instanceof Object))
{var ex__22391__auto__ = e25564;var statearr_25565_28180 = state_25543;(statearr_25565_28180[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28181 = state_25543;
state_25543 = G__28181;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25543){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28165))
})();var state__22465__auto__ = (function (){var statearr_25566 = f__22464__auto__.call(null);(statearr_25566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28165);
return statearr_25566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28165))
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
return (function (p__25749){var vec__25750 = p__25749;var v = cljs.core.nth.call(null,vec__25750,0,null);var p = cljs.core.nth.call(null,vec__25750,1,null);var job = vec__25750;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22463__auto___28182 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results){
return (function (state_25755){var state_val_25756 = (state_25755[1]);if((state_val_25756 === 2))
{var inst_25752 = (state_25755[2]);var inst_25753 = cljs.core.async.close_BANG_.call(null,res);var state_25755__$1 = (function (){var statearr_25757 = state_25755;(statearr_25757[7] = inst_25752);
return statearr_25757;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25755__$1,inst_25753);
} else
{if((state_val_25756 === 1))
{var state_25755__$1 = state_25755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25755__$1,2,res,v);
} else
{return null;
}
}
});})(c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results))
;return ((function (switch__22387__auto__,c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25761 = [null,null,null,null,null,null,null,null];(statearr_25761[0] = state_machine__22388__auto__);
(statearr_25761[1] = 1);
return statearr_25761;
});
var state_machine__22388__auto____1 = (function (state_25755){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25755);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25762){if((e25762 instanceof Object))
{var ex__22391__auto__ = e25762;var statearr_25763_28183 = state_25755;(statearr_25763_28183[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25755);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28184 = state_25755;
state_25755 = G__28184;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25755){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results))
})();var state__22465__auto__ = (function (){var statearr_25764 = f__22464__auto__.call(null);(statearr_25764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28182);
return statearr_25764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28182,res,vec__25750,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__25765){var vec__25766 = p__25765;var v = cljs.core.nth.call(null,vec__25766,0,null);var p = cljs.core.nth.call(null,vec__25766,1,null);var job = vec__25766;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28185 = n;var __28186 = 0;while(true){
if((__28186 < n__20651__auto___28185))
{var G__25767_28187 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__25767_28187))
{var c__22463__auto___28188 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28186,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28186,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function (state_25780){var state_val_25781 = (state_25780[1]);if((state_val_25781 === 7))
{var inst_25776 = (state_25780[2]);var state_25780__$1 = state_25780;var statearr_25782_28189 = state_25780__$1;(statearr_25782_28189[2] = inst_25776);
(statearr_25782_28189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25781 === 6))
{var state_25780__$1 = state_25780;var statearr_25783_28190 = state_25780__$1;(statearr_25783_28190[2] = null);
(statearr_25783_28190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25781 === 5))
{var state_25780__$1 = state_25780;var statearr_25784_28191 = state_25780__$1;(statearr_25784_28191[2] = null);
(statearr_25784_28191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25781 === 4))
{var inst_25770 = (state_25780[2]);var inst_25771 = async.call(null,inst_25770);var state_25780__$1 = state_25780;if(cljs.core.truth_(inst_25771))
{var statearr_25785_28192 = state_25780__$1;(statearr_25785_28192[1] = 5);
} else
{var statearr_25786_28193 = state_25780__$1;(statearr_25786_28193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25781 === 3))
{var inst_25778 = (state_25780[2]);var state_25780__$1 = state_25780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25780__$1,inst_25778);
} else
{if((state_val_25781 === 2))
{var state_25780__$1 = state_25780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25780__$1,4,jobs);
} else
{if((state_val_25781 === 1))
{var state_25780__$1 = state_25780;var statearr_25787_28194 = state_25780__$1;(statearr_25787_28194[2] = null);
(statearr_25787_28194[1] = 2);
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
});})(__28186,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
;return ((function (__28186,switch__22387__auto__,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25791 = [null,null,null,null,null,null,null];(statearr_25791[0] = state_machine__22388__auto__);
(statearr_25791[1] = 1);
return statearr_25791;
});
var state_machine__22388__auto____1 = (function (state_25780){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25780);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25792){if((e25792 instanceof Object))
{var ex__22391__auto__ = e25792;var statearr_25793_28195 = state_25780;(statearr_25793_28195[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25792;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28196 = state_25780;
state_25780 = G__28196;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25780){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28186,switch__22387__auto__,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_25794 = f__22464__auto__.call(null);(statearr_25794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28188);
return statearr_25794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28186,c__22463__auto___28188,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__25767_28187))
{var c__22463__auto___28197 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28186,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (__28186,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function (state_25807){var state_val_25808 = (state_25807[1]);if((state_val_25808 === 7))
{var inst_25803 = (state_25807[2]);var state_25807__$1 = state_25807;var statearr_25809_28198 = state_25807__$1;(statearr_25809_28198[2] = inst_25803);
(statearr_25809_28198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25808 === 6))
{var state_25807__$1 = state_25807;var statearr_25810_28199 = state_25807__$1;(statearr_25810_28199[2] = null);
(statearr_25810_28199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25808 === 5))
{var state_25807__$1 = state_25807;var statearr_25811_28200 = state_25807__$1;(statearr_25811_28200[2] = null);
(statearr_25811_28200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25808 === 4))
{var inst_25797 = (state_25807[2]);var inst_25798 = process.call(null,inst_25797);var state_25807__$1 = state_25807;if(cljs.core.truth_(inst_25798))
{var statearr_25812_28201 = state_25807__$1;(statearr_25812_28201[1] = 5);
} else
{var statearr_25813_28202 = state_25807__$1;(statearr_25813_28202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25808 === 3))
{var inst_25805 = (state_25807[2]);var state_25807__$1 = state_25807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25807__$1,inst_25805);
} else
{if((state_val_25808 === 2))
{var state_25807__$1 = state_25807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25807__$1,4,jobs);
} else
{if((state_val_25808 === 1))
{var state_25807__$1 = state_25807;var statearr_25814_28203 = state_25807__$1;(statearr_25814_28203[2] = null);
(statearr_25814_28203[1] = 2);
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
});})(__28186,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
;return ((function (__28186,switch__22387__auto__,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25818 = [null,null,null,null,null,null,null];(statearr_25818[0] = state_machine__22388__auto__);
(statearr_25818[1] = 1);
return statearr_25818;
});
var state_machine__22388__auto____1 = (function (state_25807){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25807);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25819){if((e25819 instanceof Object))
{var ex__22391__auto__ = e25819;var statearr_25820_28204 = state_25807;(statearr_25820_28204[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25807);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28205 = state_25807;
state_25807 = G__28205;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25807){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(__28186,switch__22387__auto__,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_25821 = f__22464__auto__.call(null);(statearr_25821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28197);
return statearr_25821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(__28186,c__22463__auto___28197,G__25767_28187,n__20651__auto___28185,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28206 = (__28186 + 1);
__28186 = G__28206;
continue;
}
} else
{}
break;
}
var c__22463__auto___28207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28207,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28207,jobs,results,process,async){
return (function (state_25842){var state_val_25843 = (state_25842[1]);if((state_val_25843 === 9))
{var inst_25835 = (state_25842[2]);var state_25842__$1 = (function (){var statearr_25844 = state_25842;(statearr_25844[7] = inst_25835);
return statearr_25844;
})();var statearr_25845_28208 = state_25842__$1;(statearr_25845_28208[2] = null);
(statearr_25845_28208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25843 === 8))
{var inst_25829 = (state_25842[8]);var inst_25833 = (state_25842[2]);var state_25842__$1 = (function (){var statearr_25846 = state_25842;(statearr_25846[9] = inst_25833);
return statearr_25846;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25842__$1,9,results,inst_25829);
} else
{if((state_val_25843 === 7))
{var inst_25838 = (state_25842[2]);var state_25842__$1 = state_25842;var statearr_25847_28209 = state_25842__$1;(statearr_25847_28209[2] = inst_25838);
(statearr_25847_28209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25843 === 6))
{var inst_25829 = (state_25842[8]);var inst_25824 = (state_25842[10]);var inst_25829__$1 = cljs.core.async.chan.call(null,1);var inst_25830 = [inst_25824,inst_25829__$1];var inst_25831 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_25830,null));var state_25842__$1 = (function (){var statearr_25848 = state_25842;(statearr_25848[8] = inst_25829__$1);
return statearr_25848;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25842__$1,8,jobs,inst_25831);
} else
{if((state_val_25843 === 5))
{var inst_25827 = cljs.core.async.close_BANG_.call(null,jobs);var state_25842__$1 = state_25842;var statearr_25849_28210 = state_25842__$1;(statearr_25849_28210[2] = inst_25827);
(statearr_25849_28210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25843 === 4))
{var inst_25824 = (state_25842[10]);var inst_25824__$1 = (state_25842[2]);var inst_25825 = (inst_25824__$1 == null);var state_25842__$1 = (function (){var statearr_25850 = state_25842;(statearr_25850[10] = inst_25824__$1);
return statearr_25850;
})();if(cljs.core.truth_(inst_25825))
{var statearr_25851_28211 = state_25842__$1;(statearr_25851_28211[1] = 5);
} else
{var statearr_25852_28212 = state_25842__$1;(statearr_25852_28212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25843 === 3))
{var inst_25840 = (state_25842[2]);var state_25842__$1 = state_25842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25842__$1,inst_25840);
} else
{if((state_val_25843 === 2))
{var state_25842__$1 = state_25842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25842__$1,4,from);
} else
{if((state_val_25843 === 1))
{var state_25842__$1 = state_25842;var statearr_25853_28213 = state_25842__$1;(statearr_25853_28213[2] = null);
(statearr_25853_28213[1] = 2);
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
});})(c__22463__auto___28207,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto___28207,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25857 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25857[0] = state_machine__22388__auto__);
(statearr_25857[1] = 1);
return statearr_25857;
});
var state_machine__22388__auto____1 = (function (state_25842){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25842);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25858){if((e25858 instanceof Object))
{var ex__22391__auto__ = e25858;var statearr_25859_28214 = state_25842;(statearr_25859_28214[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28215 = state_25842;
state_25842 = G__28215;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25842){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28207,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_25860 = f__22464__auto__.call(null);(statearr_25860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28207);
return statearr_25860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28207,jobs,results,process,async))
);
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,jobs,results,process,async){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,jobs,results,process,async){
return (function (state_25898){var state_val_25899 = (state_25898[1]);if((state_val_25899 === 1))
{var state_25898__$1 = state_25898;var statearr_25900_28216 = state_25898__$1;(statearr_25900_28216[2] = null);
(statearr_25900_28216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 2))
{var state_25898__$1 = state_25898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25898__$1,4,results);
} else
{if((state_val_25899 === 3))
{var inst_25896 = (state_25898[2]);var state_25898__$1 = state_25898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25898__$1,inst_25896);
} else
{if((state_val_25899 === 4))
{var inst_25863 = (state_25898[7]);var inst_25863__$1 = (state_25898[2]);var inst_25864 = (inst_25863__$1 == null);var state_25898__$1 = (function (){var statearr_25901 = state_25898;(statearr_25901[7] = inst_25863__$1);
return statearr_25901;
})();if(cljs.core.truth_(inst_25864))
{var statearr_25902_28217 = state_25898__$1;(statearr_25902_28217[1] = 5);
} else
{var statearr_25903_28218 = state_25898__$1;(statearr_25903_28218[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 5))
{var state_25898__$1 = state_25898;if(cljs.core.truth_(close_QMARK_))
{var statearr_25904_28219 = state_25898__$1;(statearr_25904_28219[1] = 8);
} else
{var statearr_25905_28220 = state_25898__$1;(statearr_25905_28220[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 6))
{var inst_25863 = (state_25898[7]);var state_25898__$1 = state_25898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25898__$1,11,inst_25863);
} else
{if((state_val_25899 === 7))
{var inst_25894 = (state_25898[2]);var state_25898__$1 = state_25898;var statearr_25906_28221 = state_25898__$1;(statearr_25906_28221[2] = inst_25894);
(statearr_25906_28221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 8))
{var inst_25867 = cljs.core.async.close_BANG_.call(null,to);var state_25898__$1 = state_25898;var statearr_25907_28222 = state_25898__$1;(statearr_25907_28222[2] = inst_25867);
(statearr_25907_28222[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 9))
{var state_25898__$1 = state_25898;var statearr_25908_28223 = state_25898__$1;(statearr_25908_28223[2] = null);
(statearr_25908_28223[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 10))
{var inst_25870 = (state_25898[2]);var state_25898__$1 = state_25898;var statearr_25909_28224 = state_25898__$1;(statearr_25909_28224[2] = inst_25870);
(statearr_25909_28224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 11))
{var inst_25873 = (state_25898[2]);var state_25898__$1 = (function (){var statearr_25910 = state_25898;(statearr_25910[8] = inst_25873);
return statearr_25910;
})();var statearr_25911_28225 = state_25898__$1;(statearr_25911_28225[2] = null);
(statearr_25911_28225[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 12))
{var inst_25873 = (state_25898[8]);var state_25898__$1 = state_25898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25898__$1,14,inst_25873);
} else
{if((state_val_25899 === 13))
{var inst_25891 = (state_25898[2]);var state_25898__$1 = (function (){var statearr_25912 = state_25898;(statearr_25912[9] = inst_25891);
return statearr_25912;
})();var statearr_25913_28226 = state_25898__$1;(statearr_25913_28226[2] = null);
(statearr_25913_28226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 14))
{var inst_25878 = (state_25898[10]);var inst_25876 = (state_25898[11]);var inst_25876__$1 = (state_25898[2]);var inst_25877 = (inst_25876__$1 == null);var inst_25878__$1 = cljs.core.not.call(null,inst_25877);var state_25898__$1 = (function (){var statearr_25914 = state_25898;(statearr_25914[10] = inst_25878__$1);
(statearr_25914[11] = inst_25876__$1);
return statearr_25914;
})();if(inst_25878__$1)
{var statearr_25915_28227 = state_25898__$1;(statearr_25915_28227[1] = 15);
} else
{var statearr_25916_28228 = state_25898__$1;(statearr_25916_28228[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 15))
{var inst_25876 = (state_25898[11]);var state_25898__$1 = state_25898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25898__$1,18,to,inst_25876);
} else
{if((state_val_25899 === 16))
{var inst_25878 = (state_25898[10]);var state_25898__$1 = state_25898;var statearr_25917_28229 = state_25898__$1;(statearr_25917_28229[2] = inst_25878);
(statearr_25917_28229[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 17))
{var inst_25884 = (state_25898[2]);var state_25898__$1 = state_25898;if(cljs.core.truth_(inst_25884))
{var statearr_25918_28230 = state_25898__$1;(statearr_25918_28230[1] = 19);
} else
{var statearr_25919_28231 = state_25898__$1;(statearr_25919_28231[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 18))
{var inst_25881 = (state_25898[2]);var state_25898__$1 = state_25898;var statearr_25920_28232 = state_25898__$1;(statearr_25920_28232[2] = inst_25881);
(statearr_25920_28232[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 19))
{var state_25898__$1 = state_25898;var statearr_25921_28233 = state_25898__$1;(statearr_25921_28233[2] = null);
(statearr_25921_28233[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 20))
{var state_25898__$1 = state_25898;var statearr_25922_28234 = state_25898__$1;(statearr_25922_28234[2] = null);
(statearr_25922_28234[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25899 === 21))
{var inst_25889 = (state_25898[2]);var state_25898__$1 = state_25898;var statearr_25923_28235 = state_25898__$1;(statearr_25923_28235[2] = inst_25889);
(statearr_25923_28235[1] = 13);
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
});})(c__22463__auto__,jobs,results,process,async))
;return ((function (switch__22387__auto__,c__22463__auto__,jobs,results,process,async){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_25927 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25927[0] = state_machine__22388__auto__);
(statearr_25927[1] = 1);
return statearr_25927;
});
var state_machine__22388__auto____1 = (function (state_25898){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_25898);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e25928){if((e25928 instanceof Object))
{var ex__22391__auto__ = e25928;var statearr_25929_28236 = state_25898;(statearr_25929_28236[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28237 = state_25898;
state_25898 = G__28237;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_25898){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_25898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,jobs,results,process,async))
})();var state__22465__auto__ = (function (){var statearr_25930 = f__22464__auto__.call(null);(statearr_25930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_25930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,jobs,results,process,async))
);
return c__22463__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22463__auto___28238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28238,tc,fc){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28238,tc,fc){
return (function (state_26006){var state_val_26007 = (state_26006[1]);if((state_val_26007 === 1))
{var state_26006__$1 = state_26006;var statearr_26008_28239 = state_26006__$1;(statearr_26008_28239[2] = null);
(statearr_26008_28239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 2))
{var state_26006__$1 = state_26006;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26006__$1,4,ch);
} else
{if((state_val_26007 === 3))
{var inst_26004 = (state_26006[2]);var state_26006__$1 = state_26006;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26006__$1,inst_26004);
} else
{if((state_val_26007 === 4))
{var inst_25983 = (state_26006[7]);var inst_25983__$1 = (state_26006[2]);var inst_25984 = (inst_25983__$1 == null);var state_26006__$1 = (function (){var statearr_26009 = state_26006;(statearr_26009[7] = inst_25983__$1);
return statearr_26009;
})();if(cljs.core.truth_(inst_25984))
{var statearr_26010_28240 = state_26006__$1;(statearr_26010_28240[1] = 5);
} else
{var statearr_26011_28241 = state_26006__$1;(statearr_26011_28241[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 5))
{var inst_25986 = cljs.core.async.close_BANG_.call(null,tc);var inst_25987 = cljs.core.async.close_BANG_.call(null,fc);var state_26006__$1 = (function (){var statearr_26012 = state_26006;(statearr_26012[8] = inst_25986);
return statearr_26012;
})();var statearr_26013_28242 = state_26006__$1;(statearr_26013_28242[2] = inst_25987);
(statearr_26013_28242[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 6))
{var inst_25983 = (state_26006[7]);var inst_25989 = p.call(null,inst_25983);var state_26006__$1 = state_26006;if(cljs.core.truth_(inst_25989))
{var statearr_26014_28243 = state_26006__$1;(statearr_26014_28243[1] = 9);
} else
{var statearr_26015_28244 = state_26006__$1;(statearr_26015_28244[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 7))
{var inst_26002 = (state_26006[2]);var state_26006__$1 = state_26006;var statearr_26016_28245 = state_26006__$1;(statearr_26016_28245[2] = inst_26002);
(statearr_26016_28245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 8))
{var inst_25995 = (state_26006[2]);var state_26006__$1 = state_26006;if(cljs.core.truth_(inst_25995))
{var statearr_26017_28246 = state_26006__$1;(statearr_26017_28246[1] = 12);
} else
{var statearr_26018_28247 = state_26006__$1;(statearr_26018_28247[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 9))
{var state_26006__$1 = state_26006;var statearr_26019_28248 = state_26006__$1;(statearr_26019_28248[2] = tc);
(statearr_26019_28248[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 10))
{var state_26006__$1 = state_26006;var statearr_26020_28249 = state_26006__$1;(statearr_26020_28249[2] = fc);
(statearr_26020_28249[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 11))
{var inst_25983 = (state_26006[7]);var inst_25993 = (state_26006[2]);var state_26006__$1 = state_26006;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26006__$1,8,inst_25993,inst_25983);
} else
{if((state_val_26007 === 12))
{var state_26006__$1 = state_26006;var statearr_26021_28250 = state_26006__$1;(statearr_26021_28250[2] = null);
(statearr_26021_28250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 13))
{var state_26006__$1 = state_26006;var statearr_26022_28251 = state_26006__$1;(statearr_26022_28251[2] = null);
(statearr_26022_28251[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26007 === 14))
{var inst_26000 = (state_26006[2]);var state_26006__$1 = state_26006;var statearr_26023_28252 = state_26006__$1;(statearr_26023_28252[2] = inst_26000);
(statearr_26023_28252[1] = 7);
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
});})(c__22463__auto___28238,tc,fc))
;return ((function (switch__22387__auto__,c__22463__auto___28238,tc,fc){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26027 = [null,null,null,null,null,null,null,null,null];(statearr_26027[0] = state_machine__22388__auto__);
(statearr_26027[1] = 1);
return statearr_26027;
});
var state_machine__22388__auto____1 = (function (state_26006){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26006);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26028){if((e26028 instanceof Object))
{var ex__22391__auto__ = e26028;var statearr_26029_28253 = state_26006;(statearr_26029_28253[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26006);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28254 = state_26006;
state_26006 = G__28254;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26006){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28238,tc,fc))
})();var state__22465__auto__ = (function (){var statearr_26030 = f__22464__auto__.call(null);(statearr_26030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28238);
return statearr_26030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28238,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26077){var state_val_26078 = (state_26077[1]);if((state_val_26078 === 7))
{var inst_26073 = (state_26077[2]);var state_26077__$1 = state_26077;var statearr_26079_28255 = state_26077__$1;(statearr_26079_28255[2] = inst_26073);
(statearr_26079_28255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26078 === 6))
{var inst_26063 = (state_26077[7]);var inst_26066 = (state_26077[8]);var inst_26070 = f.call(null,inst_26063,inst_26066);var inst_26063__$1 = inst_26070;var state_26077__$1 = (function (){var statearr_26080 = state_26077;(statearr_26080[7] = inst_26063__$1);
return statearr_26080;
})();var statearr_26081_28256 = state_26077__$1;(statearr_26081_28256[2] = null);
(statearr_26081_28256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26078 === 5))
{var inst_26063 = (state_26077[7]);var state_26077__$1 = state_26077;var statearr_26082_28257 = state_26077__$1;(statearr_26082_28257[2] = inst_26063);
(statearr_26082_28257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26078 === 4))
{var inst_26066 = (state_26077[8]);var inst_26066__$1 = (state_26077[2]);var inst_26067 = (inst_26066__$1 == null);var state_26077__$1 = (function (){var statearr_26083 = state_26077;(statearr_26083[8] = inst_26066__$1);
return statearr_26083;
})();if(cljs.core.truth_(inst_26067))
{var statearr_26084_28258 = state_26077__$1;(statearr_26084_28258[1] = 5);
} else
{var statearr_26085_28259 = state_26077__$1;(statearr_26085_28259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26078 === 3))
{var inst_26075 = (state_26077[2]);var state_26077__$1 = state_26077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26077__$1,inst_26075);
} else
{if((state_val_26078 === 2))
{var state_26077__$1 = state_26077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26077__$1,4,ch);
} else
{if((state_val_26078 === 1))
{var inst_26063 = init;var state_26077__$1 = (function (){var statearr_26086 = state_26077;(statearr_26086[7] = inst_26063);
return statearr_26086;
})();var statearr_26087_28260 = state_26077__$1;(statearr_26087_28260[2] = null);
(statearr_26087_28260[1] = 2);
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
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26091 = [null,null,null,null,null,null,null,null,null];(statearr_26091[0] = state_machine__22388__auto__);
(statearr_26091[1] = 1);
return statearr_26091;
});
var state_machine__22388__auto____1 = (function (state_26077){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26077);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26092){if((e26092 instanceof Object))
{var ex__22391__auto__ = e26092;var statearr_26093_28261 = state_26077;(statearr_26093_28261[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28262 = state_26077;
state_26077 = G__28262;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26077){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26094 = f__22464__auto__.call(null);(statearr_26094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_26168){var state_val_26169 = (state_26168[1]);if((state_val_26169 === 1))
{var inst_26144 = cljs.core.seq.call(null,coll);var inst_26145 = inst_26144;var state_26168__$1 = (function (){var statearr_26170 = state_26168;(statearr_26170[7] = inst_26145);
return statearr_26170;
})();var statearr_26171_28263 = state_26168__$1;(statearr_26171_28263[2] = null);
(statearr_26171_28263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 2))
{var inst_26145 = (state_26168[7]);var state_26168__$1 = state_26168;if(cljs.core.truth_(inst_26145))
{var statearr_26172_28264 = state_26168__$1;(statearr_26172_28264[1] = 4);
} else
{var statearr_26173_28265 = state_26168__$1;(statearr_26173_28265[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 3))
{var inst_26166 = (state_26168[2]);var state_26168__$1 = state_26168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26168__$1,inst_26166);
} else
{if((state_val_26169 === 4))
{var inst_26145 = (state_26168[7]);var inst_26148 = cljs.core.first.call(null,inst_26145);var state_26168__$1 = state_26168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26168__$1,7,ch,inst_26148);
} else
{if((state_val_26169 === 5))
{var inst_26145 = (state_26168[7]);var state_26168__$1 = state_26168;var statearr_26174_28266 = state_26168__$1;(statearr_26174_28266[2] = inst_26145);
(statearr_26174_28266[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 6))
{var inst_26153 = (state_26168[2]);var state_26168__$1 = state_26168;if(cljs.core.truth_(inst_26153))
{var statearr_26175_28267 = state_26168__$1;(statearr_26175_28267[1] = 8);
} else
{var statearr_26176_28268 = state_26168__$1;(statearr_26176_28268[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 7))
{var inst_26150 = (state_26168[2]);var state_26168__$1 = state_26168;var statearr_26177_28269 = state_26168__$1;(statearr_26177_28269[2] = inst_26150);
(statearr_26177_28269[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 8))
{var inst_26145 = (state_26168[7]);var inst_26155 = cljs.core.next.call(null,inst_26145);var inst_26145__$1 = inst_26155;var state_26168__$1 = (function (){var statearr_26178 = state_26168;(statearr_26178[7] = inst_26145__$1);
return statearr_26178;
})();var statearr_26179_28270 = state_26168__$1;(statearr_26179_28270[2] = null);
(statearr_26179_28270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 9))
{var state_26168__$1 = state_26168;if(cljs.core.truth_(close_QMARK_))
{var statearr_26180_28271 = state_26168__$1;(statearr_26180_28271[1] = 11);
} else
{var statearr_26181_28272 = state_26168__$1;(statearr_26181_28272[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 10))
{var inst_26164 = (state_26168[2]);var state_26168__$1 = state_26168;var statearr_26182_28273 = state_26168__$1;(statearr_26182_28273[2] = inst_26164);
(statearr_26182_28273[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 11))
{var inst_26159 = cljs.core.async.close_BANG_.call(null,ch);var state_26168__$1 = state_26168;var statearr_26183_28274 = state_26168__$1;(statearr_26183_28274[2] = inst_26159);
(statearr_26183_28274[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 12))
{var state_26168__$1 = state_26168;var statearr_26184_28275 = state_26168__$1;(statearr_26184_28275[2] = null);
(statearr_26184_28275[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26169 === 13))
{var inst_26162 = (state_26168[2]);var state_26168__$1 = state_26168;var statearr_26185_28276 = state_26168__$1;(statearr_26185_28276[2] = inst_26162);
(statearr_26185_28276[1] = 10);
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
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26189 = [null,null,null,null,null,null,null,null];(statearr_26189[0] = state_machine__22388__auto__);
(statearr_26189[1] = 1);
return statearr_26189;
});
var state_machine__22388__auto____1 = (function (state_26168){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26168);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object))
{var ex__22391__auto__ = e26190;var statearr_26191_28277 = state_26168;(statearr_26191_28277[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28278 = state_26168;
state_26168 = G__28278;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26168){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_26192 = f__22464__auto__.call(null);(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_26192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
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
cljs.core.async.Mux = (function (){var obj26194 = {};return obj26194;
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
cljs.core.async.Mult = (function (){var obj26196 = {};return obj26196;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t26418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26418 = (function (cs,ch,mult,meta26419){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26419 = meta26419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26418.cljs$lang$type = true;
cljs.core.async.t26418.cljs$lang$ctorStr = "cljs.core.async/t26418";
cljs.core.async.t26418.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26418");
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t26418.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26420){var self__ = this;
var _26420__$1 = this;return self__.meta26419;
});})(cs))
;
cljs.core.async.t26418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26420,meta26419__$1){var self__ = this;
var _26420__$1 = this;return (new cljs.core.async.t26418(self__.cs,self__.ch,self__.mult,meta26419__$1));
});})(cs))
;
cljs.core.async.__GT_t26418 = ((function (cs){
return (function __GT_t26418(cs__$1,ch__$1,mult__$1,meta26419){return (new cljs.core.async.t26418(cs__$1,ch__$1,mult__$1,meta26419));
});})(cs))
;
}
return (new cljs.core.async.t26418(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22463__auto___28279 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28279,cs,m,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28279,cs,m,dchan,dctr,done){
return (function (state_26551){var state_val_26552 = (state_26551[1]);if((state_val_26552 === 32))
{var inst_26491 = (state_26551[7]);var inst_26493 = (state_26551[8]);var inst_26492 = (state_26551[9]);var inst_26494 = (state_26551[10]);var inst_26506 = (state_26551[2]);var inst_26507 = (inst_26494 + 1);var tmp26553 = inst_26491;var tmp26554 = inst_26493;var tmp26555 = inst_26492;var inst_26491__$1 = tmp26553;var inst_26492__$1 = tmp26555;var inst_26493__$1 = tmp26554;var inst_26494__$1 = inst_26507;var state_26551__$1 = (function (){var statearr_26556 = state_26551;(statearr_26556[7] = inst_26491__$1);
(statearr_26556[11] = inst_26506);
(statearr_26556[8] = inst_26493__$1);
(statearr_26556[9] = inst_26492__$1);
(statearr_26556[10] = inst_26494__$1);
return statearr_26556;
})();var statearr_26557_28280 = state_26551__$1;(statearr_26557_28280[2] = null);
(statearr_26557_28280[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 1))
{var state_26551__$1 = state_26551;var statearr_26558_28281 = state_26551__$1;(statearr_26558_28281[2] = null);
(statearr_26558_28281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 33))
{var inst_26510 = (state_26551[12]);var inst_26512 = cljs.core.chunked_seq_QMARK_.call(null,inst_26510);var state_26551__$1 = state_26551;if(inst_26512)
{var statearr_26559_28282 = state_26551__$1;(statearr_26559_28282[1] = 36);
} else
{var statearr_26560_28283 = state_26551__$1;(statearr_26560_28283[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 2))
{var state_26551__$1 = state_26551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26551__$1,4,ch);
} else
{if((state_val_26552 === 34))
{var state_26551__$1 = state_26551;var statearr_26561_28284 = state_26551__$1;(statearr_26561_28284[2] = null);
(statearr_26561_28284[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 3))
{var inst_26549 = (state_26551[2]);var state_26551__$1 = state_26551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26551__$1,inst_26549);
} else
{if((state_val_26552 === 35))
{var inst_26533 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26562_28285 = state_26551__$1;(statearr_26562_28285[2] = inst_26533);
(statearr_26562_28285[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 4))
{var inst_26423 = (state_26551[13]);var inst_26423__$1 = (state_26551[2]);var inst_26424 = (inst_26423__$1 == null);var state_26551__$1 = (function (){var statearr_26563 = state_26551;(statearr_26563[13] = inst_26423__$1);
return statearr_26563;
})();if(cljs.core.truth_(inst_26424))
{var statearr_26564_28286 = state_26551__$1;(statearr_26564_28286[1] = 5);
} else
{var statearr_26565_28287 = state_26551__$1;(statearr_26565_28287[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 36))
{var inst_26510 = (state_26551[12]);var inst_26514 = cljs.core.chunk_first.call(null,inst_26510);var inst_26515 = cljs.core.chunk_rest.call(null,inst_26510);var inst_26516 = cljs.core.count.call(null,inst_26514);var inst_26491 = inst_26515;var inst_26492 = inst_26514;var inst_26493 = inst_26516;var inst_26494 = 0;var state_26551__$1 = (function (){var statearr_26566 = state_26551;(statearr_26566[7] = inst_26491);
(statearr_26566[8] = inst_26493);
(statearr_26566[9] = inst_26492);
(statearr_26566[10] = inst_26494);
return statearr_26566;
})();var statearr_26567_28288 = state_26551__$1;(statearr_26567_28288[2] = null);
(statearr_26567_28288[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 5))
{var inst_26430 = cljs.core.deref.call(null,cs);var inst_26431 = cljs.core.seq.call(null,inst_26430);var inst_26432 = inst_26431;var inst_26433 = null;var inst_26434 = 0;var inst_26435 = 0;var state_26551__$1 = (function (){var statearr_26568 = state_26551;(statearr_26568[14] = inst_26435);
(statearr_26568[15] = inst_26434);
(statearr_26568[16] = inst_26432);
(statearr_26568[17] = inst_26433);
return statearr_26568;
})();var statearr_26569_28289 = state_26551__$1;(statearr_26569_28289[2] = null);
(statearr_26569_28289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 37))
{var inst_26519 = (state_26551[18]);var inst_26510 = (state_26551[12]);var inst_26423 = (state_26551[13]);var inst_26519__$1 = cljs.core.first.call(null,inst_26510);var inst_26520 = cljs.core.async.put_BANG_.call(null,inst_26519__$1,inst_26423,done);var state_26551__$1 = (function (){var statearr_26570 = state_26551;(statearr_26570[18] = inst_26519__$1);
return statearr_26570;
})();if(cljs.core.truth_(inst_26520))
{var statearr_26571_28290 = state_26551__$1;(statearr_26571_28290[1] = 39);
} else
{var statearr_26572_28291 = state_26551__$1;(statearr_26572_28291[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 6))
{var inst_26483 = (state_26551[19]);var inst_26482 = cljs.core.deref.call(null,cs);var inst_26483__$1 = cljs.core.keys.call(null,inst_26482);var inst_26484 = cljs.core.count.call(null,inst_26483__$1);var inst_26485 = cljs.core.reset_BANG_.call(null,dctr,inst_26484);var inst_26490 = cljs.core.seq.call(null,inst_26483__$1);var inst_26491 = inst_26490;var inst_26492 = null;var inst_26493 = 0;var inst_26494 = 0;var state_26551__$1 = (function (){var statearr_26573 = state_26551;(statearr_26573[7] = inst_26491);
(statearr_26573[20] = inst_26485);
(statearr_26573[19] = inst_26483__$1);
(statearr_26573[8] = inst_26493);
(statearr_26573[9] = inst_26492);
(statearr_26573[10] = inst_26494);
return statearr_26573;
})();var statearr_26574_28292 = state_26551__$1;(statearr_26574_28292[2] = null);
(statearr_26574_28292[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 38))
{var inst_26530 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26575_28293 = state_26551__$1;(statearr_26575_28293[2] = inst_26530);
(statearr_26575_28293[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 7))
{var inst_26547 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26576_28294 = state_26551__$1;(statearr_26576_28294[2] = inst_26547);
(statearr_26576_28294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 39))
{var state_26551__$1 = state_26551;var statearr_26577_28295 = state_26551__$1;(statearr_26577_28295[2] = null);
(statearr_26577_28295[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 8))
{var inst_26435 = (state_26551[14]);var inst_26434 = (state_26551[15]);var inst_26437 = (inst_26435 < inst_26434);var inst_26438 = inst_26437;var state_26551__$1 = state_26551;if(cljs.core.truth_(inst_26438))
{var statearr_26578_28296 = state_26551__$1;(statearr_26578_28296[1] = 10);
} else
{var statearr_26579_28297 = state_26551__$1;(statearr_26579_28297[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 40))
{var inst_26519 = (state_26551[18]);var inst_26523 = done.call(null,null);var inst_26524 = cljs.core.async.untap_STAR_.call(null,m,inst_26519);var state_26551__$1 = (function (){var statearr_26580 = state_26551;(statearr_26580[21] = inst_26523);
return statearr_26580;
})();var statearr_26581_28298 = state_26551__$1;(statearr_26581_28298[2] = inst_26524);
(statearr_26581_28298[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 9))
{var inst_26480 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26582_28299 = state_26551__$1;(statearr_26582_28299[2] = inst_26480);
(statearr_26582_28299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 41))
{var inst_26510 = (state_26551[12]);var inst_26526 = (state_26551[2]);var inst_26527 = cljs.core.next.call(null,inst_26510);var inst_26491 = inst_26527;var inst_26492 = null;var inst_26493 = 0;var inst_26494 = 0;var state_26551__$1 = (function (){var statearr_26583 = state_26551;(statearr_26583[7] = inst_26491);
(statearr_26583[22] = inst_26526);
(statearr_26583[8] = inst_26493);
(statearr_26583[9] = inst_26492);
(statearr_26583[10] = inst_26494);
return statearr_26583;
})();var statearr_26584_28300 = state_26551__$1;(statearr_26584_28300[2] = null);
(statearr_26584_28300[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 10))
{var inst_26435 = (state_26551[14]);var inst_26433 = (state_26551[17]);var inst_26441 = cljs.core._nth.call(null,inst_26433,inst_26435);var inst_26442 = cljs.core.nth.call(null,inst_26441,0,null);var inst_26443 = cljs.core.nth.call(null,inst_26441,1,null);var state_26551__$1 = (function (){var statearr_26585 = state_26551;(statearr_26585[23] = inst_26442);
return statearr_26585;
})();if(cljs.core.truth_(inst_26443))
{var statearr_26586_28301 = state_26551__$1;(statearr_26586_28301[1] = 13);
} else
{var statearr_26587_28302 = state_26551__$1;(statearr_26587_28302[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 42))
{var state_26551__$1 = state_26551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26551__$1,45,dchan);
} else
{if((state_val_26552 === 11))
{var inst_26432 = (state_26551[16]);var inst_26452 = (state_26551[24]);var inst_26452__$1 = cljs.core.seq.call(null,inst_26432);var state_26551__$1 = (function (){var statearr_26588 = state_26551;(statearr_26588[24] = inst_26452__$1);
return statearr_26588;
})();if(inst_26452__$1)
{var statearr_26589_28303 = state_26551__$1;(statearr_26589_28303[1] = 16);
} else
{var statearr_26590_28304 = state_26551__$1;(statearr_26590_28304[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 43))
{var state_26551__$1 = state_26551;var statearr_26591_28305 = state_26551__$1;(statearr_26591_28305[2] = null);
(statearr_26591_28305[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 12))
{var inst_26478 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26592_28306 = state_26551__$1;(statearr_26592_28306[2] = inst_26478);
(statearr_26592_28306[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 44))
{var inst_26544 = (state_26551[2]);var state_26551__$1 = (function (){var statearr_26593 = state_26551;(statearr_26593[25] = inst_26544);
return statearr_26593;
})();var statearr_26594_28307 = state_26551__$1;(statearr_26594_28307[2] = null);
(statearr_26594_28307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 13))
{var inst_26442 = (state_26551[23]);var inst_26445 = cljs.core.async.close_BANG_.call(null,inst_26442);var state_26551__$1 = state_26551;var statearr_26595_28308 = state_26551__$1;(statearr_26595_28308[2] = inst_26445);
(statearr_26595_28308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 45))
{var inst_26541 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26599_28309 = state_26551__$1;(statearr_26599_28309[2] = inst_26541);
(statearr_26599_28309[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 14))
{var state_26551__$1 = state_26551;var statearr_26600_28310 = state_26551__$1;(statearr_26600_28310[2] = null);
(statearr_26600_28310[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 15))
{var inst_26435 = (state_26551[14]);var inst_26434 = (state_26551[15]);var inst_26432 = (state_26551[16]);var inst_26433 = (state_26551[17]);var inst_26448 = (state_26551[2]);var inst_26449 = (inst_26435 + 1);var tmp26596 = inst_26434;var tmp26597 = inst_26432;var tmp26598 = inst_26433;var inst_26432__$1 = tmp26597;var inst_26433__$1 = tmp26598;var inst_26434__$1 = tmp26596;var inst_26435__$1 = inst_26449;var state_26551__$1 = (function (){var statearr_26601 = state_26551;(statearr_26601[14] = inst_26435__$1);
(statearr_26601[15] = inst_26434__$1);
(statearr_26601[16] = inst_26432__$1);
(statearr_26601[17] = inst_26433__$1);
(statearr_26601[26] = inst_26448);
return statearr_26601;
})();var statearr_26602_28311 = state_26551__$1;(statearr_26602_28311[2] = null);
(statearr_26602_28311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 16))
{var inst_26452 = (state_26551[24]);var inst_26454 = cljs.core.chunked_seq_QMARK_.call(null,inst_26452);var state_26551__$1 = state_26551;if(inst_26454)
{var statearr_26603_28312 = state_26551__$1;(statearr_26603_28312[1] = 19);
} else
{var statearr_26604_28313 = state_26551__$1;(statearr_26604_28313[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 17))
{var state_26551__$1 = state_26551;var statearr_26605_28314 = state_26551__$1;(statearr_26605_28314[2] = null);
(statearr_26605_28314[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 18))
{var inst_26476 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26606_28315 = state_26551__$1;(statearr_26606_28315[2] = inst_26476);
(statearr_26606_28315[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 19))
{var inst_26452 = (state_26551[24]);var inst_26456 = cljs.core.chunk_first.call(null,inst_26452);var inst_26457 = cljs.core.chunk_rest.call(null,inst_26452);var inst_26458 = cljs.core.count.call(null,inst_26456);var inst_26432 = inst_26457;var inst_26433 = inst_26456;var inst_26434 = inst_26458;var inst_26435 = 0;var state_26551__$1 = (function (){var statearr_26607 = state_26551;(statearr_26607[14] = inst_26435);
(statearr_26607[15] = inst_26434);
(statearr_26607[16] = inst_26432);
(statearr_26607[17] = inst_26433);
return statearr_26607;
})();var statearr_26608_28316 = state_26551__$1;(statearr_26608_28316[2] = null);
(statearr_26608_28316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 20))
{var inst_26452 = (state_26551[24]);var inst_26462 = cljs.core.first.call(null,inst_26452);var inst_26463 = cljs.core.nth.call(null,inst_26462,0,null);var inst_26464 = cljs.core.nth.call(null,inst_26462,1,null);var state_26551__$1 = (function (){var statearr_26609 = state_26551;(statearr_26609[27] = inst_26463);
return statearr_26609;
})();if(cljs.core.truth_(inst_26464))
{var statearr_26610_28317 = state_26551__$1;(statearr_26610_28317[1] = 22);
} else
{var statearr_26611_28318 = state_26551__$1;(statearr_26611_28318[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 21))
{var inst_26473 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26612_28319 = state_26551__$1;(statearr_26612_28319[2] = inst_26473);
(statearr_26612_28319[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 22))
{var inst_26463 = (state_26551[27]);var inst_26466 = cljs.core.async.close_BANG_.call(null,inst_26463);var state_26551__$1 = state_26551;var statearr_26613_28320 = state_26551__$1;(statearr_26613_28320[2] = inst_26466);
(statearr_26613_28320[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 23))
{var state_26551__$1 = state_26551;var statearr_26614_28321 = state_26551__$1;(statearr_26614_28321[2] = null);
(statearr_26614_28321[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 24))
{var inst_26452 = (state_26551[24]);var inst_26469 = (state_26551[2]);var inst_26470 = cljs.core.next.call(null,inst_26452);var inst_26432 = inst_26470;var inst_26433 = null;var inst_26434 = 0;var inst_26435 = 0;var state_26551__$1 = (function (){var statearr_26615 = state_26551;(statearr_26615[14] = inst_26435);
(statearr_26615[15] = inst_26434);
(statearr_26615[16] = inst_26432);
(statearr_26615[17] = inst_26433);
(statearr_26615[28] = inst_26469);
return statearr_26615;
})();var statearr_26616_28322 = state_26551__$1;(statearr_26616_28322[2] = null);
(statearr_26616_28322[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 25))
{var inst_26493 = (state_26551[8]);var inst_26494 = (state_26551[10]);var inst_26496 = (inst_26494 < inst_26493);var inst_26497 = inst_26496;var state_26551__$1 = state_26551;if(cljs.core.truth_(inst_26497))
{var statearr_26617_28323 = state_26551__$1;(statearr_26617_28323[1] = 27);
} else
{var statearr_26618_28324 = state_26551__$1;(statearr_26618_28324[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 26))
{var inst_26483 = (state_26551[19]);var inst_26537 = (state_26551[2]);var inst_26538 = cljs.core.seq.call(null,inst_26483);var state_26551__$1 = (function (){var statearr_26619 = state_26551;(statearr_26619[29] = inst_26537);
return statearr_26619;
})();if(inst_26538)
{var statearr_26620_28325 = state_26551__$1;(statearr_26620_28325[1] = 42);
} else
{var statearr_26621_28326 = state_26551__$1;(statearr_26621_28326[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 27))
{var inst_26423 = (state_26551[13]);var inst_26499 = (state_26551[30]);var inst_26492 = (state_26551[9]);var inst_26494 = (state_26551[10]);var inst_26499__$1 = cljs.core._nth.call(null,inst_26492,inst_26494);var inst_26500 = cljs.core.async.put_BANG_.call(null,inst_26499__$1,inst_26423,done);var state_26551__$1 = (function (){var statearr_26622 = state_26551;(statearr_26622[30] = inst_26499__$1);
return statearr_26622;
})();if(cljs.core.truth_(inst_26500))
{var statearr_26623_28327 = state_26551__$1;(statearr_26623_28327[1] = 30);
} else
{var statearr_26624_28328 = state_26551__$1;(statearr_26624_28328[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 28))
{var inst_26491 = (state_26551[7]);var inst_26510 = (state_26551[12]);var inst_26510__$1 = cljs.core.seq.call(null,inst_26491);var state_26551__$1 = (function (){var statearr_26625 = state_26551;(statearr_26625[12] = inst_26510__$1);
return statearr_26625;
})();if(inst_26510__$1)
{var statearr_26626_28329 = state_26551__$1;(statearr_26626_28329[1] = 33);
} else
{var statearr_26627_28330 = state_26551__$1;(statearr_26627_28330[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 29))
{var inst_26535 = (state_26551[2]);var state_26551__$1 = state_26551;var statearr_26628_28331 = state_26551__$1;(statearr_26628_28331[2] = inst_26535);
(statearr_26628_28331[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 30))
{var state_26551__$1 = state_26551;var statearr_26629_28332 = state_26551__$1;(statearr_26629_28332[2] = null);
(statearr_26629_28332[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26552 === 31))
{var inst_26499 = (state_26551[30]);var inst_26503 = done.call(null,null);var inst_26504 = cljs.core.async.untap_STAR_.call(null,m,inst_26499);var state_26551__$1 = (function (){var statearr_26630 = state_26551;(statearr_26630[31] = inst_26503);
return statearr_26630;
})();var statearr_26631_28333 = state_26551__$1;(statearr_26631_28333[2] = inst_26504);
(statearr_26631_28333[1] = 32);
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
});})(c__22463__auto___28279,cs,m,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28279,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26635[0] = state_machine__22388__auto__);
(statearr_26635[1] = 1);
return statearr_26635;
});
var state_machine__22388__auto____1 = (function (state_26551){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26551);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object))
{var ex__22391__auto__ = e26636;var statearr_26637_28334 = state_26551;(statearr_26637_28334[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28335 = state_26551;
state_26551 = G__28335;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26551){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28279,cs,m,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_26638 = f__22464__auto__.call(null);(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28279);
return statearr_26638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28279,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj26640 = {};return obj26640;
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
;var m = (function (){if(typeof cljs.core.async.t26760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26760 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26761){
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
this.meta26761 = meta26761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26760.cljs$lang$type = true;
cljs.core.async.t26760.cljs$lang$ctorStr = "cljs.core.async/t26760";
cljs.core.async.t26760.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26760");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26762){var self__ = this;
var _26762__$1 = this;return self__.meta26761;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26762,meta26761__$1){var self__ = this;
var _26762__$1 = this;return (new cljs.core.async.t26760(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26761__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26760 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26760(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26761){return (new cljs.core.async.t26760(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26761));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26760(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22463__auto___28336 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26832){var state_val_26833 = (state_26832[1]);if((state_val_26833 === 1))
{var inst_26766 = (state_26832[7]);var inst_26766__$1 = calc_state.call(null);var inst_26767 = cljs.core.seq_QMARK_.call(null,inst_26766__$1);var state_26832__$1 = (function (){var statearr_26834 = state_26832;(statearr_26834[7] = inst_26766__$1);
return statearr_26834;
})();if(inst_26767)
{var statearr_26835_28337 = state_26832__$1;(statearr_26835_28337[1] = 2);
} else
{var statearr_26836_28338 = state_26832__$1;(statearr_26836_28338[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 2))
{var inst_26766 = (state_26832[7]);var inst_26769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26766);var state_26832__$1 = state_26832;var statearr_26837_28339 = state_26832__$1;(statearr_26837_28339[2] = inst_26769);
(statearr_26837_28339[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 3))
{var inst_26766 = (state_26832[7]);var state_26832__$1 = state_26832;var statearr_26838_28340 = state_26832__$1;(statearr_26838_28340[2] = inst_26766);
(statearr_26838_28340[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 4))
{var inst_26766 = (state_26832[7]);var inst_26772 = (state_26832[2]);var inst_26773 = cljs.core.get.call(null,inst_26772,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26774 = cljs.core.get.call(null,inst_26772,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26775 = cljs.core.get.call(null,inst_26772,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26776 = inst_26766;var state_26832__$1 = (function (){var statearr_26839 = state_26832;(statearr_26839[8] = inst_26776);
(statearr_26839[9] = inst_26775);
(statearr_26839[10] = inst_26773);
(statearr_26839[11] = inst_26774);
return statearr_26839;
})();var statearr_26840_28341 = state_26832__$1;(statearr_26840_28341[2] = null);
(statearr_26840_28341[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 5))
{var inst_26776 = (state_26832[8]);var inst_26779 = cljs.core.seq_QMARK_.call(null,inst_26776);var state_26832__$1 = state_26832;if(inst_26779)
{var statearr_26841_28342 = state_26832__$1;(statearr_26841_28342[1] = 7);
} else
{var statearr_26842_28343 = state_26832__$1;(statearr_26842_28343[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 6))
{var inst_26830 = (state_26832[2]);var state_26832__$1 = state_26832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26832__$1,inst_26830);
} else
{if((state_val_26833 === 7))
{var inst_26776 = (state_26832[8]);var inst_26781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26776);var state_26832__$1 = state_26832;var statearr_26843_28344 = state_26832__$1;(statearr_26843_28344[2] = inst_26781);
(statearr_26843_28344[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 8))
{var inst_26776 = (state_26832[8]);var state_26832__$1 = state_26832;var statearr_26844_28345 = state_26832__$1;(statearr_26844_28345[2] = inst_26776);
(statearr_26844_28345[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 9))
{var inst_26784 = (state_26832[12]);var inst_26784__$1 = (state_26832[2]);var inst_26785 = cljs.core.get.call(null,inst_26784__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26786 = cljs.core.get.call(null,inst_26784__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26787 = cljs.core.get.call(null,inst_26784__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26832__$1 = (function (){var statearr_26845 = state_26832;(statearr_26845[12] = inst_26784__$1);
(statearr_26845[13] = inst_26787);
(statearr_26845[14] = inst_26786);
return statearr_26845;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26832__$1,10,inst_26785);
} else
{if((state_val_26833 === 10))
{var inst_26792 = (state_26832[15]);var inst_26791 = (state_26832[16]);var inst_26790 = (state_26832[2]);var inst_26791__$1 = cljs.core.nth.call(null,inst_26790,0,null);var inst_26792__$1 = cljs.core.nth.call(null,inst_26790,1,null);var inst_26793 = (inst_26791__$1 == null);var inst_26794 = cljs.core._EQ_.call(null,inst_26792__$1,change);var inst_26795 = (inst_26793) || (inst_26794);var state_26832__$1 = (function (){var statearr_26846 = state_26832;(statearr_26846[15] = inst_26792__$1);
(statearr_26846[16] = inst_26791__$1);
return statearr_26846;
})();if(cljs.core.truth_(inst_26795))
{var statearr_26847_28346 = state_26832__$1;(statearr_26847_28346[1] = 11);
} else
{var statearr_26848_28347 = state_26832__$1;(statearr_26848_28347[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 11))
{var inst_26791 = (state_26832[16]);var inst_26797 = (inst_26791 == null);var state_26832__$1 = state_26832;if(cljs.core.truth_(inst_26797))
{var statearr_26849_28348 = state_26832__$1;(statearr_26849_28348[1] = 14);
} else
{var statearr_26850_28349 = state_26832__$1;(statearr_26850_28349[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 12))
{var inst_26806 = (state_26832[17]);var inst_26787 = (state_26832[13]);var inst_26792 = (state_26832[15]);var inst_26806__$1 = inst_26787.call(null,inst_26792);var state_26832__$1 = (function (){var statearr_26851 = state_26832;(statearr_26851[17] = inst_26806__$1);
return statearr_26851;
})();if(cljs.core.truth_(inst_26806__$1))
{var statearr_26852_28350 = state_26832__$1;(statearr_26852_28350[1] = 17);
} else
{var statearr_26853_28351 = state_26832__$1;(statearr_26853_28351[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 13))
{var inst_26828 = (state_26832[2]);var state_26832__$1 = state_26832;var statearr_26854_28352 = state_26832__$1;(statearr_26854_28352[2] = inst_26828);
(statearr_26854_28352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 14))
{var inst_26792 = (state_26832[15]);var inst_26799 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26792);var state_26832__$1 = state_26832;var statearr_26855_28353 = state_26832__$1;(statearr_26855_28353[2] = inst_26799);
(statearr_26855_28353[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 15))
{var state_26832__$1 = state_26832;var statearr_26856_28354 = state_26832__$1;(statearr_26856_28354[2] = null);
(statearr_26856_28354[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 16))
{var inst_26802 = (state_26832[2]);var inst_26803 = calc_state.call(null);var inst_26776 = inst_26803;var state_26832__$1 = (function (){var statearr_26857 = state_26832;(statearr_26857[18] = inst_26802);
(statearr_26857[8] = inst_26776);
return statearr_26857;
})();var statearr_26858_28355 = state_26832__$1;(statearr_26858_28355[2] = null);
(statearr_26858_28355[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 17))
{var inst_26806 = (state_26832[17]);var state_26832__$1 = state_26832;var statearr_26859_28356 = state_26832__$1;(statearr_26859_28356[2] = inst_26806);
(statearr_26859_28356[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 18))
{var inst_26787 = (state_26832[13]);var inst_26792 = (state_26832[15]);var inst_26786 = (state_26832[14]);var inst_26809 = cljs.core.empty_QMARK_.call(null,inst_26787);var inst_26810 = inst_26786.call(null,inst_26792);var inst_26811 = cljs.core.not.call(null,inst_26810);var inst_26812 = (inst_26809) && (inst_26811);var state_26832__$1 = state_26832;var statearr_26860_28357 = state_26832__$1;(statearr_26860_28357[2] = inst_26812);
(statearr_26860_28357[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 19))
{var inst_26814 = (state_26832[2]);var state_26832__$1 = state_26832;if(cljs.core.truth_(inst_26814))
{var statearr_26861_28358 = state_26832__$1;(statearr_26861_28358[1] = 20);
} else
{var statearr_26862_28359 = state_26832__$1;(statearr_26862_28359[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 20))
{var inst_26791 = (state_26832[16]);var state_26832__$1 = state_26832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26832__$1,23,out,inst_26791);
} else
{if((state_val_26833 === 21))
{var inst_26784 = (state_26832[12]);var inst_26776 = inst_26784;var state_26832__$1 = (function (){var statearr_26863 = state_26832;(statearr_26863[8] = inst_26776);
return statearr_26863;
})();var statearr_26864_28360 = state_26832__$1;(statearr_26864_28360[2] = null);
(statearr_26864_28360[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 22))
{var inst_26826 = (state_26832[2]);var state_26832__$1 = state_26832;var statearr_26865_28361 = state_26832__$1;(statearr_26865_28361[2] = inst_26826);
(statearr_26865_28361[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 23))
{var inst_26817 = (state_26832[2]);var state_26832__$1 = state_26832;if(cljs.core.truth_(inst_26817))
{var statearr_26866_28362 = state_26832__$1;(statearr_26866_28362[1] = 24);
} else
{var statearr_26867_28363 = state_26832__$1;(statearr_26867_28363[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 24))
{var inst_26784 = (state_26832[12]);var inst_26776 = inst_26784;var state_26832__$1 = (function (){var statearr_26868 = state_26832;(statearr_26868[8] = inst_26776);
return statearr_26868;
})();var statearr_26869_28364 = state_26832__$1;(statearr_26869_28364[2] = null);
(statearr_26869_28364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 25))
{var state_26832__$1 = state_26832;var statearr_26870_28365 = state_26832__$1;(statearr_26870_28365[2] = null);
(statearr_26870_28365[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26833 === 26))
{var inst_26822 = (state_26832[2]);var state_26832__$1 = state_26832;var statearr_26871_28366 = state_26832__$1;(statearr_26871_28366[2] = inst_26822);
(statearr_26871_28366[1] = 22);
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
});})(c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22387__auto__,c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_26875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26875[0] = state_machine__22388__auto__);
(statearr_26875[1] = 1);
return statearr_26875;
});
var state_machine__22388__auto____1 = (function (state_26832){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_26832);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e26876){if((e26876 instanceof Object))
{var ex__22391__auto__ = e26876;var statearr_26877_28367 = state_26832;(statearr_26877_28367[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26832);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28368 = state_26832;
state_26832 = G__28368;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_26832){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_26832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22465__auto__ = (function (){var statearr_26878 = f__22464__auto__.call(null);(statearr_26878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28336);
return statearr_26878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28336,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj26880 = {};return obj26880;
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
return (function (p1__26881_SHARP_){if(cljs.core.truth_(p1__26881_SHARP_.call(null,topic)))
{return p1__26881_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26881_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27004 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27005){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27005 = meta27005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27004.cljs$lang$type = true;
cljs.core.async.t27004.cljs$lang$ctorStr = "cljs.core.async/t27004";
cljs.core.async.t27004.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27004");
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27006){var self__ = this;
var _27006__$1 = this;return self__.meta27005;
});})(mults,ensure_mult))
;
cljs.core.async.t27004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27006,meta27005__$1){var self__ = this;
var _27006__$1 = this;return (new cljs.core.async.t27004(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27005__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27004 = ((function (mults,ensure_mult){
return (function __GT_t27004(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27005){return (new cljs.core.async.t27004(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27005));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27004(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22463__auto___28369 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28369,mults,ensure_mult,p){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28369,mults,ensure_mult,p){
return (function (state_27078){var state_val_27079 = (state_27078[1]);if((state_val_27079 === 1))
{var state_27078__$1 = state_27078;var statearr_27080_28370 = state_27078__$1;(statearr_27080_28370[2] = null);
(statearr_27080_28370[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 2))
{var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27078__$1,4,ch);
} else
{if((state_val_27079 === 3))
{var inst_27076 = (state_27078[2]);var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27078__$1,inst_27076);
} else
{if((state_val_27079 === 4))
{var inst_27009 = (state_27078[7]);var inst_27009__$1 = (state_27078[2]);var inst_27010 = (inst_27009__$1 == null);var state_27078__$1 = (function (){var statearr_27081 = state_27078;(statearr_27081[7] = inst_27009__$1);
return statearr_27081;
})();if(cljs.core.truth_(inst_27010))
{var statearr_27082_28371 = state_27078__$1;(statearr_27082_28371[1] = 5);
} else
{var statearr_27083_28372 = state_27078__$1;(statearr_27083_28372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 5))
{var inst_27016 = cljs.core.deref.call(null,mults);var inst_27017 = cljs.core.vals.call(null,inst_27016);var inst_27018 = cljs.core.seq.call(null,inst_27017);var inst_27019 = inst_27018;var inst_27020 = null;var inst_27021 = 0;var inst_27022 = 0;var state_27078__$1 = (function (){var statearr_27084 = state_27078;(statearr_27084[8] = inst_27021);
(statearr_27084[9] = inst_27019);
(statearr_27084[10] = inst_27020);
(statearr_27084[11] = inst_27022);
return statearr_27084;
})();var statearr_27085_28373 = state_27078__$1;(statearr_27085_28373[2] = null);
(statearr_27085_28373[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 6))
{var inst_27009 = (state_27078[7]);var inst_27059 = (state_27078[12]);var inst_27057 = (state_27078[13]);var inst_27057__$1 = topic_fn.call(null,inst_27009);var inst_27058 = cljs.core.deref.call(null,mults);var inst_27059__$1 = cljs.core.get.call(null,inst_27058,inst_27057__$1);var state_27078__$1 = (function (){var statearr_27086 = state_27078;(statearr_27086[12] = inst_27059__$1);
(statearr_27086[13] = inst_27057__$1);
return statearr_27086;
})();if(cljs.core.truth_(inst_27059__$1))
{var statearr_27087_28374 = state_27078__$1;(statearr_27087_28374[1] = 19);
} else
{var statearr_27088_28375 = state_27078__$1;(statearr_27088_28375[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 7))
{var inst_27074 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27089_28376 = state_27078__$1;(statearr_27089_28376[2] = inst_27074);
(statearr_27089_28376[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 8))
{var inst_27021 = (state_27078[8]);var inst_27022 = (state_27078[11]);var inst_27024 = (inst_27022 < inst_27021);var inst_27025 = inst_27024;var state_27078__$1 = state_27078;if(cljs.core.truth_(inst_27025))
{var statearr_27093_28377 = state_27078__$1;(statearr_27093_28377[1] = 10);
} else
{var statearr_27094_28378 = state_27078__$1;(statearr_27094_28378[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 9))
{var inst_27055 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27095_28379 = state_27078__$1;(statearr_27095_28379[2] = inst_27055);
(statearr_27095_28379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 10))
{var inst_27021 = (state_27078[8]);var inst_27019 = (state_27078[9]);var inst_27020 = (state_27078[10]);var inst_27022 = (state_27078[11]);var inst_27027 = cljs.core._nth.call(null,inst_27020,inst_27022);var inst_27028 = cljs.core.async.muxch_STAR_.call(null,inst_27027);var inst_27029 = cljs.core.async.close_BANG_.call(null,inst_27028);var inst_27030 = (inst_27022 + 1);var tmp27090 = inst_27021;var tmp27091 = inst_27019;var tmp27092 = inst_27020;var inst_27019__$1 = tmp27091;var inst_27020__$1 = tmp27092;var inst_27021__$1 = tmp27090;var inst_27022__$1 = inst_27030;var state_27078__$1 = (function (){var statearr_27096 = state_27078;(statearr_27096[14] = inst_27029);
(statearr_27096[8] = inst_27021__$1);
(statearr_27096[9] = inst_27019__$1);
(statearr_27096[10] = inst_27020__$1);
(statearr_27096[11] = inst_27022__$1);
return statearr_27096;
})();var statearr_27097_28380 = state_27078__$1;(statearr_27097_28380[2] = null);
(statearr_27097_28380[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 11))
{var inst_27033 = (state_27078[15]);var inst_27019 = (state_27078[9]);var inst_27033__$1 = cljs.core.seq.call(null,inst_27019);var state_27078__$1 = (function (){var statearr_27098 = state_27078;(statearr_27098[15] = inst_27033__$1);
return statearr_27098;
})();if(inst_27033__$1)
{var statearr_27099_28381 = state_27078__$1;(statearr_27099_28381[1] = 13);
} else
{var statearr_27100_28382 = state_27078__$1;(statearr_27100_28382[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 12))
{var inst_27053 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27101_28383 = state_27078__$1;(statearr_27101_28383[2] = inst_27053);
(statearr_27101_28383[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 13))
{var inst_27033 = (state_27078[15]);var inst_27035 = cljs.core.chunked_seq_QMARK_.call(null,inst_27033);var state_27078__$1 = state_27078;if(inst_27035)
{var statearr_27102_28384 = state_27078__$1;(statearr_27102_28384[1] = 16);
} else
{var statearr_27103_28385 = state_27078__$1;(statearr_27103_28385[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 14))
{var state_27078__$1 = state_27078;var statearr_27104_28386 = state_27078__$1;(statearr_27104_28386[2] = null);
(statearr_27104_28386[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 15))
{var inst_27051 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27105_28387 = state_27078__$1;(statearr_27105_28387[2] = inst_27051);
(statearr_27105_28387[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 16))
{var inst_27033 = (state_27078[15]);var inst_27037 = cljs.core.chunk_first.call(null,inst_27033);var inst_27038 = cljs.core.chunk_rest.call(null,inst_27033);var inst_27039 = cljs.core.count.call(null,inst_27037);var inst_27019 = inst_27038;var inst_27020 = inst_27037;var inst_27021 = inst_27039;var inst_27022 = 0;var state_27078__$1 = (function (){var statearr_27106 = state_27078;(statearr_27106[8] = inst_27021);
(statearr_27106[9] = inst_27019);
(statearr_27106[10] = inst_27020);
(statearr_27106[11] = inst_27022);
return statearr_27106;
})();var statearr_27107_28388 = state_27078__$1;(statearr_27107_28388[2] = null);
(statearr_27107_28388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 17))
{var inst_27033 = (state_27078[15]);var inst_27042 = cljs.core.first.call(null,inst_27033);var inst_27043 = cljs.core.async.muxch_STAR_.call(null,inst_27042);var inst_27044 = cljs.core.async.close_BANG_.call(null,inst_27043);var inst_27045 = cljs.core.next.call(null,inst_27033);var inst_27019 = inst_27045;var inst_27020 = null;var inst_27021 = 0;var inst_27022 = 0;var state_27078__$1 = (function (){var statearr_27108 = state_27078;(statearr_27108[16] = inst_27044);
(statearr_27108[8] = inst_27021);
(statearr_27108[9] = inst_27019);
(statearr_27108[10] = inst_27020);
(statearr_27108[11] = inst_27022);
return statearr_27108;
})();var statearr_27109_28389 = state_27078__$1;(statearr_27109_28389[2] = null);
(statearr_27109_28389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 18))
{var inst_27048 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27110_28390 = state_27078__$1;(statearr_27110_28390[2] = inst_27048);
(statearr_27110_28390[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 19))
{var inst_27009 = (state_27078[7]);var inst_27059 = (state_27078[12]);var inst_27061 = cljs.core.async.muxch_STAR_.call(null,inst_27059);var state_27078__$1 = state_27078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27078__$1,22,inst_27061,inst_27009);
} else
{if((state_val_27079 === 20))
{var state_27078__$1 = state_27078;var statearr_27111_28391 = state_27078__$1;(statearr_27111_28391[2] = null);
(statearr_27111_28391[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 21))
{var inst_27071 = (state_27078[2]);var state_27078__$1 = (function (){var statearr_27112 = state_27078;(statearr_27112[17] = inst_27071);
return statearr_27112;
})();var statearr_27113_28392 = state_27078__$1;(statearr_27113_28392[2] = null);
(statearr_27113_28392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 22))
{var inst_27063 = (state_27078[2]);var state_27078__$1 = state_27078;if(cljs.core.truth_(inst_27063))
{var statearr_27114_28393 = state_27078__$1;(statearr_27114_28393[1] = 23);
} else
{var statearr_27115_28394 = state_27078__$1;(statearr_27115_28394[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 23))
{var state_27078__$1 = state_27078;var statearr_27116_28395 = state_27078__$1;(statearr_27116_28395[2] = null);
(statearr_27116_28395[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 24))
{var inst_27057 = (state_27078[13]);var inst_27066 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27057);var state_27078__$1 = state_27078;var statearr_27117_28396 = state_27078__$1;(statearr_27117_28396[2] = inst_27066);
(statearr_27117_28396[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27079 === 25))
{var inst_27068 = (state_27078[2]);var state_27078__$1 = state_27078;var statearr_27118_28397 = state_27078__$1;(statearr_27118_28397[2] = inst_27068);
(statearr_27118_28397[1] = 21);
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
});})(c__22463__auto___28369,mults,ensure_mult,p))
;return ((function (switch__22387__auto__,c__22463__auto___28369,mults,ensure_mult,p){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27122[0] = state_machine__22388__auto__);
(statearr_27122[1] = 1);
return statearr_27122;
});
var state_machine__22388__auto____1 = (function (state_27078){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27078);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27123){if((e27123 instanceof Object))
{var ex__22391__auto__ = e27123;var statearr_27124_28398 = state_27078;(statearr_27124_28398[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28399 = state_27078;
state_27078 = G__28399;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27078){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28369,mults,ensure_mult,p))
})();var state__22465__auto__ = (function (){var statearr_27125 = f__22464__auto__.call(null);(statearr_27125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28369);
return statearr_27125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28369,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__22463__auto___28400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27232){var state_val_27233 = (state_27232[1]);if((state_val_27233 === 1))
{var state_27232__$1 = state_27232;var statearr_27234_28401 = state_27232__$1;(statearr_27234_28401[2] = null);
(statearr_27234_28401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 2))
{var inst_27195 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27196 = 0;var state_27232__$1 = (function (){var statearr_27235 = state_27232;(statearr_27235[7] = inst_27196);
(statearr_27235[8] = inst_27195);
return statearr_27235;
})();var statearr_27236_28402 = state_27232__$1;(statearr_27236_28402[2] = null);
(statearr_27236_28402[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 3))
{var inst_27230 = (state_27232[2]);var state_27232__$1 = state_27232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27232__$1,inst_27230);
} else
{if((state_val_27233 === 4))
{var inst_27196 = (state_27232[7]);var inst_27198 = (inst_27196 < cnt);var state_27232__$1 = state_27232;if(cljs.core.truth_(inst_27198))
{var statearr_27237_28403 = state_27232__$1;(statearr_27237_28403[1] = 6);
} else
{var statearr_27238_28404 = state_27232__$1;(statearr_27238_28404[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 5))
{var inst_27216 = (state_27232[2]);var state_27232__$1 = (function (){var statearr_27239 = state_27232;(statearr_27239[9] = inst_27216);
return statearr_27239;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27232__$1,12,dchan);
} else
{if((state_val_27233 === 6))
{var state_27232__$1 = state_27232;var statearr_27240_28405 = state_27232__$1;(statearr_27240_28405[2] = null);
(statearr_27240_28405[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 7))
{var state_27232__$1 = state_27232;var statearr_27241_28406 = state_27232__$1;(statearr_27241_28406[2] = null);
(statearr_27241_28406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 8))
{var inst_27214 = (state_27232[2]);var state_27232__$1 = state_27232;var statearr_27242_28407 = state_27232__$1;(statearr_27242_28407[2] = inst_27214);
(statearr_27242_28407[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 9))
{var inst_27196 = (state_27232[7]);var inst_27209 = (state_27232[2]);var inst_27210 = (inst_27196 + 1);var inst_27196__$1 = inst_27210;var state_27232__$1 = (function (){var statearr_27243 = state_27232;(statearr_27243[7] = inst_27196__$1);
(statearr_27243[10] = inst_27209);
return statearr_27243;
})();var statearr_27244_28408 = state_27232__$1;(statearr_27244_28408[2] = null);
(statearr_27244_28408[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 10))
{var inst_27200 = (state_27232[2]);var inst_27201 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27232__$1 = (function (){var statearr_27245 = state_27232;(statearr_27245[11] = inst_27200);
return statearr_27245;
})();var statearr_27246_28409 = state_27232__$1;(statearr_27246_28409[2] = inst_27201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27232__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 11))
{var inst_27196 = (state_27232[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27232,10,Object,null,9);var inst_27205 = chs__$1.call(null,inst_27196);var inst_27206 = done.call(null,inst_27196);var inst_27207 = cljs.core.async.take_BANG_.call(null,inst_27205,inst_27206);var state_27232__$1 = state_27232;var statearr_27247_28410 = state_27232__$1;(statearr_27247_28410[2] = inst_27207);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27232__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 12))
{var inst_27218 = (state_27232[12]);var inst_27218__$1 = (state_27232[2]);var inst_27219 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27218__$1);var state_27232__$1 = (function (){var statearr_27248 = state_27232;(statearr_27248[12] = inst_27218__$1);
return statearr_27248;
})();if(cljs.core.truth_(inst_27219))
{var statearr_27249_28411 = state_27232__$1;(statearr_27249_28411[1] = 13);
} else
{var statearr_27250_28412 = state_27232__$1;(statearr_27250_28412[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 13))
{var inst_27221 = cljs.core.async.close_BANG_.call(null,out);var state_27232__$1 = state_27232;var statearr_27251_28413 = state_27232__$1;(statearr_27251_28413[2] = inst_27221);
(statearr_27251_28413[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 14))
{var inst_27218 = (state_27232[12]);var inst_27223 = cljs.core.apply.call(null,f,inst_27218);var state_27232__$1 = state_27232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27232__$1,16,out,inst_27223);
} else
{if((state_val_27233 === 15))
{var inst_27228 = (state_27232[2]);var state_27232__$1 = state_27232;var statearr_27252_28414 = state_27232__$1;(statearr_27252_28414[2] = inst_27228);
(statearr_27252_28414[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27233 === 16))
{var inst_27225 = (state_27232[2]);var state_27232__$1 = (function (){var statearr_27253 = state_27232;(statearr_27253[13] = inst_27225);
return statearr_27253;
})();var statearr_27254_28415 = state_27232__$1;(statearr_27254_28415[2] = null);
(statearr_27254_28415[1] = 2);
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
});})(c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22387__auto__,c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27258[0] = state_machine__22388__auto__);
(statearr_27258[1] = 1);
return statearr_27258;
});
var state_machine__22388__auto____1 = (function (state_27232){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27232);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27259){if((e27259 instanceof Object))
{var ex__22391__auto__ = e27259;var statearr_27260_28416 = state_27232;(statearr_27260_28416[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28417 = state_27232;
state_27232 = G__28417;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27232){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22465__auto__ = (function (){var statearr_27261 = f__22464__auto__.call(null);(statearr_27261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28400);
return statearr_27261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28400,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28418,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28418,out){
return (function (state_27345){var state_val_27346 = (state_27345[1]);if((state_val_27346 === 1))
{var inst_27316 = cljs.core.vec.call(null,chs);var inst_27317 = inst_27316;var state_27345__$1 = (function (){var statearr_27347 = state_27345;(statearr_27347[7] = inst_27317);
return statearr_27347;
})();var statearr_27348_28419 = state_27345__$1;(statearr_27348_28419[2] = null);
(statearr_27348_28419[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 2))
{var inst_27317 = (state_27345[7]);var inst_27319 = cljs.core.count.call(null,inst_27317);var inst_27320 = (inst_27319 > 0);var state_27345__$1 = state_27345;if(cljs.core.truth_(inst_27320))
{var statearr_27349_28420 = state_27345__$1;(statearr_27349_28420[1] = 4);
} else
{var statearr_27350_28421 = state_27345__$1;(statearr_27350_28421[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 3))
{var inst_27343 = (state_27345[2]);var state_27345__$1 = state_27345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27345__$1,inst_27343);
} else
{if((state_val_27346 === 4))
{var inst_27317 = (state_27345[7]);var state_27345__$1 = state_27345;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27345__$1,7,inst_27317);
} else
{if((state_val_27346 === 5))
{var inst_27339 = cljs.core.async.close_BANG_.call(null,out);var state_27345__$1 = state_27345;var statearr_27351_28422 = state_27345__$1;(statearr_27351_28422[2] = inst_27339);
(statearr_27351_28422[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 6))
{var inst_27341 = (state_27345[2]);var state_27345__$1 = state_27345;var statearr_27352_28423 = state_27345__$1;(statearr_27352_28423[2] = inst_27341);
(statearr_27352_28423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 7))
{var inst_27325 = (state_27345[8]);var inst_27324 = (state_27345[9]);var inst_27324__$1 = (state_27345[2]);var inst_27325__$1 = cljs.core.nth.call(null,inst_27324__$1,0,null);var inst_27326 = cljs.core.nth.call(null,inst_27324__$1,1,null);var inst_27327 = (inst_27325__$1 == null);var state_27345__$1 = (function (){var statearr_27353 = state_27345;(statearr_27353[10] = inst_27326);
(statearr_27353[8] = inst_27325__$1);
(statearr_27353[9] = inst_27324__$1);
return statearr_27353;
})();if(cljs.core.truth_(inst_27327))
{var statearr_27354_28424 = state_27345__$1;(statearr_27354_28424[1] = 8);
} else
{var statearr_27355_28425 = state_27345__$1;(statearr_27355_28425[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 8))
{var inst_27326 = (state_27345[10]);var inst_27325 = (state_27345[8]);var inst_27324 = (state_27345[9]);var inst_27317 = (state_27345[7]);var inst_27329 = (function (){var c = inst_27326;var v = inst_27325;var vec__27322 = inst_27324;var cs = inst_27317;return ((function (c,v,vec__27322,cs,inst_27326,inst_27325,inst_27324,inst_27317,state_val_27346,c__22463__auto___28418,out){
return (function (p1__27262_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27262_SHARP_);
});
;})(c,v,vec__27322,cs,inst_27326,inst_27325,inst_27324,inst_27317,state_val_27346,c__22463__auto___28418,out))
})();var inst_27330 = cljs.core.filterv.call(null,inst_27329,inst_27317);var inst_27317__$1 = inst_27330;var state_27345__$1 = (function (){var statearr_27356 = state_27345;(statearr_27356[7] = inst_27317__$1);
return statearr_27356;
})();var statearr_27357_28426 = state_27345__$1;(statearr_27357_28426[2] = null);
(statearr_27357_28426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 9))
{var inst_27325 = (state_27345[8]);var state_27345__$1 = state_27345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27345__$1,11,out,inst_27325);
} else
{if((state_val_27346 === 10))
{var inst_27337 = (state_27345[2]);var state_27345__$1 = state_27345;var statearr_27359_28427 = state_27345__$1;(statearr_27359_28427[2] = inst_27337);
(statearr_27359_28427[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27346 === 11))
{var inst_27317 = (state_27345[7]);var inst_27334 = (state_27345[2]);var tmp27358 = inst_27317;var inst_27317__$1 = tmp27358;var state_27345__$1 = (function (){var statearr_27360 = state_27345;(statearr_27360[7] = inst_27317__$1);
(statearr_27360[11] = inst_27334);
return statearr_27360;
})();var statearr_27361_28428 = state_27345__$1;(statearr_27361_28428[2] = null);
(statearr_27361_28428[1] = 2);
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
});})(c__22463__auto___28418,out))
;return ((function (switch__22387__auto__,c__22463__auto___28418,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27365 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27365[0] = state_machine__22388__auto__);
(statearr_27365[1] = 1);
return statearr_27365;
});
var state_machine__22388__auto____1 = (function (state_27345){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27345);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27366){if((e27366 instanceof Object))
{var ex__22391__auto__ = e27366;var statearr_27367_28429 = state_27345;(statearr_27367_28429[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28430 = state_27345;
state_27345 = G__28430;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27345){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28418,out))
})();var state__22465__auto__ = (function (){var statearr_27368 = f__22464__auto__.call(null);(statearr_27368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28418);
return statearr_27368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28418,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28431,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28431,out){
return (function (state_27438){var state_val_27439 = (state_27438[1]);if((state_val_27439 === 1))
{var inst_27415 = 0;var state_27438__$1 = (function (){var statearr_27440 = state_27438;(statearr_27440[7] = inst_27415);
return statearr_27440;
})();var statearr_27441_28432 = state_27438__$1;(statearr_27441_28432[2] = null);
(statearr_27441_28432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 2))
{var inst_27415 = (state_27438[7]);var inst_27417 = (inst_27415 < n);var state_27438__$1 = state_27438;if(cljs.core.truth_(inst_27417))
{var statearr_27442_28433 = state_27438__$1;(statearr_27442_28433[1] = 4);
} else
{var statearr_27443_28434 = state_27438__$1;(statearr_27443_28434[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 3))
{var inst_27435 = (state_27438[2]);var inst_27436 = cljs.core.async.close_BANG_.call(null,out);var state_27438__$1 = (function (){var statearr_27444 = state_27438;(statearr_27444[8] = inst_27435);
return statearr_27444;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27438__$1,inst_27436);
} else
{if((state_val_27439 === 4))
{var state_27438__$1 = state_27438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27438__$1,7,ch);
} else
{if((state_val_27439 === 5))
{var state_27438__$1 = state_27438;var statearr_27445_28435 = state_27438__$1;(statearr_27445_28435[2] = null);
(statearr_27445_28435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 6))
{var inst_27433 = (state_27438[2]);var state_27438__$1 = state_27438;var statearr_27446_28436 = state_27438__$1;(statearr_27446_28436[2] = inst_27433);
(statearr_27446_28436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 7))
{var inst_27420 = (state_27438[9]);var inst_27420__$1 = (state_27438[2]);var inst_27421 = (inst_27420__$1 == null);var inst_27422 = cljs.core.not.call(null,inst_27421);var state_27438__$1 = (function (){var statearr_27447 = state_27438;(statearr_27447[9] = inst_27420__$1);
return statearr_27447;
})();if(inst_27422)
{var statearr_27448_28437 = state_27438__$1;(statearr_27448_28437[1] = 8);
} else
{var statearr_27449_28438 = state_27438__$1;(statearr_27449_28438[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 8))
{var inst_27420 = (state_27438[9]);var state_27438__$1 = state_27438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27438__$1,11,out,inst_27420);
} else
{if((state_val_27439 === 9))
{var state_27438__$1 = state_27438;var statearr_27450_28439 = state_27438__$1;(statearr_27450_28439[2] = null);
(statearr_27450_28439[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 10))
{var inst_27430 = (state_27438[2]);var state_27438__$1 = state_27438;var statearr_27451_28440 = state_27438__$1;(statearr_27451_28440[2] = inst_27430);
(statearr_27451_28440[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27439 === 11))
{var inst_27415 = (state_27438[7]);var inst_27425 = (state_27438[2]);var inst_27426 = (inst_27415 + 1);var inst_27415__$1 = inst_27426;var state_27438__$1 = (function (){var statearr_27452 = state_27438;(statearr_27452[10] = inst_27425);
(statearr_27452[7] = inst_27415__$1);
return statearr_27452;
})();var statearr_27453_28441 = state_27438__$1;(statearr_27453_28441[2] = null);
(statearr_27453_28441[1] = 2);
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
});})(c__22463__auto___28431,out))
;return ((function (switch__22387__auto__,c__22463__auto___28431,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27457 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27457[0] = state_machine__22388__auto__);
(statearr_27457[1] = 1);
return statearr_27457;
});
var state_machine__22388__auto____1 = (function (state_27438){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27438);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27458){if((e27458 instanceof Object))
{var ex__22391__auto__ = e27458;var statearr_27459_28442 = state_27438;(statearr_27459_28442[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28443 = state_27438;
state_27438 = G__28443;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27438){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28431,out))
})();var state__22465__auto__ = (function (){var statearr_27460 = f__22464__auto__.call(null);(statearr_27460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28431);
return statearr_27460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28431,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27468 = (function (ch,f,map_LT_,meta27469){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27469 = meta27469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27468.cljs$lang$type = true;
cljs.core.async.t27468.cljs$lang$ctorStr = "cljs.core.async/t27468";
cljs.core.async.t27468.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27468");
});
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27471 = (function (fn1,_,meta27469,ch,f,map_LT_,meta27472){
this.fn1 = fn1;
this._ = _;
this.meta27469 = meta27469;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27472 = meta27472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27471.cljs$lang$type = true;
cljs.core.async.t27471.cljs$lang$ctorStr = "cljs.core.async/t27471";
cljs.core.async.t27471.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27471");
});})(___$1))
;
cljs.core.async.t27471.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27471.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27461_SHARP_){return f1.call(null,(((p1__27461_SHARP_ == null))?null:self__.f.call(null,p1__27461_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27473){var self__ = this;
var _27473__$1 = this;return self__.meta27472;
});})(___$1))
;
cljs.core.async.t27471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27473,meta27472__$1){var self__ = this;
var _27473__$1 = this;return (new cljs.core.async.t27471(self__.fn1,self__._,self__.meta27469,self__.ch,self__.f,self__.map_LT_,meta27472__$1));
});})(___$1))
;
cljs.core.async.__GT_t27471 = ((function (___$1){
return (function __GT_t27471(fn1__$1,___$2,meta27469__$1,ch__$2,f__$2,map_LT___$2,meta27472){return (new cljs.core.async.t27471(fn1__$1,___$2,meta27469__$1,ch__$2,f__$2,map_LT___$2,meta27472));
});})(___$1))
;
}
return (new cljs.core.async.t27471(fn1,___$1,self__.meta27469,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27470){var self__ = this;
var _27470__$1 = this;return self__.meta27469;
});
cljs.core.async.t27468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27470,meta27469__$1){var self__ = this;
var _27470__$1 = this;return (new cljs.core.async.t27468(self__.ch,self__.f,self__.map_LT_,meta27469__$1));
});
cljs.core.async.__GT_t27468 = (function __GT_t27468(ch__$1,f__$1,map_LT___$1,meta27469){return (new cljs.core.async.t27468(ch__$1,f__$1,map_LT___$1,meta27469));
});
}
return (new cljs.core.async.t27468(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27477 = (function (ch,f,map_GT_,meta27478){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27478 = meta27478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27477.cljs$lang$type = true;
cljs.core.async.t27477.cljs$lang$ctorStr = "cljs.core.async/t27477";
cljs.core.async.t27477.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27477");
});
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27479){var self__ = this;
var _27479__$1 = this;return self__.meta27478;
});
cljs.core.async.t27477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27479,meta27478__$1){var self__ = this;
var _27479__$1 = this;return (new cljs.core.async.t27477(self__.ch,self__.f,self__.map_GT_,meta27478__$1));
});
cljs.core.async.__GT_t27477 = (function __GT_t27477(ch__$1,f__$1,map_GT___$1,meta27478){return (new cljs.core.async.t27477(ch__$1,f__$1,map_GT___$1,meta27478));
});
}
return (new cljs.core.async.t27477(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27483 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27483 = (function (ch,p,filter_GT_,meta27484){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27484 = meta27484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27483.cljs$lang$type = true;
cljs.core.async.t27483.cljs$lang$ctorStr = "cljs.core.async/t27483";
cljs.core.async.t27483.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27483");
});
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27483.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t27483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27485){var self__ = this;
var _27485__$1 = this;return self__.meta27484;
});
cljs.core.async.t27483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27485,meta27484__$1){var self__ = this;
var _27485__$1 = this;return (new cljs.core.async.t27483(self__.ch,self__.p,self__.filter_GT_,meta27484__$1));
});
cljs.core.async.__GT_t27483 = (function __GT_t27483(ch__$1,p__$1,filter_GT___$1,meta27484){return (new cljs.core.async.t27483(ch__$1,p__$1,filter_GT___$1,meta27484));
});
}
return (new cljs.core.async.t27483(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28444,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28444,out){
return (function (state_27547){var state_val_27548 = (state_27547[1]);if((state_val_27548 === 1))
{var state_27547__$1 = state_27547;var statearr_27549_28445 = state_27547__$1;(statearr_27549_28445[2] = null);
(statearr_27549_28445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 2))
{var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27547__$1,4,ch);
} else
{if((state_val_27548 === 3))
{var inst_27545 = (state_27547[2]);var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27547__$1,inst_27545);
} else
{if((state_val_27548 === 4))
{var inst_27529 = (state_27547[7]);var inst_27529__$1 = (state_27547[2]);var inst_27530 = (inst_27529__$1 == null);var state_27547__$1 = (function (){var statearr_27550 = state_27547;(statearr_27550[7] = inst_27529__$1);
return statearr_27550;
})();if(cljs.core.truth_(inst_27530))
{var statearr_27551_28446 = state_27547__$1;(statearr_27551_28446[1] = 5);
} else
{var statearr_27552_28447 = state_27547__$1;(statearr_27552_28447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 5))
{var inst_27532 = cljs.core.async.close_BANG_.call(null,out);var state_27547__$1 = state_27547;var statearr_27553_28448 = state_27547__$1;(statearr_27553_28448[2] = inst_27532);
(statearr_27553_28448[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 6))
{var inst_27529 = (state_27547[7]);var inst_27534 = p.call(null,inst_27529);var state_27547__$1 = state_27547;if(cljs.core.truth_(inst_27534))
{var statearr_27554_28449 = state_27547__$1;(statearr_27554_28449[1] = 8);
} else
{var statearr_27555_28450 = state_27547__$1;(statearr_27555_28450[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 7))
{var inst_27543 = (state_27547[2]);var state_27547__$1 = state_27547;var statearr_27556_28451 = state_27547__$1;(statearr_27556_28451[2] = inst_27543);
(statearr_27556_28451[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 8))
{var inst_27529 = (state_27547[7]);var state_27547__$1 = state_27547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27547__$1,11,out,inst_27529);
} else
{if((state_val_27548 === 9))
{var state_27547__$1 = state_27547;var statearr_27557_28452 = state_27547__$1;(statearr_27557_28452[2] = null);
(statearr_27557_28452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 10))
{var inst_27540 = (state_27547[2]);var state_27547__$1 = (function (){var statearr_27558 = state_27547;(statearr_27558[8] = inst_27540);
return statearr_27558;
})();var statearr_27559_28453 = state_27547__$1;(statearr_27559_28453[2] = null);
(statearr_27559_28453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27548 === 11))
{var inst_27537 = (state_27547[2]);var state_27547__$1 = state_27547;var statearr_27560_28454 = state_27547__$1;(statearr_27560_28454[2] = inst_27537);
(statearr_27560_28454[1] = 10);
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
});})(c__22463__auto___28444,out))
;return ((function (switch__22387__auto__,c__22463__auto___28444,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27564 = [null,null,null,null,null,null,null,null,null];(statearr_27564[0] = state_machine__22388__auto__);
(statearr_27564[1] = 1);
return statearr_27564;
});
var state_machine__22388__auto____1 = (function (state_27547){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27547);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object))
{var ex__22391__auto__ = e27565;var statearr_27566_28455 = state_27547;(statearr_27566_28455[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28456 = state_27547;
state_27547 = G__28456;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27547){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28444,out))
})();var state__22465__auto__ = (function (){var statearr_27567 = f__22464__auto__.call(null);(statearr_27567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28444);
return statearr_27567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28444,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__){
return (function (state_27733){var state_val_27734 = (state_27733[1]);if((state_val_27734 === 1))
{var state_27733__$1 = state_27733;var statearr_27735_28457 = state_27733__$1;(statearr_27735_28457[2] = null);
(statearr_27735_28457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 2))
{var state_27733__$1 = state_27733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27733__$1,4,in$);
} else
{if((state_val_27734 === 3))
{var inst_27731 = (state_27733[2]);var state_27733__$1 = state_27733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27733__$1,inst_27731);
} else
{if((state_val_27734 === 4))
{var inst_27674 = (state_27733[7]);var inst_27674__$1 = (state_27733[2]);var inst_27675 = (inst_27674__$1 == null);var state_27733__$1 = (function (){var statearr_27736 = state_27733;(statearr_27736[7] = inst_27674__$1);
return statearr_27736;
})();if(cljs.core.truth_(inst_27675))
{var statearr_27737_28458 = state_27733__$1;(statearr_27737_28458[1] = 5);
} else
{var statearr_27738_28459 = state_27733__$1;(statearr_27738_28459[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 5))
{var inst_27677 = cljs.core.async.close_BANG_.call(null,out);var state_27733__$1 = state_27733;var statearr_27739_28460 = state_27733__$1;(statearr_27739_28460[2] = inst_27677);
(statearr_27739_28460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 6))
{var inst_27674 = (state_27733[7]);var inst_27683 = f.call(null,inst_27674);var inst_27684 = cljs.core.seq.call(null,inst_27683);var inst_27685 = inst_27684;var inst_27686 = null;var inst_27687 = 0;var inst_27688 = 0;var state_27733__$1 = (function (){var statearr_27740 = state_27733;(statearr_27740[8] = inst_27688);
(statearr_27740[9] = inst_27686);
(statearr_27740[10] = inst_27687);
(statearr_27740[11] = inst_27685);
return statearr_27740;
})();var statearr_27741_28461 = state_27733__$1;(statearr_27741_28461[2] = null);
(statearr_27741_28461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 7))
{var inst_27729 = (state_27733[2]);var state_27733__$1 = state_27733;var statearr_27742_28462 = state_27733__$1;(statearr_27742_28462[2] = inst_27729);
(statearr_27742_28462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 8))
{var inst_27688 = (state_27733[8]);var inst_27687 = (state_27733[10]);var inst_27690 = (inst_27688 < inst_27687);var inst_27691 = inst_27690;var state_27733__$1 = state_27733;if(cljs.core.truth_(inst_27691))
{var statearr_27743_28463 = state_27733__$1;(statearr_27743_28463[1] = 10);
} else
{var statearr_27744_28464 = state_27733__$1;(statearr_27744_28464[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 9))
{var inst_27721 = (state_27733[2]);var inst_27722 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_27733__$1 = (function (){var statearr_27745 = state_27733;(statearr_27745[12] = inst_27721);
return statearr_27745;
})();if(cljs.core.truth_(inst_27722))
{var statearr_27746_28465 = state_27733__$1;(statearr_27746_28465[1] = 21);
} else
{var statearr_27747_28466 = state_27733__$1;(statearr_27747_28466[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 10))
{var inst_27688 = (state_27733[8]);var inst_27686 = (state_27733[9]);var inst_27693 = cljs.core._nth.call(null,inst_27686,inst_27688);var state_27733__$1 = state_27733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27733__$1,13,out,inst_27693);
} else
{if((state_val_27734 === 11))
{var inst_27685 = (state_27733[11]);var inst_27699 = (state_27733[13]);var inst_27699__$1 = cljs.core.seq.call(null,inst_27685);var state_27733__$1 = (function (){var statearr_27751 = state_27733;(statearr_27751[13] = inst_27699__$1);
return statearr_27751;
})();if(inst_27699__$1)
{var statearr_27752_28467 = state_27733__$1;(statearr_27752_28467[1] = 14);
} else
{var statearr_27753_28468 = state_27733__$1;(statearr_27753_28468[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 12))
{var inst_27719 = (state_27733[2]);var state_27733__$1 = state_27733;var statearr_27754_28469 = state_27733__$1;(statearr_27754_28469[2] = inst_27719);
(statearr_27754_28469[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 13))
{var inst_27688 = (state_27733[8]);var inst_27686 = (state_27733[9]);var inst_27687 = (state_27733[10]);var inst_27685 = (state_27733[11]);var inst_27695 = (state_27733[2]);var inst_27696 = (inst_27688 + 1);var tmp27748 = inst_27686;var tmp27749 = inst_27687;var tmp27750 = inst_27685;var inst_27685__$1 = tmp27750;var inst_27686__$1 = tmp27748;var inst_27687__$1 = tmp27749;var inst_27688__$1 = inst_27696;var state_27733__$1 = (function (){var statearr_27755 = state_27733;(statearr_27755[8] = inst_27688__$1);
(statearr_27755[9] = inst_27686__$1);
(statearr_27755[10] = inst_27687__$1);
(statearr_27755[11] = inst_27685__$1);
(statearr_27755[14] = inst_27695);
return statearr_27755;
})();var statearr_27756_28470 = state_27733__$1;(statearr_27756_28470[2] = null);
(statearr_27756_28470[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 14))
{var inst_27699 = (state_27733[13]);var inst_27701 = cljs.core.chunked_seq_QMARK_.call(null,inst_27699);var state_27733__$1 = state_27733;if(inst_27701)
{var statearr_27757_28471 = state_27733__$1;(statearr_27757_28471[1] = 17);
} else
{var statearr_27758_28472 = state_27733__$1;(statearr_27758_28472[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 15))
{var state_27733__$1 = state_27733;var statearr_27759_28473 = state_27733__$1;(statearr_27759_28473[2] = null);
(statearr_27759_28473[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 16))
{var inst_27717 = (state_27733[2]);var state_27733__$1 = state_27733;var statearr_27760_28474 = state_27733__$1;(statearr_27760_28474[2] = inst_27717);
(statearr_27760_28474[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 17))
{var inst_27699 = (state_27733[13]);var inst_27703 = cljs.core.chunk_first.call(null,inst_27699);var inst_27704 = cljs.core.chunk_rest.call(null,inst_27699);var inst_27705 = cljs.core.count.call(null,inst_27703);var inst_27685 = inst_27704;var inst_27686 = inst_27703;var inst_27687 = inst_27705;var inst_27688 = 0;var state_27733__$1 = (function (){var statearr_27761 = state_27733;(statearr_27761[8] = inst_27688);
(statearr_27761[9] = inst_27686);
(statearr_27761[10] = inst_27687);
(statearr_27761[11] = inst_27685);
return statearr_27761;
})();var statearr_27762_28475 = state_27733__$1;(statearr_27762_28475[2] = null);
(statearr_27762_28475[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 18))
{var inst_27699 = (state_27733[13]);var inst_27708 = cljs.core.first.call(null,inst_27699);var state_27733__$1 = state_27733;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27733__$1,20,out,inst_27708);
} else
{if((state_val_27734 === 19))
{var inst_27714 = (state_27733[2]);var state_27733__$1 = state_27733;var statearr_27763_28476 = state_27733__$1;(statearr_27763_28476[2] = inst_27714);
(statearr_27763_28476[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 20))
{var inst_27699 = (state_27733[13]);var inst_27710 = (state_27733[2]);var inst_27711 = cljs.core.next.call(null,inst_27699);var inst_27685 = inst_27711;var inst_27686 = null;var inst_27687 = 0;var inst_27688 = 0;var state_27733__$1 = (function (){var statearr_27764 = state_27733;(statearr_27764[8] = inst_27688);
(statearr_27764[9] = inst_27686);
(statearr_27764[10] = inst_27687);
(statearr_27764[11] = inst_27685);
(statearr_27764[15] = inst_27710);
return statearr_27764;
})();var statearr_27765_28477 = state_27733__$1;(statearr_27765_28477[2] = null);
(statearr_27765_28477[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 21))
{var state_27733__$1 = state_27733;var statearr_27766_28478 = state_27733__$1;(statearr_27766_28478[2] = null);
(statearr_27766_28478[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 22))
{var state_27733__$1 = state_27733;var statearr_27767_28479 = state_27733__$1;(statearr_27767_28479[2] = null);
(statearr_27767_28479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27734 === 23))
{var inst_27727 = (state_27733[2]);var state_27733__$1 = state_27733;var statearr_27768_28480 = state_27733__$1;(statearr_27768_28480[2] = inst_27727);
(statearr_27768_28480[1] = 7);
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
});})(c__22463__auto__))
;return ((function (switch__22387__auto__,c__22463__auto__){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27772[0] = state_machine__22388__auto__);
(statearr_27772[1] = 1);
return statearr_27772;
});
var state_machine__22388__auto____1 = (function (state_27733){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27733);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27773){if((e27773 instanceof Object))
{var ex__22391__auto__ = e27773;var statearr_27774_28481 = state_27733;(statearr_27774_28481[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28482 = state_27733;
state_27733 = G__28482;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27733){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__))
})();var state__22465__auto__ = (function (){var statearr_27775 = f__22464__auto__.call(null);(statearr_27775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_27775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__))
);
return c__22463__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28483,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28483,out){
return (function (state_27847){var state_val_27848 = (state_27847[1]);if((state_val_27848 === 1))
{var inst_27824 = null;var state_27847__$1 = (function (){var statearr_27849 = state_27847;(statearr_27849[7] = inst_27824);
return statearr_27849;
})();var statearr_27850_28484 = state_27847__$1;(statearr_27850_28484[2] = null);
(statearr_27850_28484[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 2))
{var state_27847__$1 = state_27847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,4,ch);
} else
{if((state_val_27848 === 3))
{var inst_27844 = (state_27847[2]);var inst_27845 = cljs.core.async.close_BANG_.call(null,out);var state_27847__$1 = (function (){var statearr_27851 = state_27847;(statearr_27851[8] = inst_27844);
return statearr_27851;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27847__$1,inst_27845);
} else
{if((state_val_27848 === 4))
{var inst_27827 = (state_27847[9]);var inst_27827__$1 = (state_27847[2]);var inst_27828 = (inst_27827__$1 == null);var inst_27829 = cljs.core.not.call(null,inst_27828);var state_27847__$1 = (function (){var statearr_27852 = state_27847;(statearr_27852[9] = inst_27827__$1);
return statearr_27852;
})();if(inst_27829)
{var statearr_27853_28485 = state_27847__$1;(statearr_27853_28485[1] = 5);
} else
{var statearr_27854_28486 = state_27847__$1;(statearr_27854_28486[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 5))
{var inst_27824 = (state_27847[7]);var inst_27827 = (state_27847[9]);var inst_27831 = cljs.core._EQ_.call(null,inst_27827,inst_27824);var state_27847__$1 = state_27847;if(inst_27831)
{var statearr_27855_28487 = state_27847__$1;(statearr_27855_28487[1] = 8);
} else
{var statearr_27856_28488 = state_27847__$1;(statearr_27856_28488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 6))
{var state_27847__$1 = state_27847;var statearr_27858_28489 = state_27847__$1;(statearr_27858_28489[2] = null);
(statearr_27858_28489[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 7))
{var inst_27842 = (state_27847[2]);var state_27847__$1 = state_27847;var statearr_27859_28490 = state_27847__$1;(statearr_27859_28490[2] = inst_27842);
(statearr_27859_28490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 8))
{var inst_27824 = (state_27847[7]);var tmp27857 = inst_27824;var inst_27824__$1 = tmp27857;var state_27847__$1 = (function (){var statearr_27860 = state_27847;(statearr_27860[7] = inst_27824__$1);
return statearr_27860;
})();var statearr_27861_28491 = state_27847__$1;(statearr_27861_28491[2] = null);
(statearr_27861_28491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 9))
{var inst_27827 = (state_27847[9]);var state_27847__$1 = state_27847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27847__$1,11,out,inst_27827);
} else
{if((state_val_27848 === 10))
{var inst_27839 = (state_27847[2]);var state_27847__$1 = state_27847;var statearr_27862_28492 = state_27847__$1;(statearr_27862_28492[2] = inst_27839);
(statearr_27862_28492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27848 === 11))
{var inst_27827 = (state_27847[9]);var inst_27836 = (state_27847[2]);var inst_27824 = inst_27827;var state_27847__$1 = (function (){var statearr_27863 = state_27847;(statearr_27863[10] = inst_27836);
(statearr_27863[7] = inst_27824);
return statearr_27863;
})();var statearr_27864_28493 = state_27847__$1;(statearr_27864_28493[2] = null);
(statearr_27864_28493[1] = 2);
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
});})(c__22463__auto___28483,out))
;return ((function (switch__22387__auto__,c__22463__auto___28483,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_27868 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27868[0] = state_machine__22388__auto__);
(statearr_27868[1] = 1);
return statearr_27868;
});
var state_machine__22388__auto____1 = (function (state_27847){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27847);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e27869){if((e27869 instanceof Object))
{var ex__22391__auto__ = e27869;var statearr_27870_28494 = state_27847;(statearr_27870_28494[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28495 = state_27847;
state_27847 = G__28495;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27847){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28483,out))
})();var state__22465__auto__ = (function (){var statearr_27871 = f__22464__auto__.call(null);(statearr_27871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28483);
return statearr_27871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28483,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28496,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28496,out){
return (function (state_27976){var state_val_27977 = (state_27976[1]);if((state_val_27977 === 1))
{var inst_27939 = (new Array(n));var inst_27940 = inst_27939;var inst_27941 = 0;var state_27976__$1 = (function (){var statearr_27978 = state_27976;(statearr_27978[7] = inst_27941);
(statearr_27978[8] = inst_27940);
return statearr_27978;
})();var statearr_27979_28497 = state_27976__$1;(statearr_27979_28497[2] = null);
(statearr_27979_28497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 2))
{var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27976__$1,4,ch);
} else
{if((state_val_27977 === 3))
{var inst_27974 = (state_27976[2]);var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27976__$1,inst_27974);
} else
{if((state_val_27977 === 4))
{var inst_27944 = (state_27976[9]);var inst_27944__$1 = (state_27976[2]);var inst_27945 = (inst_27944__$1 == null);var inst_27946 = cljs.core.not.call(null,inst_27945);var state_27976__$1 = (function (){var statearr_27980 = state_27976;(statearr_27980[9] = inst_27944__$1);
return statearr_27980;
})();if(inst_27946)
{var statearr_27981_28498 = state_27976__$1;(statearr_27981_28498[1] = 5);
} else
{var statearr_27982_28499 = state_27976__$1;(statearr_27982_28499[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 5))
{var inst_27949 = (state_27976[10]);var inst_27944 = (state_27976[9]);var inst_27941 = (state_27976[7]);var inst_27940 = (state_27976[8]);var inst_27948 = (inst_27940[inst_27941] = inst_27944);var inst_27949__$1 = (inst_27941 + 1);var inst_27950 = (inst_27949__$1 < n);var state_27976__$1 = (function (){var statearr_27983 = state_27976;(statearr_27983[11] = inst_27948);
(statearr_27983[10] = inst_27949__$1);
return statearr_27983;
})();if(cljs.core.truth_(inst_27950))
{var statearr_27984_28500 = state_27976__$1;(statearr_27984_28500[1] = 8);
} else
{var statearr_27985_28501 = state_27976__$1;(statearr_27985_28501[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 6))
{var inst_27941 = (state_27976[7]);var inst_27962 = (inst_27941 > 0);var state_27976__$1 = state_27976;if(cljs.core.truth_(inst_27962))
{var statearr_27987_28502 = state_27976__$1;(statearr_27987_28502[1] = 12);
} else
{var statearr_27988_28503 = state_27976__$1;(statearr_27988_28503[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 7))
{var inst_27972 = (state_27976[2]);var state_27976__$1 = state_27976;var statearr_27989_28504 = state_27976__$1;(statearr_27989_28504[2] = inst_27972);
(statearr_27989_28504[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 8))
{var inst_27949 = (state_27976[10]);var inst_27940 = (state_27976[8]);var tmp27986 = inst_27940;var inst_27940__$1 = tmp27986;var inst_27941 = inst_27949;var state_27976__$1 = (function (){var statearr_27990 = state_27976;(statearr_27990[7] = inst_27941);
(statearr_27990[8] = inst_27940__$1);
return statearr_27990;
})();var statearr_27991_28505 = state_27976__$1;(statearr_27991_28505[2] = null);
(statearr_27991_28505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 9))
{var inst_27940 = (state_27976[8]);var inst_27954 = cljs.core.vec.call(null,inst_27940);var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27976__$1,11,out,inst_27954);
} else
{if((state_val_27977 === 10))
{var inst_27960 = (state_27976[2]);var state_27976__$1 = state_27976;var statearr_27992_28506 = state_27976__$1;(statearr_27992_28506[2] = inst_27960);
(statearr_27992_28506[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 11))
{var inst_27956 = (state_27976[2]);var inst_27957 = (new Array(n));var inst_27940 = inst_27957;var inst_27941 = 0;var state_27976__$1 = (function (){var statearr_27993 = state_27976;(statearr_27993[12] = inst_27956);
(statearr_27993[7] = inst_27941);
(statearr_27993[8] = inst_27940);
return statearr_27993;
})();var statearr_27994_28507 = state_27976__$1;(statearr_27994_28507[2] = null);
(statearr_27994_28507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 12))
{var inst_27940 = (state_27976[8]);var inst_27964 = cljs.core.vec.call(null,inst_27940);var state_27976__$1 = state_27976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27976__$1,15,out,inst_27964);
} else
{if((state_val_27977 === 13))
{var state_27976__$1 = state_27976;var statearr_27995_28508 = state_27976__$1;(statearr_27995_28508[2] = null);
(statearr_27995_28508[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 14))
{var inst_27969 = (state_27976[2]);var inst_27970 = cljs.core.async.close_BANG_.call(null,out);var state_27976__$1 = (function (){var statearr_27996 = state_27976;(statearr_27996[13] = inst_27969);
return statearr_27996;
})();var statearr_27997_28509 = state_27976__$1;(statearr_27997_28509[2] = inst_27970);
(statearr_27997_28509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27977 === 15))
{var inst_27966 = (state_27976[2]);var state_27976__$1 = state_27976;var statearr_27998_28510 = state_27976__$1;(statearr_27998_28510[2] = inst_27966);
(statearr_27998_28510[1] = 14);
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
});})(c__22463__auto___28496,out))
;return ((function (switch__22387__auto__,c__22463__auto___28496,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28002[0] = state_machine__22388__auto__);
(statearr_28002[1] = 1);
return statearr_28002;
});
var state_machine__22388__auto____1 = (function (state_27976){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_27976);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object))
{var ex__22391__auto__ = e28003;var statearr_28004_28511 = state_27976;(statearr_28004_28511[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28512 = state_27976;
state_27976 = G__28512;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_27976){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_27976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28496,out))
})();var state__22465__auto__ = (function (){var statearr_28005 = f__22464__auto__.call(null);(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28496);
return statearr_28005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28496,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22463__auto___28513 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto___28513,out){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto___28513,out){
return (function (state_28118){var state_val_28119 = (state_28118[1]);if((state_val_28119 === 1))
{var inst_28077 = [];var inst_28078 = inst_28077;var inst_28079 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28118__$1 = (function (){var statearr_28120 = state_28118;(statearr_28120[7] = inst_28079);
(statearr_28120[8] = inst_28078);
return statearr_28120;
})();var statearr_28121_28514 = state_28118__$1;(statearr_28121_28514[2] = null);
(statearr_28121_28514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 2))
{var state_28118__$1 = state_28118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28118__$1,4,ch);
} else
{if((state_val_28119 === 3))
{var inst_28116 = (state_28118[2]);var state_28118__$1 = state_28118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28118__$1,inst_28116);
} else
{if((state_val_28119 === 4))
{var inst_28082 = (state_28118[9]);var inst_28082__$1 = (state_28118[2]);var inst_28083 = (inst_28082__$1 == null);var inst_28084 = cljs.core.not.call(null,inst_28083);var state_28118__$1 = (function (){var statearr_28122 = state_28118;(statearr_28122[9] = inst_28082__$1);
return statearr_28122;
})();if(inst_28084)
{var statearr_28123_28515 = state_28118__$1;(statearr_28123_28515[1] = 5);
} else
{var statearr_28124_28516 = state_28118__$1;(statearr_28124_28516[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 5))
{var inst_28082 = (state_28118[9]);var inst_28086 = (state_28118[10]);var inst_28079 = (state_28118[7]);var inst_28086__$1 = f.call(null,inst_28082);var inst_28087 = cljs.core._EQ_.call(null,inst_28086__$1,inst_28079);var inst_28088 = cljs.core.keyword_identical_QMARK_.call(null,inst_28079,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28089 = (inst_28087) || (inst_28088);var state_28118__$1 = (function (){var statearr_28125 = state_28118;(statearr_28125[10] = inst_28086__$1);
return statearr_28125;
})();if(cljs.core.truth_(inst_28089))
{var statearr_28126_28517 = state_28118__$1;(statearr_28126_28517[1] = 8);
} else
{var statearr_28127_28518 = state_28118__$1;(statearr_28127_28518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 6))
{var inst_28078 = (state_28118[8]);var inst_28103 = inst_28078.length;var inst_28104 = (inst_28103 > 0);var state_28118__$1 = state_28118;if(cljs.core.truth_(inst_28104))
{var statearr_28129_28519 = state_28118__$1;(statearr_28129_28519[1] = 12);
} else
{var statearr_28130_28520 = state_28118__$1;(statearr_28130_28520[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 7))
{var inst_28114 = (state_28118[2]);var state_28118__$1 = state_28118;var statearr_28131_28521 = state_28118__$1;(statearr_28131_28521[2] = inst_28114);
(statearr_28131_28521[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 8))
{var inst_28082 = (state_28118[9]);var inst_28086 = (state_28118[10]);var inst_28078 = (state_28118[8]);var inst_28091 = inst_28078.push(inst_28082);var tmp28128 = inst_28078;var inst_28078__$1 = tmp28128;var inst_28079 = inst_28086;var state_28118__$1 = (function (){var statearr_28132 = state_28118;(statearr_28132[11] = inst_28091);
(statearr_28132[7] = inst_28079);
(statearr_28132[8] = inst_28078__$1);
return statearr_28132;
})();var statearr_28133_28522 = state_28118__$1;(statearr_28133_28522[2] = null);
(statearr_28133_28522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 9))
{var inst_28078 = (state_28118[8]);var inst_28094 = cljs.core.vec.call(null,inst_28078);var state_28118__$1 = state_28118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28118__$1,11,out,inst_28094);
} else
{if((state_val_28119 === 10))
{var inst_28101 = (state_28118[2]);var state_28118__$1 = state_28118;var statearr_28134_28523 = state_28118__$1;(statearr_28134_28523[2] = inst_28101);
(statearr_28134_28523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 11))
{var inst_28082 = (state_28118[9]);var inst_28086 = (state_28118[10]);var inst_28096 = (state_28118[2]);var inst_28097 = [];var inst_28098 = inst_28097.push(inst_28082);var inst_28078 = inst_28097;var inst_28079 = inst_28086;var state_28118__$1 = (function (){var statearr_28135 = state_28118;(statearr_28135[12] = inst_28098);
(statearr_28135[13] = inst_28096);
(statearr_28135[7] = inst_28079);
(statearr_28135[8] = inst_28078);
return statearr_28135;
})();var statearr_28136_28524 = state_28118__$1;(statearr_28136_28524[2] = null);
(statearr_28136_28524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 12))
{var inst_28078 = (state_28118[8]);var inst_28106 = cljs.core.vec.call(null,inst_28078);var state_28118__$1 = state_28118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28118__$1,15,out,inst_28106);
} else
{if((state_val_28119 === 13))
{var state_28118__$1 = state_28118;var statearr_28137_28525 = state_28118__$1;(statearr_28137_28525[2] = null);
(statearr_28137_28525[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 14))
{var inst_28111 = (state_28118[2]);var inst_28112 = cljs.core.async.close_BANG_.call(null,out);var state_28118__$1 = (function (){var statearr_28138 = state_28118;(statearr_28138[14] = inst_28111);
return statearr_28138;
})();var statearr_28139_28526 = state_28118__$1;(statearr_28139_28526[2] = inst_28112);
(statearr_28139_28526[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28119 === 15))
{var inst_28108 = (state_28118[2]);var state_28118__$1 = state_28118;var statearr_28140_28527 = state_28118__$1;(statearr_28140_28527[2] = inst_28108);
(statearr_28140_28527[1] = 14);
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
});})(c__22463__auto___28513,out))
;return ((function (switch__22387__auto__,c__22463__auto___28513,out){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28144[0] = state_machine__22388__auto__);
(statearr_28144[1] = 1);
return statearr_28144;
});
var state_machine__22388__auto____1 = (function (state_28118){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28118);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28145){if((e28145 instanceof Object))
{var ex__22391__auto__ = e28145;var statearr_28146_28528 = state_28118;(statearr_28146_28528[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28529 = state_28118;
state_28118 = G__28529;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28118){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto___28513,out))
})();var state__22465__auto__ = (function (){var statearr_28147 = f__22464__auto__.call(null);(statearr_28147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto___28513);
return statearr_28147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto___28513,out))
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
if(!lt.util.load.provided_QMARK_('lt.objs.editor.lint')) {
goog.provide('lt.objs.editor.lint');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('cljs.core.async');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.thread');
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","linter","lt.objs.editor.lint/linter",2773134936),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linter","linter",4206213986)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894)], null),new cljs.core.Keyword(null,"validation-fn","validation-fn",4607074830),cljs.core.constantly.call(null,null));
/**
* Raise ::validate trigger on all given linter objects asynchronously, then pass all the results
* at once to the codemirror linter callback function
* @param {...*} var_args
*/
lt.objs.editor.lint.validate_with_all_linters = (function() { 
var validate_with_all_linters__delegate = function (linter_objs){var validate_chans = cljs.core.map.call(null,(function (obj){var ch = cljs.core.async.timeout.call(null,(function (){var or__19803__auto__ = new cljs.core.Keyword(null,"timeout","timeout",3994960083).cljs$core$IFn$_invoke$arity$1(obj);if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return lt.objs.editor.lint.default_timeout;
}
})());var callback_fn = ((function (ch){
return (function (results){return cljs.core.async.put_BANG_.call(null,ch,results);
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);return ((function (validate_chans){
return (function (editor_text,callback,options){var seq__28733_28757 = cljs.core.seq.call(null,validate_chans);var chunk__28734_28758 = null;var count__28735_28759 = 0;var i__28736_28760 = 0;while(true){
if((i__28736_28760 < count__28735_28759))
{var vec__28737_28761 = cljs.core._nth.call(null,chunk__28734_28758,i__28736_28760);var __28762 = cljs.core.nth.call(null,vec__28737_28761,0,null);var f_28763 = cljs.core.nth.call(null,vec__28737_28761,1,null);lt.object.raise.call(null,lt.objs.editor.lint.obj,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_28763);
{
var G__28764 = seq__28733_28757;
var G__28765 = chunk__28734_28758;
var G__28766 = count__28735_28759;
var G__28767 = (i__28736_28760 + 1);
seq__28733_28757 = G__28764;
chunk__28734_28758 = G__28765;
count__28735_28759 = G__28766;
i__28736_28760 = G__28767;
continue;
}
} else
{var temp__4092__auto___28768 = cljs.core.seq.call(null,seq__28733_28757);if(temp__4092__auto___28768)
{var seq__28733_28769__$1 = temp__4092__auto___28768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28733_28769__$1))
{var c__20551__auto___28770 = cljs.core.chunk_first.call(null,seq__28733_28769__$1);{
var G__28771 = cljs.core.chunk_rest.call(null,seq__28733_28769__$1);
var G__28772 = c__20551__auto___28770;
var G__28773 = cljs.core.count.call(null,c__20551__auto___28770);
var G__28774 = 0;
seq__28733_28757 = G__28771;
chunk__28734_28758 = G__28772;
count__28735_28759 = G__28773;
i__28736_28760 = G__28774;
continue;
}
} else
{var vec__28738_28775 = cljs.core.first.call(null,seq__28733_28769__$1);var __28776 = cljs.core.nth.call(null,vec__28738_28775,0,null);var f_28777 = cljs.core.nth.call(null,vec__28738_28775,1,null);lt.object.raise.call(null,lt.objs.editor.lint.obj,new cljs.core.Keyword("lt.objs.editor.lint","validate","lt.objs.editor.lint/validate",4434222894),editor_text,f_28777);
{
var G__28778 = cljs.core.next.call(null,seq__28733_28769__$1);
var G__28779 = null;
var G__28780 = 0;
var G__28781 = 0;
seq__28733_28757 = G__28778;
chunk__28734_28758 = G__28779;
count__28735_28759 = G__28780;
i__28736_28760 = G__28781;
continue;
}
}
} else
{}
}
break;
}
var c__22463__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22463__auto__,validate_chans){
return (function (){var f__22464__auto__ = (function (){var switch__22387__auto__ = ((function (c__22463__auto__,validate_chans){
return (function (state_28744){var state_val_28745 = (state_28744[1]);if((state_val_28745 === 1))
{var inst_28740 = (function (){return ((function (state_val_28745,c__22463__auto__,validate_chans){
return (function (p__28739){var vec__28746 = p__28739;var ch = cljs.core.nth.call(null,vec__28746,0,null);var _ = cljs.core.nth.call(null,vec__28746,1,null);var obj = cljs.core.nth.call(null,vec__28746,2,null);var res = lt.objs.editor.lint._LT__BANG_.call(null,ch);if(cljs.core.vector_QMARK_.call(null,res))
{return res;
} else
{if((res == null))
{return lt.objs.console.error.call(null,[cljs.core.str("No response received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(obj))].join(''));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(res)))
{return lt.objs.console.error.call(null,[cljs.core.str("Error received from linter "),cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(obj))].join(''),res);
} else
{return null;
}
}
}
});
;})(state_val_28745,c__22463__auto__,validate_chans))
})();var inst_28741 = cljs.core.mapcat.call(null,inst_28740,validate_chans,validate_chans);var inst_28742 = callback.call(null,inst_28741);var state_28744__$1 = state_28744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28744__$1,inst_28742);
} else
{return null;
}
});})(c__22463__auto__,validate_chans))
;return ((function (switch__22387__auto__,c__22463__auto__,validate_chans){
return (function() {
var state_machine__22388__auto__ = null;
var state_machine__22388__auto____0 = (function (){var statearr_28750 = [null,null,null,null,null,null,null];(statearr_28750[0] = state_machine__22388__auto__);
(statearr_28750[1] = 1);
return statearr_28750;
});
var state_machine__22388__auto____1 = (function (state_28744){while(true){
var ret_value__22389__auto__ = (function (){try{while(true){
var result__22390__auto__ = switch__22387__auto__.call(null,state_28744);if(cljs.core.keyword_identical_QMARK_.call(null,result__22390__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22390__auto__;
}
break;
}
}catch (e28751){if((e28751 instanceof Object))
{var ex__22391__auto__ = e28751;var statearr_28752_28782 = state_28744;(statearr_28752_28782[5] = ex__22391__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22389__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28783 = state_28744;
state_28744 = G__28783;
continue;
}
} else
{return ret_value__22389__auto__;
}
break;
}
});
state_machine__22388__auto__ = function(state_28744){
switch(arguments.length){
case 0:
return state_machine__22388__auto____0.call(this);
case 1:
return state_machine__22388__auto____1.call(this,state_28744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22388__auto____0;
state_machine__22388__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22388__auto____1;
return state_machine__22388__auto__;
})()
;})(switch__22387__auto__,c__22463__auto__,validate_chans))
})();var state__22465__auto__ = (function (){var statearr_28753 = f__22464__auto__.call(null);(statearr_28753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22463__auto__);
return statearr_28753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22465__auto__);
});})(c__22463__auto__,validate_chans))
);
return c__22463__auto__;
});
;})(validate_chans))
};
var validate_with_all_linters = function (var_args){
var linter_objs = null;if (arguments.length > 0) {
  linter_objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return validate_with_all_linters__delegate.call(this,linter_objs);};
validate_with_all_linters.cljs$lang$maxFixedArity = 0;
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__28784){
var linter_objs = cljs.core.seq(arglist__28784);
return validate_with_all_linters__delegate(linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.objs.editor.lint.__BEH__register_linter = (function __BEH__register_linter(this$,p__28754){var vec__28756 = p__28754;var linter_obj = cljs.core.nth.call(null,vec__28756,0,null);var args = cljs.core.nthnext.call(null,vec__28756,1);lt.objs.editor.add_gutter.call(null,this$,"CodeMirror-lint-markers",10);
var ed_tag = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"tags","tags",1017456523)], null)));var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,args);var new_linters = lt.object.merge_BANG_.call(null,lt.objs.editor.lint.linters,cljs.core.update_in.call(null,cljs.core.deref.call(null,lt.objs.editor.lint.linters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-tag","by-tag",3932762262),ed_tag], null),cljs.core.conj,obj));var validator_fn = cljs.core.apply.call(null,lt.objs.editor.lint.validate_with_all_linters,new cljs.core.Keyword(null,"by-tag","by-tag",3932762262).cljs$core$IFn$_invoke$arity$1(new_linters));return lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"getAnnotations","getAnnotations",3706893664),validator_fn], null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.editor.lint","register-linter","lt.objs.editor.lint/register-linter",4391870434),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.editor.lint.__BEH__register_linter,new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Register linter",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"linter",new cljs.core.Keyword(null,"example","example",3985900764),"[:lt.plugins.some-linter/linter-object :arg1 val1 :arg2 val2]"], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.lt-lint')) {
goog.provide('lt.plugins.lt_lint');
goog.require('cljs.core');
goog.require('lt.objs.editor.lint');
}

//# sourceMappingURL=lt-lint_compiled.js.map