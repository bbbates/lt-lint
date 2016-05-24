if(!lt.util.load.provided_QMARK_('cljs.core.async.impl.protocols')) {
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = 1024;
cljs.core.async.impl.protocols.ReadPort = (function (){var obj29252 = {};return obj29252;
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
cljs.core.async.impl.protocols.WritePort = (function (){var obj29254 = {};return obj29254;
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
cljs.core.async.impl.protocols.Channel = (function (){var obj29256 = {};return obj29256;
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
cljs.core.async.impl.protocols.Handler = (function (){var obj29258 = {};return obj29258;
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
cljs.core.async.impl.protocols.Buffer = (function (){var obj29260 = {};return obj29260;
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
cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj29262 = {};return obj29262;
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
var G__29198 = (cnt + 1);
cnt = G__29198;
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
{var v_29199 = this$.pop();if(keep_QMARK_.call(null,v_29199))
{this$.unshift(v_29199);
} else
{}
{
var G__29200 = (x + 1);
x = G__29200;
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
var count_29248 = 0;while(true){
var m_29249 = cljs.core.async.impl.dispatch.tasks.pop();if((m_29249 == null))
{} else
{m_29249.call(null);
if((count_29248 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE))
{{
var G__29250 = (count_29248 + 1);
count_29248 = G__29250;
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
cljs.core.async.impl.channels.box = (function box(val){if(typeof cljs.core.async.impl.channels.t29204 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.channels.t29204 = (function (val,box,meta29205){
this.val = val;
this.box = box;
this.meta29205 = meta29205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t29204.cljs$lang$type = true;
cljs.core.async.impl.channels.t29204.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t29204";
cljs.core.async.impl.channels.t29204.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.channels/t29204");
});
cljs.core.async.impl.channels.t29204.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.val;
});
cljs.core.async.impl.channels.t29204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29206){var self__ = this;
var _29206__$1 = this;return self__.meta29205;
});
cljs.core.async.impl.channels.t29204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29206,meta29205__$1){var self__ = this;
var _29206__$1 = this;return (new cljs.core.async.impl.channels.t29204(self__.val,self__.box,meta29205__$1));
});
cljs.core.async.impl.channels.__GT_t29204 = (function __GT_t29204(val__$1,box__$1,meta29205){return (new cljs.core.async.impl.channels.t29204(val__$1,box__$1,meta29205));
});
}
return (new cljs.core.async.impl.channels.t29204(val,box,null));
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
cljs.core.async.impl.channels.MMC = (function (){var obj29208 = {};return obj29208;
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
var taker_29223 = self__.takes.pop();if((taker_29223 == null))
{} else
{if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29223))
{var take_cb_29224 = cljs.core.async.impl.protocols.commit.call(null,taker_29223);var val_29225 = (cljs.core.truth_((function (){var and__19791__auto__ = self__.buf;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.count.call(null,self__.buf) > 0);
} else
{return and__19791__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29224,val_29225,taker_29223,this$__$1){
return (function (){return take_cb_29224.call(null,val_29225);
});})(take_cb_29224,val_29225,taker_29223,this$__$1))
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
{var putter_29226 = self__.puts.pop();if((putter_29226 == null))
{} else
{var put_handler_29227 = putter_29226.handler;var val_29228 = putter_29226.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29227))
{var put_cb_29229 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29227);cljs.core.async.impl.protocols.commit.call(null,handler);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29229,put_handler_29227,val_29228,putter_29226,_,retval,this$__$1){
return (function (){return put_cb_29229.call(null,true);
});})(put_cb_29229,put_handler_29227,val_29228,putter_29226,_,retval,this$__$1))
);
if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_29228)))
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
{var taker_29230 = self__.takes.pop();if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_29230))
{var take_cb_29231 = cljs.core.async.impl.protocols.commit.call(null,taker_29230);var val_29232__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_29231,val_29232__$1,taker_29230,done_QMARK_,closed__$1,this$__$1){
return (function (){return take_cb_29231.call(null,val_29232__$1);
});})(take_cb_29231,val_29232__$1,taker_29230,done_QMARK_,closed__$1,this$__$1))
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
var putter_29233 = self__.puts.pop();if((putter_29233 == null))
{} else
{var put_handler_29234 = putter_29233.handler;var val_29235 = putter_29233.val;if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_29234))
{var put_cb_29236 = cljs.core.async.impl.protocols.commit.call(null,put_handler_29234);cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_29236,put_handler_29234,val_29235,putter_29233,this$__$1){
return (function (){return put_cb_29236.call(null,true);
});})(put_cb_29236,put_handler_29234,val_29235,putter_29233,this$__$1))
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
var G__29237 = null;
var G__29237__1 = (function (buf__$1){try{return add_BANG_.call(null,buf__$1);
}catch (e29211){var t = e29211;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__29237__2 = (function (buf__$1,val){try{return add_BANG_.call(null,buf__$1,val);
}catch (e29212){var t = e29212;return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__29237 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__29237__1.call(this,buf__$1);
case 2:
return G__29237__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__29237;
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
var G__29283 = (level + 1);
level = G__29283;
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
var skip_list_node__3 = (function (k,v,level){var arr = (new Array((level + 1)));var i_29284 = 0;while(true){
if((i_29284 < arr.length))
{(arr[i_29284] = null);
{
var G__29285 = (i_29284 + 1);
i_29284 = G__29285;
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
var G__29286 = x_SINGLEQUOTE_;
x__$1 = G__29286;
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
var G__29287 = x__$1;
var G__29288 = k;
var G__29289 = (level - 1);
var G__29290 = update;
x = G__29287;
k = G__29288;
level = G__29289;
update = G__29290;
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
{var i_29291 = (self__.level + 1);while(true){
if((i_29291 <= (new_level + 1)))
{(update[i_29291] = self__.header);
{
var G__29292 = (i_29291 + 1);
i_29291 = G__29292;
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
{var i_29293 = 0;while(true){
if((i_29293 <= self__.level))
{var links_29294 = (update[i_29293]).forward;if(((links_29294[i_29293]) === x__$1))
{(links_29294[i_29293] = (x__$1.forward[i_29293]));
{
var G__29295 = (i_29293 + 1);
i_29293 = G__29295;
continue;
}
} else
{{
var G__29296 = (i_29293 + 1);
i_29293 = G__29296;
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
var G__29297 = x_SINGLEQUOTE_;
x__$1 = G__29297;
continue;
}
}
}
break;
}
})();if(!((nx == null)))
{{
var G__29298 = nx;
var G__29299 = (level__$1 - 1);
x = G__29298;
level__$1 = G__29299;
continue;
}
} else
{{
var G__29300 = x;
var G__29301 = (level__$1 - 1);
x = G__29300;
level__$1 = G__29301;
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
var G__29302 = x_SINGLEQUOTE_;
x__$1 = G__29302;
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
var G__29303 = nx;
var G__29304 = (level__$1 - 1);
x = G__29303;
level__$1 = G__29304;
continue;
}
} else
{{
var G__29305 = x;
var G__29306 = (level__$1 - 1);
x = G__29305;
level__$1 = G__29306;
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
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t29128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t29128 = (function (f,fn_handler,meta29129){
this.f = f;
this.fn_handler = fn_handler;
this.meta29129 = meta29129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t29128.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t29128.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t29128";
cljs.core.async.impl.ioc_helpers.t29128.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async.impl.ioc-helpers/t29128");
});
cljs.core.async.impl.ioc_helpers.t29128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t29128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t29128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t29128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29130){var self__ = this;
var _29130__$1 = this;return self__.meta29129;
});
cljs.core.async.impl.ioc_helpers.t29128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29130,meta29129__$1){var self__ = this;
var _29130__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t29128(self__.f,self__.fn_handler,meta29129__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t29128 = (function __GT_t29128(f__$1,fn_handler__$1,meta29129){return (new cljs.core.async.impl.ioc_helpers.t29128(f__$1,fn_handler__$1,meta29129));
});
}
return (new cljs.core.async.impl.ioc_helpers.t29128(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29132){if((e29132 instanceof Object))
{var ex = e29132;cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29132;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){var statearr_29135_29178 = state;(statearr_29135_29178[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_29135_29178[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29136_29179 = state;(statearr_29136_29179[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29136_29179[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){var statearr_29139_29180 = state;(statearr_29139_29180[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_29139_29180[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_29140_29181 = state;(statearr_29140_29181[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
(statearr_29140_29181[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29141){var map__29146 = p__29141;var map__29146__$1 = ((cljs.core.seq_QMARK_.call(null,map__29146))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);var opts = map__29146__$1;var statearr_29147_29182 = state;(statearr_29147_29182[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts.call(null,((function (map__29146,map__29146__$1,opts){
return (function (val){var statearr_29148_29183 = state;(statearr_29148_29183[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29146,map__29146__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_29149_29184 = state;(statearr_29149_29184[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29141 = null;if (arguments.length > 3) {
  p__29141 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29141);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29185){
var state = cljs.core.first(arglist__29185);
arglist__29185 = cljs.core.next(arglist__29185);
var cont_block = cljs.core.first(arglist__29185);
arglist__29185 = cljs.core.next(arglist__29185);
var ports = cljs.core.first(arglist__29185);
var p__29141 = cljs.core.rest(arglist__29185);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29141);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20391__auto__,k29151,else__20392__auto__){var self__ = this;
var this__20391__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k29151,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29151,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29151,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29151,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k29151,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k29151,else__20392__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20396__auto__,k__20397__auto__,G__29150){var self__ = this;
var this__20396__auto____$1 = this;var pred__29153 = cljs.core.keyword_identical_QMARK_;var expr__29154 = k__20397__auto__;if(cljs.core.truth_(pred__29153.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__29154)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29150,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29153.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__29154)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29150,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29153.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__29154)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29150,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29153.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__29154)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29150,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29153.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__29154)))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29150,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20397__auto__,G__29150),null));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20388__auto__,G__29150){var self__ = this;
var this__20388__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29150,self__.__extmap,self__.__hash));
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__29152){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__29152),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__29152),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__29152),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__29152),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__29152),null,cljs.core.dissoc.call(null,G__29152,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_29157 = state;(statearr_29157[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_29157;
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
{var statearr_29163 = state;(statearr_29163[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_29163[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_29163[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null));
return statearr_29163;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = exception;if(cljs.core.truth_(and__19791__auto__))
{return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__19791__auto__;
}
})()))
{var statearr_29164_29186 = state;(statearr_29164_29186[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__29187 = state;
state = G__29187;
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
{var statearr_29165 = state;(statearr_29165[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29165[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29165;
} else
{if(cljs.core.truth_((function (){var and__19791__auto__ = cljs.core.not.call(null,exception);if(and__19791__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__19791__auto__;
}
})()))
{var statearr_29166 = state;(statearr_29166[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29166[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_29166;
} else
{if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_29167 = state;(statearr_29167[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_29167[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_29167;
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26046 = (function (f,fn_handler,meta26047){
this.f = f;
this.fn_handler = fn_handler;
this.meta26047 = meta26047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26046.cljs$lang$type = true;
cljs.core.async.t26046.cljs$lang$ctorStr = "cljs.core.async/t26046";
cljs.core.async.t26046.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26046");
});
cljs.core.async.t26046.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26048){var self__ = this;
var _26048__$1 = this;return self__.meta26047;
});
cljs.core.async.t26046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26048,meta26047__$1){var self__ = this;
var _26048__$1 = this;return (new cljs.core.async.t26046(self__.f,self__.fn_handler,meta26047__$1));
});
cljs.core.async.__GT_t26046 = (function __GT_t26046(f__$1,fn_handler__$1,meta26047){return (new cljs.core.async.t26046(f__$1,fn_handler__$1,meta26047));
});
}
return (new cljs.core.async.t26046(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26050 = buff;if(G__26050)
{var bit__20453__auto__ = null;if(cljs.core.truth_((function (){var or__19803__auto__ = bit__20453__auto__;if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return G__26050.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26050.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26050);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26050);
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
{var val_28753 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28753);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28753,ret){
return (function (){return fn1.call(null,val_28753);
});})(val_28753,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__20651__auto___28754 = n;var x_28755 = 0;while(true){
if((x_28755 < n__20651__auto___28754))
{(a[x_28755] = 0);
{
var G__28756 = (x_28755 + 1);
x_28755 = G__28756;
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
var G__28757 = (i + 1);
i = G__28757;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26054 = (function (flag,alt_flag,meta26055){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26055 = meta26055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26054.cljs$lang$type = true;
cljs.core.async.t26054.cljs$lang$ctorStr = "cljs.core.async/t26054";
cljs.core.async.t26054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26054");
});})(flag))
;
cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t26054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26056){var self__ = this;
var _26056__$1 = this;return self__.meta26055;
});})(flag))
;
cljs.core.async.t26054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26056,meta26055__$1){var self__ = this;
var _26056__$1 = this;return (new cljs.core.async.t26054(self__.flag,self__.alt_flag,meta26055__$1));
});})(flag))
;
cljs.core.async.__GT_t26054 = ((function (flag){
return (function __GT_t26054(flag__$1,alt_flag__$1,meta26055){return (new cljs.core.async.t26054(flag__$1,alt_flag__$1,meta26055));
});})(flag))
;
}
return (new cljs.core.async.t26054(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26060 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26060 = (function (cb,flag,alt_handler,meta26061){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26061 = meta26061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26060.cljs$lang$type = true;
cljs.core.async.t26060.cljs$lang$ctorStr = "cljs.core.async/t26060";
cljs.core.async.t26060.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t26060");
});
cljs.core.async.t26060.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26062){var self__ = this;
var _26062__$1 = this;return self__.meta26061;
});
cljs.core.async.t26060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26062,meta26061__$1){var self__ = this;
var _26062__$1 = this;return (new cljs.core.async.t26060(self__.cb,self__.flag,self__.alt_handler,meta26061__$1));
});
cljs.core.async.__GT_t26060 = (function __GT_t26060(cb__$1,flag__$1,alt_handler__$1,meta26061){return (new cljs.core.async.t26060(cb__$1,flag__$1,alt_handler__$1,meta26061));
});
}
return (new cljs.core.async.t26060(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26063_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26064_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26064_SHARP_,port], null));
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
var G__28758 = (i + 1);
i = G__28758;
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
var alts_BANG___delegate = function (ports,p__26065){var map__26067 = p__26065;var map__26067__$1 = ((cljs.core.seq_QMARK_.call(null,map__26067))?cljs.core.apply.call(null,cljs.core.hash_map,map__26067):map__26067);var opts = map__26067__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__26065 = null;if (arguments.length > 1) {
  p__26065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26065);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28759){
var ports = cljs.core.first(arglist__28759);
var p__26065 = cljs.core.rest(arglist__28759);
return alts_BANG___delegate(ports,p__26065);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22567__auto___28760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28760){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28760){
return (function (state_26138){var state_val_26139 = (state_26138[1]);if((state_val_26139 === 1))
{var state_26138__$1 = state_26138;var statearr_26140_28761 = state_26138__$1;(statearr_26140_28761[2] = null);
(statearr_26140_28761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 2))
{var state_26138__$1 = state_26138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26138__$1,4,from);
} else
{if((state_val_26139 === 3))
{var inst_26136 = (state_26138[2]);var state_26138__$1 = state_26138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26138__$1,inst_26136);
} else
{if((state_val_26139 === 4))
{var inst_26117 = (state_26138[7]);var inst_26117__$1 = (state_26138[2]);var inst_26118 = (inst_26117__$1 == null);var state_26138__$1 = (function (){var statearr_26141 = state_26138;(statearr_26141[7] = inst_26117__$1);
return statearr_26141;
})();if(cljs.core.truth_(inst_26118))
{var statearr_26142_28762 = state_26138__$1;(statearr_26142_28762[1] = 5);
} else
{var statearr_26143_28763 = state_26138__$1;(statearr_26143_28763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 5))
{var state_26138__$1 = state_26138;if(cljs.core.truth_(close_QMARK_))
{var statearr_26144_28764 = state_26138__$1;(statearr_26144_28764[1] = 8);
} else
{var statearr_26145_28765 = state_26138__$1;(statearr_26145_28765[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 6))
{var inst_26117 = (state_26138[7]);var state_26138__$1 = state_26138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26138__$1,11,to,inst_26117);
} else
{if((state_val_26139 === 7))
{var inst_26134 = (state_26138[2]);var state_26138__$1 = state_26138;var statearr_26146_28766 = state_26138__$1;(statearr_26146_28766[2] = inst_26134);
(statearr_26146_28766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 8))
{var inst_26121 = cljs.core.async.close_BANG_.call(null,to);var state_26138__$1 = state_26138;var statearr_26147_28767 = state_26138__$1;(statearr_26147_28767[2] = inst_26121);
(statearr_26147_28767[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 9))
{var state_26138__$1 = state_26138;var statearr_26148_28768 = state_26138__$1;(statearr_26148_28768[2] = null);
(statearr_26148_28768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 10))
{var inst_26124 = (state_26138[2]);var state_26138__$1 = state_26138;var statearr_26149_28769 = state_26138__$1;(statearr_26149_28769[2] = inst_26124);
(statearr_26149_28769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 11))
{var inst_26127 = (state_26138[2]);var state_26138__$1 = state_26138;if(cljs.core.truth_(inst_26127))
{var statearr_26150_28770 = state_26138__$1;(statearr_26150_28770[1] = 12);
} else
{var statearr_26151_28771 = state_26138__$1;(statearr_26151_28771[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 12))
{var state_26138__$1 = state_26138;var statearr_26152_28772 = state_26138__$1;(statearr_26152_28772[2] = null);
(statearr_26152_28772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 13))
{var state_26138__$1 = state_26138;var statearr_26153_28773 = state_26138__$1;(statearr_26153_28773[2] = null);
(statearr_26153_28773[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26139 === 14))
{var inst_26132 = (state_26138[2]);var state_26138__$1 = state_26138;var statearr_26154_28774 = state_26138__$1;(statearr_26154_28774[2] = inst_26132);
(statearr_26154_28774[1] = 7);
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
});})(c__22567__auto___28760))
;return ((function (switch__22491__auto__,c__22567__auto___28760){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26158 = [null,null,null,null,null,null,null,null];(statearr_26158[0] = state_machine__22492__auto__);
(statearr_26158[1] = 1);
return statearr_26158;
});
var state_machine__22492__auto____1 = (function (state_26138){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26138);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26159){if((e26159 instanceof Object))
{var ex__22495__auto__ = e26159;var statearr_26160_28775 = state_26138;(statearr_26160_28775[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26138);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28776 = state_26138;
state_26138 = G__28776;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26138){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28760))
})();var state__22569__auto__ = (function (){var statearr_26161 = f__22568__auto__.call(null);(statearr_26161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28760);
return statearr_26161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28760))
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
return (function (p__26344){var vec__26345 = p__26344;var v = cljs.core.nth.call(null,vec__26345,0,null);var p = cljs.core.nth.call(null,vec__26345,1,null);var job = vec__26345;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1,xf,ex_handler);var c__22567__auto___28777 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results){
return (function (state_26350){var state_val_26351 = (state_26350[1]);if((state_val_26351 === 2))
{var inst_26347 = (state_26350[2]);var inst_26348 = cljs.core.async.close_BANG_.call(null,res);var state_26350__$1 = (function (){var statearr_26352 = state_26350;(statearr_26352[7] = inst_26347);
return statearr_26352;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26350__$1,inst_26348);
} else
{if((state_val_26351 === 1))
{var state_26350__$1 = state_26350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26350__$1,2,res,v);
} else
{return null;
}
}
});})(c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results))
;return ((function (switch__22491__auto__,c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26356 = [null,null,null,null,null,null,null,null];(statearr_26356[0] = state_machine__22492__auto__);
(statearr_26356[1] = 1);
return statearr_26356;
});
var state_machine__22492__auto____1 = (function (state_26350){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26350);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26357){if((e26357 instanceof Object))
{var ex__22495__auto__ = e26357;var statearr_26358_28778 = state_26350;(statearr_26358_28778[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28779 = state_26350;
state_26350 = G__28779;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26350){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results))
})();var state__22569__auto__ = (function (){var statearr_26359 = f__22568__auto__.call(null);(statearr_26359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28777);
return statearr_26359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28777,res,vec__26345,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__26360){var vec__26361 = p__26360;var v = cljs.core.nth.call(null,vec__26361,0,null);var p = cljs.core.nth.call(null,vec__26361,1,null);var job = vec__26361;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,1);xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__20651__auto___28780 = n;var __28781 = 0;while(true){
if((__28781 < n__20651__auto___28780))
{var G__26362_28782 = type;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"async","async",1107031534),G__26362_28782))
{var c__22567__auto___28783 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28781,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (__28781,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function (state_26375){var state_val_26376 = (state_26375[1]);if((state_val_26376 === 7))
{var inst_26371 = (state_26375[2]);var state_26375__$1 = state_26375;var statearr_26377_28784 = state_26375__$1;(statearr_26377_28784[2] = inst_26371);
(statearr_26377_28784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26376 === 6))
{var state_26375__$1 = state_26375;var statearr_26378_28785 = state_26375__$1;(statearr_26378_28785[2] = null);
(statearr_26378_28785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26376 === 5))
{var state_26375__$1 = state_26375;var statearr_26379_28786 = state_26375__$1;(statearr_26379_28786[2] = null);
(statearr_26379_28786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26376 === 4))
{var inst_26365 = (state_26375[2]);var inst_26366 = async.call(null,inst_26365);var state_26375__$1 = state_26375;if(cljs.core.truth_(inst_26366))
{var statearr_26380_28787 = state_26375__$1;(statearr_26380_28787[1] = 5);
} else
{var statearr_26381_28788 = state_26375__$1;(statearr_26381_28788[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26376 === 3))
{var inst_26373 = (state_26375[2]);var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26375__$1,inst_26373);
} else
{if((state_val_26376 === 2))
{var state_26375__$1 = state_26375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26375__$1,4,jobs);
} else
{if((state_val_26376 === 1))
{var state_26375__$1 = state_26375;var statearr_26382_28789 = state_26375__$1;(statearr_26382_28789[2] = null);
(statearr_26382_28789[1] = 2);
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
});})(__28781,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
;return ((function (__28781,switch__22491__auto__,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26386 = [null,null,null,null,null,null,null];(statearr_26386[0] = state_machine__22492__auto__);
(statearr_26386[1] = 1);
return statearr_26386;
});
var state_machine__22492__auto____1 = (function (state_26375){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26375);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26387){if((e26387 instanceof Object))
{var ex__22495__auto__ = e26387;var statearr_26388_28790 = state_26375;(statearr_26388_28790[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28791 = state_26375;
state_26375 = G__28791;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26375){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(__28781,switch__22491__auto__,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26389 = f__22568__auto__.call(null);(statearr_26389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28783);
return statearr_26389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(__28781,c__22567__auto___28783,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compute","compute",1964407721),G__26362_28782))
{var c__22567__auto___28792 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (__28781,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (__28781,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function (state_26402){var state_val_26403 = (state_26402[1]);if((state_val_26403 === 7))
{var inst_26398 = (state_26402[2]);var state_26402__$1 = state_26402;var statearr_26404_28793 = state_26402__$1;(statearr_26404_28793[2] = inst_26398);
(statearr_26404_28793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26403 === 6))
{var state_26402__$1 = state_26402;var statearr_26405_28794 = state_26402__$1;(statearr_26405_28794[2] = null);
(statearr_26405_28794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26403 === 5))
{var state_26402__$1 = state_26402;var statearr_26406_28795 = state_26402__$1;(statearr_26406_28795[2] = null);
(statearr_26406_28795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26403 === 4))
{var inst_26392 = (state_26402[2]);var inst_26393 = process.call(null,inst_26392);var state_26402__$1 = state_26402;if(cljs.core.truth_(inst_26393))
{var statearr_26407_28796 = state_26402__$1;(statearr_26407_28796[1] = 5);
} else
{var statearr_26408_28797 = state_26402__$1;(statearr_26408_28797[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26403 === 3))
{var inst_26400 = (state_26402[2]);var state_26402__$1 = state_26402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26402__$1,inst_26400);
} else
{if((state_val_26403 === 2))
{var state_26402__$1 = state_26402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26402__$1,4,jobs);
} else
{if((state_val_26403 === 1))
{var state_26402__$1 = state_26402;var statearr_26409_28798 = state_26402__$1;(statearr_26409_28798[2] = null);
(statearr_26409_28798[1] = 2);
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
});})(__28781,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
;return ((function (__28781,switch__22491__auto__,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26413 = [null,null,null,null,null,null,null];(statearr_26413[0] = state_machine__22492__auto__);
(statearr_26413[1] = 1);
return statearr_26413;
});
var state_machine__22492__auto____1 = (function (state_26402){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26402);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26414){if((e26414 instanceof Object))
{var ex__22495__auto__ = e26414;var statearr_26415_28799 = state_26402;(statearr_26415_28799[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28800 = state_26402;
state_26402 = G__28800;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26402){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(__28781,switch__22491__auto__,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26416 = f__22568__auto__.call(null);(statearr_26416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28792);
return statearr_26416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(__28781,c__22567__auto___28792,G__26362_28782,n__20651__auto___28780,jobs,results,process,async))
);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));
} else
{}
}
}
{
var G__28801 = (__28781 + 1);
__28781 = G__28801;
continue;
}
} else
{}
break;
}
var c__22567__auto___28802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28802,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28802,jobs,results,process,async){
return (function (state_26437){var state_val_26438 = (state_26437[1]);if((state_val_26438 === 9))
{var inst_26430 = (state_26437[2]);var state_26437__$1 = (function (){var statearr_26439 = state_26437;(statearr_26439[7] = inst_26430);
return statearr_26439;
})();var statearr_26440_28803 = state_26437__$1;(statearr_26440_28803[2] = null);
(statearr_26440_28803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26438 === 8))
{var inst_26424 = (state_26437[8]);var inst_26428 = (state_26437[2]);var state_26437__$1 = (function (){var statearr_26441 = state_26437;(statearr_26441[9] = inst_26428);
return statearr_26441;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,9,results,inst_26424);
} else
{if((state_val_26438 === 7))
{var inst_26433 = (state_26437[2]);var state_26437__$1 = state_26437;var statearr_26442_28804 = state_26437__$1;(statearr_26442_28804[2] = inst_26433);
(statearr_26442_28804[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26438 === 6))
{var inst_26424 = (state_26437[8]);var inst_26419 = (state_26437[10]);var inst_26424__$1 = cljs.core.async.chan.call(null,1);var inst_26425 = [inst_26419,inst_26424__$1];var inst_26426 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_26425,null));var state_26437__$1 = (function (){var statearr_26443 = state_26437;(statearr_26443[8] = inst_26424__$1);
return statearr_26443;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,8,jobs,inst_26426);
} else
{if((state_val_26438 === 5))
{var inst_26422 = cljs.core.async.close_BANG_.call(null,jobs);var state_26437__$1 = state_26437;var statearr_26444_28805 = state_26437__$1;(statearr_26444_28805[2] = inst_26422);
(statearr_26444_28805[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26438 === 4))
{var inst_26419 = (state_26437[10]);var inst_26419__$1 = (state_26437[2]);var inst_26420 = (inst_26419__$1 == null);var state_26437__$1 = (function (){var statearr_26445 = state_26437;(statearr_26445[10] = inst_26419__$1);
return statearr_26445;
})();if(cljs.core.truth_(inst_26420))
{var statearr_26446_28806 = state_26437__$1;(statearr_26446_28806[1] = 5);
} else
{var statearr_26447_28807 = state_26437__$1;(statearr_26447_28807[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26438 === 3))
{var inst_26435 = (state_26437[2]);var state_26437__$1 = state_26437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else
{if((state_val_26438 === 2))
{var state_26437__$1 = state_26437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26437__$1,4,from);
} else
{if((state_val_26438 === 1))
{var state_26437__$1 = state_26437;var statearr_26448_28808 = state_26437__$1;(statearr_26448_28808[2] = null);
(statearr_26448_28808[1] = 2);
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
});})(c__22567__auto___28802,jobs,results,process,async))
;return ((function (switch__22491__auto__,c__22567__auto___28802,jobs,results,process,async){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26452 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26452[0] = state_machine__22492__auto__);
(statearr_26452[1] = 1);
return statearr_26452;
});
var state_machine__22492__auto____1 = (function (state_26437){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26437);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object))
{var ex__22495__auto__ = e26453;var statearr_26454_28809 = state_26437;(statearr_26454_28809[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28810 = state_26437;
state_26437 = G__28810;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28802,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26455 = f__22568__auto__.call(null);(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28802);
return statearr_26455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28802,jobs,results,process,async))
);
var c__22567__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto__,jobs,results,process,async){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto__,jobs,results,process,async){
return (function (state_26493){var state_val_26494 = (state_26493[1]);if((state_val_26494 === 1))
{var state_26493__$1 = state_26493;var statearr_26495_28811 = state_26493__$1;(statearr_26495_28811[2] = null);
(statearr_26495_28811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 2))
{var state_26493__$1 = state_26493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26493__$1,4,results);
} else
{if((state_val_26494 === 3))
{var inst_26491 = (state_26493[2]);var state_26493__$1 = state_26493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26493__$1,inst_26491);
} else
{if((state_val_26494 === 4))
{var inst_26458 = (state_26493[7]);var inst_26458__$1 = (state_26493[2]);var inst_26459 = (inst_26458__$1 == null);var state_26493__$1 = (function (){var statearr_26496 = state_26493;(statearr_26496[7] = inst_26458__$1);
return statearr_26496;
})();if(cljs.core.truth_(inst_26459))
{var statearr_26497_28812 = state_26493__$1;(statearr_26497_28812[1] = 5);
} else
{var statearr_26498_28813 = state_26493__$1;(statearr_26498_28813[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 5))
{var state_26493__$1 = state_26493;if(cljs.core.truth_(close_QMARK_))
{var statearr_26499_28814 = state_26493__$1;(statearr_26499_28814[1] = 8);
} else
{var statearr_26500_28815 = state_26493__$1;(statearr_26500_28815[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 6))
{var inst_26458 = (state_26493[7]);var state_26493__$1 = state_26493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26493__$1,11,inst_26458);
} else
{if((state_val_26494 === 7))
{var inst_26489 = (state_26493[2]);var state_26493__$1 = state_26493;var statearr_26501_28816 = state_26493__$1;(statearr_26501_28816[2] = inst_26489);
(statearr_26501_28816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 8))
{var inst_26462 = cljs.core.async.close_BANG_.call(null,to);var state_26493__$1 = state_26493;var statearr_26502_28817 = state_26493__$1;(statearr_26502_28817[2] = inst_26462);
(statearr_26502_28817[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 9))
{var state_26493__$1 = state_26493;var statearr_26503_28818 = state_26493__$1;(statearr_26503_28818[2] = null);
(statearr_26503_28818[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 10))
{var inst_26465 = (state_26493[2]);var state_26493__$1 = state_26493;var statearr_26504_28819 = state_26493__$1;(statearr_26504_28819[2] = inst_26465);
(statearr_26504_28819[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 11))
{var inst_26468 = (state_26493[2]);var state_26493__$1 = (function (){var statearr_26505 = state_26493;(statearr_26505[8] = inst_26468);
return statearr_26505;
})();var statearr_26506_28820 = state_26493__$1;(statearr_26506_28820[2] = null);
(statearr_26506_28820[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 12))
{var inst_26468 = (state_26493[8]);var state_26493__$1 = state_26493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26493__$1,14,inst_26468);
} else
{if((state_val_26494 === 13))
{var inst_26486 = (state_26493[2]);var state_26493__$1 = (function (){var statearr_26507 = state_26493;(statearr_26507[9] = inst_26486);
return statearr_26507;
})();var statearr_26508_28821 = state_26493__$1;(statearr_26508_28821[2] = null);
(statearr_26508_28821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 14))
{var inst_26471 = (state_26493[10]);var inst_26473 = (state_26493[11]);var inst_26471__$1 = (state_26493[2]);var inst_26472 = (inst_26471__$1 == null);var inst_26473__$1 = cljs.core.not.call(null,inst_26472);var state_26493__$1 = (function (){var statearr_26509 = state_26493;(statearr_26509[10] = inst_26471__$1);
(statearr_26509[11] = inst_26473__$1);
return statearr_26509;
})();if(inst_26473__$1)
{var statearr_26510_28822 = state_26493__$1;(statearr_26510_28822[1] = 15);
} else
{var statearr_26511_28823 = state_26493__$1;(statearr_26511_28823[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 15))
{var inst_26471 = (state_26493[10]);var state_26493__$1 = state_26493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26493__$1,18,to,inst_26471);
} else
{if((state_val_26494 === 16))
{var inst_26473 = (state_26493[11]);var state_26493__$1 = state_26493;var statearr_26512_28824 = state_26493__$1;(statearr_26512_28824[2] = inst_26473);
(statearr_26512_28824[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 17))
{var inst_26479 = (state_26493[2]);var state_26493__$1 = state_26493;if(cljs.core.truth_(inst_26479))
{var statearr_26513_28825 = state_26493__$1;(statearr_26513_28825[1] = 19);
} else
{var statearr_26514_28826 = state_26493__$1;(statearr_26514_28826[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 18))
{var inst_26476 = (state_26493[2]);var state_26493__$1 = state_26493;var statearr_26515_28827 = state_26493__$1;(statearr_26515_28827[2] = inst_26476);
(statearr_26515_28827[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 19))
{var state_26493__$1 = state_26493;var statearr_26516_28828 = state_26493__$1;(statearr_26516_28828[2] = null);
(statearr_26516_28828[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 20))
{var state_26493__$1 = state_26493;var statearr_26517_28829 = state_26493__$1;(statearr_26517_28829[2] = null);
(statearr_26517_28829[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26494 === 21))
{var inst_26484 = (state_26493[2]);var state_26493__$1 = state_26493;var statearr_26518_28830 = state_26493__$1;(statearr_26518_28830[2] = inst_26484);
(statearr_26518_28830[1] = 13);
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
var state_machine__22492__auto____0 = (function (){var statearr_26522 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26522[0] = state_machine__22492__auto__);
(statearr_26522[1] = 1);
return statearr_26522;
});
var state_machine__22492__auto____1 = (function (state_26493){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26493);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26523){if((e26523 instanceof Object))
{var ex__22495__auto__ = e26523;var statearr_26524_28831 = state_26493;(statearr_26524_28831[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26493);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28832 = state_26493;
state_26493 = G__28832;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26493){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,jobs,results,process,async))
})();var state__22569__auto__ = (function (){var statearr_26525 = f__22568__auto__.call(null);(statearr_26525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26525;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22567__auto___28833 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28833,tc,fc){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28833,tc,fc){
return (function (state_26601){var state_val_26602 = (state_26601[1]);if((state_val_26602 === 1))
{var state_26601__$1 = state_26601;var statearr_26603_28834 = state_26601__$1;(statearr_26603_28834[2] = null);
(statearr_26603_28834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 2))
{var state_26601__$1 = state_26601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26601__$1,4,ch);
} else
{if((state_val_26602 === 3))
{var inst_26599 = (state_26601[2]);var state_26601__$1 = state_26601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26601__$1,inst_26599);
} else
{if((state_val_26602 === 4))
{var inst_26578 = (state_26601[7]);var inst_26578__$1 = (state_26601[2]);var inst_26579 = (inst_26578__$1 == null);var state_26601__$1 = (function (){var statearr_26604 = state_26601;(statearr_26604[7] = inst_26578__$1);
return statearr_26604;
})();if(cljs.core.truth_(inst_26579))
{var statearr_26605_28835 = state_26601__$1;(statearr_26605_28835[1] = 5);
} else
{var statearr_26606_28836 = state_26601__$1;(statearr_26606_28836[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 5))
{var inst_26581 = cljs.core.async.close_BANG_.call(null,tc);var inst_26582 = cljs.core.async.close_BANG_.call(null,fc);var state_26601__$1 = (function (){var statearr_26607 = state_26601;(statearr_26607[8] = inst_26581);
return statearr_26607;
})();var statearr_26608_28837 = state_26601__$1;(statearr_26608_28837[2] = inst_26582);
(statearr_26608_28837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 6))
{var inst_26578 = (state_26601[7]);var inst_26584 = p.call(null,inst_26578);var state_26601__$1 = state_26601;if(cljs.core.truth_(inst_26584))
{var statearr_26609_28838 = state_26601__$1;(statearr_26609_28838[1] = 9);
} else
{var statearr_26610_28839 = state_26601__$1;(statearr_26610_28839[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 7))
{var inst_26597 = (state_26601[2]);var state_26601__$1 = state_26601;var statearr_26611_28840 = state_26601__$1;(statearr_26611_28840[2] = inst_26597);
(statearr_26611_28840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 8))
{var inst_26590 = (state_26601[2]);var state_26601__$1 = state_26601;if(cljs.core.truth_(inst_26590))
{var statearr_26612_28841 = state_26601__$1;(statearr_26612_28841[1] = 12);
} else
{var statearr_26613_28842 = state_26601__$1;(statearr_26613_28842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 9))
{var state_26601__$1 = state_26601;var statearr_26614_28843 = state_26601__$1;(statearr_26614_28843[2] = tc);
(statearr_26614_28843[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 10))
{var state_26601__$1 = state_26601;var statearr_26615_28844 = state_26601__$1;(statearr_26615_28844[2] = fc);
(statearr_26615_28844[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 11))
{var inst_26578 = (state_26601[7]);var inst_26588 = (state_26601[2]);var state_26601__$1 = state_26601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26601__$1,8,inst_26588,inst_26578);
} else
{if((state_val_26602 === 12))
{var state_26601__$1 = state_26601;var statearr_26616_28845 = state_26601__$1;(statearr_26616_28845[2] = null);
(statearr_26616_28845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 13))
{var state_26601__$1 = state_26601;var statearr_26617_28846 = state_26601__$1;(statearr_26617_28846[2] = null);
(statearr_26617_28846[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26602 === 14))
{var inst_26595 = (state_26601[2]);var state_26601__$1 = state_26601;var statearr_26618_28847 = state_26601__$1;(statearr_26618_28847[2] = inst_26595);
(statearr_26618_28847[1] = 7);
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
});})(c__22567__auto___28833,tc,fc))
;return ((function (switch__22491__auto__,c__22567__auto___28833,tc,fc){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_26622 = [null,null,null,null,null,null,null,null,null];(statearr_26622[0] = state_machine__22492__auto__);
(statearr_26622[1] = 1);
return statearr_26622;
});
var state_machine__22492__auto____1 = (function (state_26601){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26601);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26623){if((e26623 instanceof Object))
{var ex__22495__auto__ = e26623;var statearr_26624_28848 = state_26601;(statearr_26624_28848[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26623;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28849 = state_26601;
state_26601 = G__28849;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26601){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28833,tc,fc))
})();var state__22569__auto__ = (function (){var statearr_26625 = f__22568__auto__.call(null);(statearr_26625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28833);
return statearr_26625;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28833,tc,fc))
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
return (function (state_26672){var state_val_26673 = (state_26672[1]);if((state_val_26673 === 7))
{var inst_26668 = (state_26672[2]);var state_26672__$1 = state_26672;var statearr_26674_28850 = state_26672__$1;(statearr_26674_28850[2] = inst_26668);
(statearr_26674_28850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26673 === 6))
{var inst_26661 = (state_26672[7]);var inst_26658 = (state_26672[8]);var inst_26665 = f.call(null,inst_26658,inst_26661);var inst_26658__$1 = inst_26665;var state_26672__$1 = (function (){var statearr_26675 = state_26672;(statearr_26675[8] = inst_26658__$1);
return statearr_26675;
})();var statearr_26676_28851 = state_26672__$1;(statearr_26676_28851[2] = null);
(statearr_26676_28851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26673 === 5))
{var inst_26658 = (state_26672[8]);var state_26672__$1 = state_26672;var statearr_26677_28852 = state_26672__$1;(statearr_26677_28852[2] = inst_26658);
(statearr_26677_28852[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26673 === 4))
{var inst_26661 = (state_26672[7]);var inst_26661__$1 = (state_26672[2]);var inst_26662 = (inst_26661__$1 == null);var state_26672__$1 = (function (){var statearr_26678 = state_26672;(statearr_26678[7] = inst_26661__$1);
return statearr_26678;
})();if(cljs.core.truth_(inst_26662))
{var statearr_26679_28853 = state_26672__$1;(statearr_26679_28853[1] = 5);
} else
{var statearr_26680_28854 = state_26672__$1;(statearr_26680_28854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26673 === 3))
{var inst_26670 = (state_26672[2]);var state_26672__$1 = state_26672;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else
{if((state_val_26673 === 2))
{var state_26672__$1 = state_26672;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,4,ch);
} else
{if((state_val_26673 === 1))
{var inst_26658 = init;var state_26672__$1 = (function (){var statearr_26681 = state_26672;(statearr_26681[8] = inst_26658);
return statearr_26681;
})();var statearr_26682_28855 = state_26672__$1;(statearr_26682_28855[2] = null);
(statearr_26682_28855[1] = 2);
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
var state_machine__22492__auto____0 = (function (){var statearr_26686 = [null,null,null,null,null,null,null,null,null];(statearr_26686[0] = state_machine__22492__auto__);
(statearr_26686[1] = 1);
return statearr_26686;
});
var state_machine__22492__auto____1 = (function (state_26672){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26672);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26687){if((e26687 instanceof Object))
{var ex__22495__auto__ = e26687;var statearr_26688_28856 = state_26672;(statearr_26688_28856[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28857 = state_26672;
state_26672 = G__28857;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_26689 = f__22568__auto__.call(null);(statearr_26689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26689;
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
return (function (state_26763){var state_val_26764 = (state_26763[1]);if((state_val_26764 === 1))
{var inst_26739 = cljs.core.seq.call(null,coll);var inst_26740 = inst_26739;var state_26763__$1 = (function (){var statearr_26765 = state_26763;(statearr_26765[7] = inst_26740);
return statearr_26765;
})();var statearr_26766_28858 = state_26763__$1;(statearr_26766_28858[2] = null);
(statearr_26766_28858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 2))
{var inst_26740 = (state_26763[7]);var state_26763__$1 = state_26763;if(cljs.core.truth_(inst_26740))
{var statearr_26767_28859 = state_26763__$1;(statearr_26767_28859[1] = 4);
} else
{var statearr_26768_28860 = state_26763__$1;(statearr_26768_28860[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 3))
{var inst_26761 = (state_26763[2]);var state_26763__$1 = state_26763;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26763__$1,inst_26761);
} else
{if((state_val_26764 === 4))
{var inst_26740 = (state_26763[7]);var inst_26743 = cljs.core.first.call(null,inst_26740);var state_26763__$1 = state_26763;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26763__$1,7,ch,inst_26743);
} else
{if((state_val_26764 === 5))
{var inst_26740 = (state_26763[7]);var state_26763__$1 = state_26763;var statearr_26769_28861 = state_26763__$1;(statearr_26769_28861[2] = inst_26740);
(statearr_26769_28861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 6))
{var inst_26748 = (state_26763[2]);var state_26763__$1 = state_26763;if(cljs.core.truth_(inst_26748))
{var statearr_26770_28862 = state_26763__$1;(statearr_26770_28862[1] = 8);
} else
{var statearr_26771_28863 = state_26763__$1;(statearr_26771_28863[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 7))
{var inst_26745 = (state_26763[2]);var state_26763__$1 = state_26763;var statearr_26772_28864 = state_26763__$1;(statearr_26772_28864[2] = inst_26745);
(statearr_26772_28864[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 8))
{var inst_26740 = (state_26763[7]);var inst_26750 = cljs.core.next.call(null,inst_26740);var inst_26740__$1 = inst_26750;var state_26763__$1 = (function (){var statearr_26773 = state_26763;(statearr_26773[7] = inst_26740__$1);
return statearr_26773;
})();var statearr_26774_28865 = state_26763__$1;(statearr_26774_28865[2] = null);
(statearr_26774_28865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 9))
{var state_26763__$1 = state_26763;if(cljs.core.truth_(close_QMARK_))
{var statearr_26775_28866 = state_26763__$1;(statearr_26775_28866[1] = 11);
} else
{var statearr_26776_28867 = state_26763__$1;(statearr_26776_28867[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 10))
{var inst_26759 = (state_26763[2]);var state_26763__$1 = state_26763;var statearr_26777_28868 = state_26763__$1;(statearr_26777_28868[2] = inst_26759);
(statearr_26777_28868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 11))
{var inst_26754 = cljs.core.async.close_BANG_.call(null,ch);var state_26763__$1 = state_26763;var statearr_26778_28869 = state_26763__$1;(statearr_26778_28869[2] = inst_26754);
(statearr_26778_28869[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 12))
{var state_26763__$1 = state_26763;var statearr_26779_28870 = state_26763__$1;(statearr_26779_28870[2] = null);
(statearr_26779_28870[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26764 === 13))
{var inst_26757 = (state_26763[2]);var state_26763__$1 = state_26763;var statearr_26780_28871 = state_26763__$1;(statearr_26780_28871[2] = inst_26757);
(statearr_26780_28871[1] = 10);
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
var state_machine__22492__auto____0 = (function (){var statearr_26784 = [null,null,null,null,null,null,null,null];(statearr_26784[0] = state_machine__22492__auto__);
(statearr_26784[1] = 1);
return statearr_26784;
});
var state_machine__22492__auto____1 = (function (state_26763){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_26763);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object))
{var ex__22495__auto__ = e26785;var statearr_26786_28872 = state_26763;(statearr_26786_28872[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28873 = state_26763;
state_26763 = G__28873;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_26763){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_26763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_26787 = f__22568__auto__.call(null);(statearr_26787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_26787;
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
cljs.core.async.Mux = (function (){var obj26789 = {};return obj26789;
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
cljs.core.async.Mult = (function (){var obj26791 = {};return obj26791;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27013 = (function (cs,ch,mult,meta27014){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27014 = meta27014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27013.cljs$lang$type = true;
cljs.core.async.t27013.cljs$lang$ctorStr = "cljs.core.async/t27013";
cljs.core.async.t27013.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27013");
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27013.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27015){var self__ = this;
var _27015__$1 = this;return self__.meta27014;
});})(cs))
;
cljs.core.async.t27013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27015,meta27014__$1){var self__ = this;
var _27015__$1 = this;return (new cljs.core.async.t27013(self__.cs,self__.ch,self__.mult,meta27014__$1));
});})(cs))
;
cljs.core.async.__GT_t27013 = ((function (cs){
return (function __GT_t27013(cs__$1,ch__$1,mult__$1,meta27014){return (new cljs.core.async.t27013(cs__$1,ch__$1,mult__$1,meta27014));
});})(cs))
;
}
return (new cljs.core.async.t27013(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22567__auto___28874 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28874,cs,m,dchan,dctr,done){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28874,cs,m,dchan,dctr,done){
return (function (state_27146){var state_val_27147 = (state_27146[1]);if((state_val_27147 === 32))
{var inst_27087 = (state_27146[7]);var inst_27086 = (state_27146[8]);var inst_27089 = (state_27146[9]);var inst_27088 = (state_27146[10]);var inst_27101 = (state_27146[2]);var inst_27102 = (inst_27089 + 1);var tmp27148 = inst_27087;var tmp27149 = inst_27086;var tmp27150 = inst_27088;var inst_27086__$1 = tmp27149;var inst_27087__$1 = tmp27148;var inst_27088__$1 = tmp27150;var inst_27089__$1 = inst_27102;var state_27146__$1 = (function (){var statearr_27151 = state_27146;(statearr_27151[7] = inst_27087__$1);
(statearr_27151[8] = inst_27086__$1);
(statearr_27151[9] = inst_27089__$1);
(statearr_27151[10] = inst_27088__$1);
(statearr_27151[11] = inst_27101);
return statearr_27151;
})();var statearr_27152_28875 = state_27146__$1;(statearr_27152_28875[2] = null);
(statearr_27152_28875[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 1))
{var state_27146__$1 = state_27146;var statearr_27153_28876 = state_27146__$1;(statearr_27153_28876[2] = null);
(statearr_27153_28876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 33))
{var inst_27105 = (state_27146[12]);var inst_27107 = cljs.core.chunked_seq_QMARK_.call(null,inst_27105);var state_27146__$1 = state_27146;if(inst_27107)
{var statearr_27154_28877 = state_27146__$1;(statearr_27154_28877[1] = 36);
} else
{var statearr_27155_28878 = state_27146__$1;(statearr_27155_28878[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 2))
{var state_27146__$1 = state_27146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27146__$1,4,ch);
} else
{if((state_val_27147 === 34))
{var state_27146__$1 = state_27146;var statearr_27156_28879 = state_27146__$1;(statearr_27156_28879[2] = null);
(statearr_27156_28879[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 3))
{var inst_27144 = (state_27146[2]);var state_27146__$1 = state_27146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27146__$1,inst_27144);
} else
{if((state_val_27147 === 35))
{var inst_27128 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27157_28880 = state_27146__$1;(statearr_27157_28880[2] = inst_27128);
(statearr_27157_28880[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 4))
{var inst_27018 = (state_27146[13]);var inst_27018__$1 = (state_27146[2]);var inst_27019 = (inst_27018__$1 == null);var state_27146__$1 = (function (){var statearr_27158 = state_27146;(statearr_27158[13] = inst_27018__$1);
return statearr_27158;
})();if(cljs.core.truth_(inst_27019))
{var statearr_27159_28881 = state_27146__$1;(statearr_27159_28881[1] = 5);
} else
{var statearr_27160_28882 = state_27146__$1;(statearr_27160_28882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 36))
{var inst_27105 = (state_27146[12]);var inst_27109 = cljs.core.chunk_first.call(null,inst_27105);var inst_27110 = cljs.core.chunk_rest.call(null,inst_27105);var inst_27111 = cljs.core.count.call(null,inst_27109);var inst_27086 = inst_27110;var inst_27087 = inst_27109;var inst_27088 = inst_27111;var inst_27089 = 0;var state_27146__$1 = (function (){var statearr_27161 = state_27146;(statearr_27161[7] = inst_27087);
(statearr_27161[8] = inst_27086);
(statearr_27161[9] = inst_27089);
(statearr_27161[10] = inst_27088);
return statearr_27161;
})();var statearr_27162_28883 = state_27146__$1;(statearr_27162_28883[2] = null);
(statearr_27162_28883[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 5))
{var inst_27025 = cljs.core.deref.call(null,cs);var inst_27026 = cljs.core.seq.call(null,inst_27025);var inst_27027 = inst_27026;var inst_27028 = null;var inst_27029 = 0;var inst_27030 = 0;var state_27146__$1 = (function (){var statearr_27163 = state_27146;(statearr_27163[14] = inst_27029);
(statearr_27163[15] = inst_27028);
(statearr_27163[16] = inst_27027);
(statearr_27163[17] = inst_27030);
return statearr_27163;
})();var statearr_27164_28884 = state_27146__$1;(statearr_27164_28884[2] = null);
(statearr_27164_28884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 37))
{var inst_27114 = (state_27146[18]);var inst_27105 = (state_27146[12]);var inst_27018 = (state_27146[13]);var inst_27114__$1 = cljs.core.first.call(null,inst_27105);var inst_27115 = cljs.core.async.put_BANG_.call(null,inst_27114__$1,inst_27018,done);var state_27146__$1 = (function (){var statearr_27165 = state_27146;(statearr_27165[18] = inst_27114__$1);
return statearr_27165;
})();if(cljs.core.truth_(inst_27115))
{var statearr_27166_28885 = state_27146__$1;(statearr_27166_28885[1] = 39);
} else
{var statearr_27167_28886 = state_27146__$1;(statearr_27167_28886[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 6))
{var inst_27078 = (state_27146[19]);var inst_27077 = cljs.core.deref.call(null,cs);var inst_27078__$1 = cljs.core.keys.call(null,inst_27077);var inst_27079 = cljs.core.count.call(null,inst_27078__$1);var inst_27080 = cljs.core.reset_BANG_.call(null,dctr,inst_27079);var inst_27085 = cljs.core.seq.call(null,inst_27078__$1);var inst_27086 = inst_27085;var inst_27087 = null;var inst_27088 = 0;var inst_27089 = 0;var state_27146__$1 = (function (){var statearr_27168 = state_27146;(statearr_27168[19] = inst_27078__$1);
(statearr_27168[7] = inst_27087);
(statearr_27168[8] = inst_27086);
(statearr_27168[9] = inst_27089);
(statearr_27168[10] = inst_27088);
(statearr_27168[20] = inst_27080);
return statearr_27168;
})();var statearr_27169_28887 = state_27146__$1;(statearr_27169_28887[2] = null);
(statearr_27169_28887[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 38))
{var inst_27125 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27170_28888 = state_27146__$1;(statearr_27170_28888[2] = inst_27125);
(statearr_27170_28888[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 7))
{var inst_27142 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27171_28889 = state_27146__$1;(statearr_27171_28889[2] = inst_27142);
(statearr_27171_28889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 39))
{var state_27146__$1 = state_27146;var statearr_27172_28890 = state_27146__$1;(statearr_27172_28890[2] = null);
(statearr_27172_28890[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 8))
{var inst_27029 = (state_27146[14]);var inst_27030 = (state_27146[17]);var inst_27032 = (inst_27030 < inst_27029);var inst_27033 = inst_27032;var state_27146__$1 = state_27146;if(cljs.core.truth_(inst_27033))
{var statearr_27173_28891 = state_27146__$1;(statearr_27173_28891[1] = 10);
} else
{var statearr_27174_28892 = state_27146__$1;(statearr_27174_28892[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 40))
{var inst_27114 = (state_27146[18]);var inst_27118 = done.call(null,null);var inst_27119 = cljs.core.async.untap_STAR_.call(null,m,inst_27114);var state_27146__$1 = (function (){var statearr_27175 = state_27146;(statearr_27175[21] = inst_27118);
return statearr_27175;
})();var statearr_27176_28893 = state_27146__$1;(statearr_27176_28893[2] = inst_27119);
(statearr_27176_28893[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 9))
{var inst_27075 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27177_28894 = state_27146__$1;(statearr_27177_28894[2] = inst_27075);
(statearr_27177_28894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 41))
{var inst_27105 = (state_27146[12]);var inst_27121 = (state_27146[2]);var inst_27122 = cljs.core.next.call(null,inst_27105);var inst_27086 = inst_27122;var inst_27087 = null;var inst_27088 = 0;var inst_27089 = 0;var state_27146__$1 = (function (){var statearr_27178 = state_27146;(statearr_27178[7] = inst_27087);
(statearr_27178[8] = inst_27086);
(statearr_27178[9] = inst_27089);
(statearr_27178[22] = inst_27121);
(statearr_27178[10] = inst_27088);
return statearr_27178;
})();var statearr_27179_28895 = state_27146__$1;(statearr_27179_28895[2] = null);
(statearr_27179_28895[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 10))
{var inst_27028 = (state_27146[15]);var inst_27030 = (state_27146[17]);var inst_27036 = cljs.core._nth.call(null,inst_27028,inst_27030);var inst_27037 = cljs.core.nth.call(null,inst_27036,0,null);var inst_27038 = cljs.core.nth.call(null,inst_27036,1,null);var state_27146__$1 = (function (){var statearr_27180 = state_27146;(statearr_27180[23] = inst_27037);
return statearr_27180;
})();if(cljs.core.truth_(inst_27038))
{var statearr_27181_28896 = state_27146__$1;(statearr_27181_28896[1] = 13);
} else
{var statearr_27182_28897 = state_27146__$1;(statearr_27182_28897[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 42))
{var state_27146__$1 = state_27146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27146__$1,45,dchan);
} else
{if((state_val_27147 === 11))
{var inst_27047 = (state_27146[24]);var inst_27027 = (state_27146[16]);var inst_27047__$1 = cljs.core.seq.call(null,inst_27027);var state_27146__$1 = (function (){var statearr_27183 = state_27146;(statearr_27183[24] = inst_27047__$1);
return statearr_27183;
})();if(inst_27047__$1)
{var statearr_27184_28898 = state_27146__$1;(statearr_27184_28898[1] = 16);
} else
{var statearr_27185_28899 = state_27146__$1;(statearr_27185_28899[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 43))
{var state_27146__$1 = state_27146;var statearr_27186_28900 = state_27146__$1;(statearr_27186_28900[2] = null);
(statearr_27186_28900[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 12))
{var inst_27073 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27187_28901 = state_27146__$1;(statearr_27187_28901[2] = inst_27073);
(statearr_27187_28901[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 44))
{var inst_27139 = (state_27146[2]);var state_27146__$1 = (function (){var statearr_27188 = state_27146;(statearr_27188[25] = inst_27139);
return statearr_27188;
})();var statearr_27189_28902 = state_27146__$1;(statearr_27189_28902[2] = null);
(statearr_27189_28902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 13))
{var inst_27037 = (state_27146[23]);var inst_27040 = cljs.core.async.close_BANG_.call(null,inst_27037);var state_27146__$1 = state_27146;var statearr_27190_28903 = state_27146__$1;(statearr_27190_28903[2] = inst_27040);
(statearr_27190_28903[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 45))
{var inst_27136 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27194_28904 = state_27146__$1;(statearr_27194_28904[2] = inst_27136);
(statearr_27194_28904[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 14))
{var state_27146__$1 = state_27146;var statearr_27195_28905 = state_27146__$1;(statearr_27195_28905[2] = null);
(statearr_27195_28905[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 15))
{var inst_27029 = (state_27146[14]);var inst_27028 = (state_27146[15]);var inst_27027 = (state_27146[16]);var inst_27030 = (state_27146[17]);var inst_27043 = (state_27146[2]);var inst_27044 = (inst_27030 + 1);var tmp27191 = inst_27029;var tmp27192 = inst_27028;var tmp27193 = inst_27027;var inst_27027__$1 = tmp27193;var inst_27028__$1 = tmp27192;var inst_27029__$1 = tmp27191;var inst_27030__$1 = inst_27044;var state_27146__$1 = (function (){var statearr_27196 = state_27146;(statearr_27196[26] = inst_27043);
(statearr_27196[14] = inst_27029__$1);
(statearr_27196[15] = inst_27028__$1);
(statearr_27196[16] = inst_27027__$1);
(statearr_27196[17] = inst_27030__$1);
return statearr_27196;
})();var statearr_27197_28906 = state_27146__$1;(statearr_27197_28906[2] = null);
(statearr_27197_28906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 16))
{var inst_27047 = (state_27146[24]);var inst_27049 = cljs.core.chunked_seq_QMARK_.call(null,inst_27047);var state_27146__$1 = state_27146;if(inst_27049)
{var statearr_27198_28907 = state_27146__$1;(statearr_27198_28907[1] = 19);
} else
{var statearr_27199_28908 = state_27146__$1;(statearr_27199_28908[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 17))
{var state_27146__$1 = state_27146;var statearr_27200_28909 = state_27146__$1;(statearr_27200_28909[2] = null);
(statearr_27200_28909[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 18))
{var inst_27071 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27201_28910 = state_27146__$1;(statearr_27201_28910[2] = inst_27071);
(statearr_27201_28910[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 19))
{var inst_27047 = (state_27146[24]);var inst_27051 = cljs.core.chunk_first.call(null,inst_27047);var inst_27052 = cljs.core.chunk_rest.call(null,inst_27047);var inst_27053 = cljs.core.count.call(null,inst_27051);var inst_27027 = inst_27052;var inst_27028 = inst_27051;var inst_27029 = inst_27053;var inst_27030 = 0;var state_27146__$1 = (function (){var statearr_27202 = state_27146;(statearr_27202[14] = inst_27029);
(statearr_27202[15] = inst_27028);
(statearr_27202[16] = inst_27027);
(statearr_27202[17] = inst_27030);
return statearr_27202;
})();var statearr_27203_28911 = state_27146__$1;(statearr_27203_28911[2] = null);
(statearr_27203_28911[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 20))
{var inst_27047 = (state_27146[24]);var inst_27057 = cljs.core.first.call(null,inst_27047);var inst_27058 = cljs.core.nth.call(null,inst_27057,0,null);var inst_27059 = cljs.core.nth.call(null,inst_27057,1,null);var state_27146__$1 = (function (){var statearr_27204 = state_27146;(statearr_27204[27] = inst_27058);
return statearr_27204;
})();if(cljs.core.truth_(inst_27059))
{var statearr_27205_28912 = state_27146__$1;(statearr_27205_28912[1] = 22);
} else
{var statearr_27206_28913 = state_27146__$1;(statearr_27206_28913[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 21))
{var inst_27068 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27207_28914 = state_27146__$1;(statearr_27207_28914[2] = inst_27068);
(statearr_27207_28914[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 22))
{var inst_27058 = (state_27146[27]);var inst_27061 = cljs.core.async.close_BANG_.call(null,inst_27058);var state_27146__$1 = state_27146;var statearr_27208_28915 = state_27146__$1;(statearr_27208_28915[2] = inst_27061);
(statearr_27208_28915[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 23))
{var state_27146__$1 = state_27146;var statearr_27209_28916 = state_27146__$1;(statearr_27209_28916[2] = null);
(statearr_27209_28916[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 24))
{var inst_27047 = (state_27146[24]);var inst_27064 = (state_27146[2]);var inst_27065 = cljs.core.next.call(null,inst_27047);var inst_27027 = inst_27065;var inst_27028 = null;var inst_27029 = 0;var inst_27030 = 0;var state_27146__$1 = (function (){var statearr_27210 = state_27146;(statearr_27210[14] = inst_27029);
(statearr_27210[15] = inst_27028);
(statearr_27210[16] = inst_27027);
(statearr_27210[17] = inst_27030);
(statearr_27210[28] = inst_27064);
return statearr_27210;
})();var statearr_27211_28917 = state_27146__$1;(statearr_27211_28917[2] = null);
(statearr_27211_28917[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 25))
{var inst_27089 = (state_27146[9]);var inst_27088 = (state_27146[10]);var inst_27091 = (inst_27089 < inst_27088);var inst_27092 = inst_27091;var state_27146__$1 = state_27146;if(cljs.core.truth_(inst_27092))
{var statearr_27212_28918 = state_27146__$1;(statearr_27212_28918[1] = 27);
} else
{var statearr_27213_28919 = state_27146__$1;(statearr_27213_28919[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 26))
{var inst_27078 = (state_27146[19]);var inst_27132 = (state_27146[2]);var inst_27133 = cljs.core.seq.call(null,inst_27078);var state_27146__$1 = (function (){var statearr_27214 = state_27146;(statearr_27214[29] = inst_27132);
return statearr_27214;
})();if(inst_27133)
{var statearr_27215_28920 = state_27146__$1;(statearr_27215_28920[1] = 42);
} else
{var statearr_27216_28921 = state_27146__$1;(statearr_27216_28921[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 27))
{var inst_27094 = (state_27146[30]);var inst_27087 = (state_27146[7]);var inst_27089 = (state_27146[9]);var inst_27018 = (state_27146[13]);var inst_27094__$1 = cljs.core._nth.call(null,inst_27087,inst_27089);var inst_27095 = cljs.core.async.put_BANG_.call(null,inst_27094__$1,inst_27018,done);var state_27146__$1 = (function (){var statearr_27217 = state_27146;(statearr_27217[30] = inst_27094__$1);
return statearr_27217;
})();if(cljs.core.truth_(inst_27095))
{var statearr_27218_28922 = state_27146__$1;(statearr_27218_28922[1] = 30);
} else
{var statearr_27219_28923 = state_27146__$1;(statearr_27219_28923[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 28))
{var inst_27086 = (state_27146[8]);var inst_27105 = (state_27146[12]);var inst_27105__$1 = cljs.core.seq.call(null,inst_27086);var state_27146__$1 = (function (){var statearr_27220 = state_27146;(statearr_27220[12] = inst_27105__$1);
return statearr_27220;
})();if(inst_27105__$1)
{var statearr_27221_28924 = state_27146__$1;(statearr_27221_28924[1] = 33);
} else
{var statearr_27222_28925 = state_27146__$1;(statearr_27222_28925[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 29))
{var inst_27130 = (state_27146[2]);var state_27146__$1 = state_27146;var statearr_27223_28926 = state_27146__$1;(statearr_27223_28926[2] = inst_27130);
(statearr_27223_28926[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 30))
{var state_27146__$1 = state_27146;var statearr_27224_28927 = state_27146__$1;(statearr_27224_28927[2] = null);
(statearr_27224_28927[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27147 === 31))
{var inst_27094 = (state_27146[30]);var inst_27098 = done.call(null,null);var inst_27099 = cljs.core.async.untap_STAR_.call(null,m,inst_27094);var state_27146__$1 = (function (){var statearr_27225 = state_27146;(statearr_27225[31] = inst_27098);
return statearr_27225;
})();var statearr_27226_28928 = state_27146__$1;(statearr_27226_28928[2] = inst_27099);
(statearr_27226_28928[1] = 32);
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
});})(c__22567__auto___28874,cs,m,dchan,dctr,done))
;return ((function (switch__22491__auto__,c__22567__auto___28874,cs,m,dchan,dctr,done){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27230[0] = state_machine__22492__auto__);
(statearr_27230[1] = 1);
return statearr_27230;
});
var state_machine__22492__auto____1 = (function (state_27146){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27146);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27231){if((e27231 instanceof Object))
{var ex__22495__auto__ = e27231;var statearr_27232_28929 = state_27146;(statearr_27232_28929[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28930 = state_27146;
state_27146 = G__28930;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27146){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28874,cs,m,dchan,dctr,done))
})();var state__22569__auto__ = (function (){var statearr_27233 = f__22568__auto__.call(null);(statearr_27233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28874);
return statearr_27233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28874,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj27235 = {};return obj27235;
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
;var m = (function (){if(typeof cljs.core.async.t27355 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27355 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta27356){
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
this.meta27356 = meta27356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27355.cljs$lang$type = true;
cljs.core.async.t27355.cljs$lang$ctorStr = "cljs.core.async/t27355";
cljs.core.async.t27355.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27355");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27355.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27357){var self__ = this;
var _27357__$1 = this;return self__.meta27356;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27357,meta27356__$1){var self__ = this;
var _27357__$1 = this;return (new cljs.core.async.t27355(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta27356__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27355 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27355(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27356){return (new cljs.core.async.t27355(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta27356));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27355(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__22567__auto___28931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27427){var state_val_27428 = (state_27427[1]);if((state_val_27428 === 1))
{var inst_27361 = (state_27427[7]);var inst_27361__$1 = calc_state.call(null);var inst_27362 = cljs.core.seq_QMARK_.call(null,inst_27361__$1);var state_27427__$1 = (function (){var statearr_27429 = state_27427;(statearr_27429[7] = inst_27361__$1);
return statearr_27429;
})();if(inst_27362)
{var statearr_27430_28932 = state_27427__$1;(statearr_27430_28932[1] = 2);
} else
{var statearr_27431_28933 = state_27427__$1;(statearr_27431_28933[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 2))
{var inst_27361 = (state_27427[7]);var inst_27364 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27361);var state_27427__$1 = state_27427;var statearr_27432_28934 = state_27427__$1;(statearr_27432_28934[2] = inst_27364);
(statearr_27432_28934[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 3))
{var inst_27361 = (state_27427[7]);var state_27427__$1 = state_27427;var statearr_27433_28935 = state_27427__$1;(statearr_27433_28935[2] = inst_27361);
(statearr_27433_28935[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 4))
{var inst_27361 = (state_27427[7]);var inst_27367 = (state_27427[2]);var inst_27368 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27369 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27370 = cljs.core.get.call(null,inst_27367,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27371 = inst_27361;var state_27427__$1 = (function (){var statearr_27434 = state_27427;(statearr_27434[8] = inst_27369);
(statearr_27434[9] = inst_27368);
(statearr_27434[10] = inst_27370);
(statearr_27434[11] = inst_27371);
return statearr_27434;
})();var statearr_27435_28936 = state_27427__$1;(statearr_27435_28936[2] = null);
(statearr_27435_28936[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 5))
{var inst_27371 = (state_27427[11]);var inst_27374 = cljs.core.seq_QMARK_.call(null,inst_27371);var state_27427__$1 = state_27427;if(inst_27374)
{var statearr_27436_28937 = state_27427__$1;(statearr_27436_28937[1] = 7);
} else
{var statearr_27437_28938 = state_27427__$1;(statearr_27437_28938[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 6))
{var inst_27425 = (state_27427[2]);var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27427__$1,inst_27425);
} else
{if((state_val_27428 === 7))
{var inst_27371 = (state_27427[11]);var inst_27376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27371);var state_27427__$1 = state_27427;var statearr_27438_28939 = state_27427__$1;(statearr_27438_28939[2] = inst_27376);
(statearr_27438_28939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 8))
{var inst_27371 = (state_27427[11]);var state_27427__$1 = state_27427;var statearr_27439_28940 = state_27427__$1;(statearr_27439_28940[2] = inst_27371);
(statearr_27439_28940[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 9))
{var inst_27379 = (state_27427[12]);var inst_27379__$1 = (state_27427[2]);var inst_27380 = cljs.core.get.call(null,inst_27379__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27381 = cljs.core.get.call(null,inst_27379__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27382 = cljs.core.get.call(null,inst_27379__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27427__$1 = (function (){var statearr_27440 = state_27427;(statearr_27440[13] = inst_27381);
(statearr_27440[14] = inst_27382);
(statearr_27440[12] = inst_27379__$1);
return statearr_27440;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27427__$1,10,inst_27380);
} else
{if((state_val_27428 === 10))
{var inst_27387 = (state_27427[15]);var inst_27386 = (state_27427[16]);var inst_27385 = (state_27427[2]);var inst_27386__$1 = cljs.core.nth.call(null,inst_27385,0,null);var inst_27387__$1 = cljs.core.nth.call(null,inst_27385,1,null);var inst_27388 = (inst_27386__$1 == null);var inst_27389 = cljs.core._EQ_.call(null,inst_27387__$1,change);var inst_27390 = (inst_27388) || (inst_27389);var state_27427__$1 = (function (){var statearr_27441 = state_27427;(statearr_27441[15] = inst_27387__$1);
(statearr_27441[16] = inst_27386__$1);
return statearr_27441;
})();if(cljs.core.truth_(inst_27390))
{var statearr_27442_28941 = state_27427__$1;(statearr_27442_28941[1] = 11);
} else
{var statearr_27443_28942 = state_27427__$1;(statearr_27443_28942[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 11))
{var inst_27386 = (state_27427[16]);var inst_27392 = (inst_27386 == null);var state_27427__$1 = state_27427;if(cljs.core.truth_(inst_27392))
{var statearr_27444_28943 = state_27427__$1;(statearr_27444_28943[1] = 14);
} else
{var statearr_27445_28944 = state_27427__$1;(statearr_27445_28944[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 12))
{var inst_27382 = (state_27427[14]);var inst_27401 = (state_27427[17]);var inst_27387 = (state_27427[15]);var inst_27401__$1 = inst_27382.call(null,inst_27387);var state_27427__$1 = (function (){var statearr_27446 = state_27427;(statearr_27446[17] = inst_27401__$1);
return statearr_27446;
})();if(cljs.core.truth_(inst_27401__$1))
{var statearr_27447_28945 = state_27427__$1;(statearr_27447_28945[1] = 17);
} else
{var statearr_27448_28946 = state_27427__$1;(statearr_27448_28946[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 13))
{var inst_27423 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27449_28947 = state_27427__$1;(statearr_27449_28947[2] = inst_27423);
(statearr_27449_28947[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 14))
{var inst_27387 = (state_27427[15]);var inst_27394 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27387);var state_27427__$1 = state_27427;var statearr_27450_28948 = state_27427__$1;(statearr_27450_28948[2] = inst_27394);
(statearr_27450_28948[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 15))
{var state_27427__$1 = state_27427;var statearr_27451_28949 = state_27427__$1;(statearr_27451_28949[2] = null);
(statearr_27451_28949[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 16))
{var inst_27397 = (state_27427[2]);var inst_27398 = calc_state.call(null);var inst_27371 = inst_27398;var state_27427__$1 = (function (){var statearr_27452 = state_27427;(statearr_27452[18] = inst_27397);
(statearr_27452[11] = inst_27371);
return statearr_27452;
})();var statearr_27453_28950 = state_27427__$1;(statearr_27453_28950[2] = null);
(statearr_27453_28950[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 17))
{var inst_27401 = (state_27427[17]);var state_27427__$1 = state_27427;var statearr_27454_28951 = state_27427__$1;(statearr_27454_28951[2] = inst_27401);
(statearr_27454_28951[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 18))
{var inst_27381 = (state_27427[13]);var inst_27382 = (state_27427[14]);var inst_27387 = (state_27427[15]);var inst_27404 = cljs.core.empty_QMARK_.call(null,inst_27382);var inst_27405 = inst_27381.call(null,inst_27387);var inst_27406 = cljs.core.not.call(null,inst_27405);var inst_27407 = (inst_27404) && (inst_27406);var state_27427__$1 = state_27427;var statearr_27455_28952 = state_27427__$1;(statearr_27455_28952[2] = inst_27407);
(statearr_27455_28952[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 19))
{var inst_27409 = (state_27427[2]);var state_27427__$1 = state_27427;if(cljs.core.truth_(inst_27409))
{var statearr_27456_28953 = state_27427__$1;(statearr_27456_28953[1] = 20);
} else
{var statearr_27457_28954 = state_27427__$1;(statearr_27457_28954[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 20))
{var inst_27386 = (state_27427[16]);var state_27427__$1 = state_27427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27427__$1,23,out,inst_27386);
} else
{if((state_val_27428 === 21))
{var inst_27379 = (state_27427[12]);var inst_27371 = inst_27379;var state_27427__$1 = (function (){var statearr_27458 = state_27427;(statearr_27458[11] = inst_27371);
return statearr_27458;
})();var statearr_27459_28955 = state_27427__$1;(statearr_27459_28955[2] = null);
(statearr_27459_28955[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 22))
{var inst_27421 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27460_28956 = state_27427__$1;(statearr_27460_28956[2] = inst_27421);
(statearr_27460_28956[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 23))
{var inst_27412 = (state_27427[2]);var state_27427__$1 = state_27427;if(cljs.core.truth_(inst_27412))
{var statearr_27461_28957 = state_27427__$1;(statearr_27461_28957[1] = 24);
} else
{var statearr_27462_28958 = state_27427__$1;(statearr_27462_28958[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 24))
{var inst_27379 = (state_27427[12]);var inst_27371 = inst_27379;var state_27427__$1 = (function (){var statearr_27463 = state_27427;(statearr_27463[11] = inst_27371);
return statearr_27463;
})();var statearr_27464_28959 = state_27427__$1;(statearr_27464_28959[2] = null);
(statearr_27464_28959[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 25))
{var state_27427__$1 = state_27427;var statearr_27465_28960 = state_27427__$1;(statearr_27465_28960[2] = null);
(statearr_27465_28960[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27428 === 26))
{var inst_27417 = (state_27427[2]);var state_27427__$1 = state_27427;var statearr_27466_28961 = state_27427__$1;(statearr_27466_28961[2] = inst_27417);
(statearr_27466_28961[1] = 22);
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
});})(c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__22491__auto__,c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27470[0] = state_machine__22492__auto__);
(statearr_27470[1] = 1);
return statearr_27470;
});
var state_machine__22492__auto____1 = (function (state_27427){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27427);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27471){if((e27471 instanceof Object))
{var ex__22495__auto__ = e27471;var statearr_27472_28962 = state_27427;(statearr_27472_28962[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28963 = state_27427;
state_27427 = G__28963;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27427){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__22569__auto__ = (function (){var statearr_27473 = f__22568__auto__.call(null);(statearr_27473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28931);
return statearr_27473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28931,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj27475 = {};return obj27475;
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
return (function (p1__27476_SHARP_){if(cljs.core.truth_(p1__27476_SHARP_.call(null,topic)))
{return p1__27476_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27476_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19803__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t27599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27599 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta27600){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta27600 = meta27600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27599.cljs$lang$type = true;
cljs.core.async.t27599.cljs$lang$ctorStr = "cljs.core.async/t27599";
cljs.core.async.t27599.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t27599");
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t27599.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27601){var self__ = this;
var _27601__$1 = this;return self__.meta27600;
});})(mults,ensure_mult))
;
cljs.core.async.t27599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27601,meta27600__$1){var self__ = this;
var _27601__$1 = this;return (new cljs.core.async.t27599(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta27600__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t27599 = ((function (mults,ensure_mult){
return (function __GT_t27599(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27600){return (new cljs.core.async.t27599(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta27600));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t27599(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22567__auto___28964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28964,mults,ensure_mult,p){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28964,mults,ensure_mult,p){
return (function (state_27673){var state_val_27674 = (state_27673[1]);if((state_val_27674 === 1))
{var state_27673__$1 = state_27673;var statearr_27675_28965 = state_27673__$1;(statearr_27675_28965[2] = null);
(statearr_27675_28965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 2))
{var state_27673__$1 = state_27673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27673__$1,4,ch);
} else
{if((state_val_27674 === 3))
{var inst_27671 = (state_27673[2]);var state_27673__$1 = state_27673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27673__$1,inst_27671);
} else
{if((state_val_27674 === 4))
{var inst_27604 = (state_27673[7]);var inst_27604__$1 = (state_27673[2]);var inst_27605 = (inst_27604__$1 == null);var state_27673__$1 = (function (){var statearr_27676 = state_27673;(statearr_27676[7] = inst_27604__$1);
return statearr_27676;
})();if(cljs.core.truth_(inst_27605))
{var statearr_27677_28966 = state_27673__$1;(statearr_27677_28966[1] = 5);
} else
{var statearr_27678_28967 = state_27673__$1;(statearr_27678_28967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 5))
{var inst_27611 = cljs.core.deref.call(null,mults);var inst_27612 = cljs.core.vals.call(null,inst_27611);var inst_27613 = cljs.core.seq.call(null,inst_27612);var inst_27614 = inst_27613;var inst_27615 = null;var inst_27616 = 0;var inst_27617 = 0;var state_27673__$1 = (function (){var statearr_27679 = state_27673;(statearr_27679[8] = inst_27615);
(statearr_27679[9] = inst_27616);
(statearr_27679[10] = inst_27617);
(statearr_27679[11] = inst_27614);
return statearr_27679;
})();var statearr_27680_28968 = state_27673__$1;(statearr_27680_28968[2] = null);
(statearr_27680_28968[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 6))
{var inst_27654 = (state_27673[12]);var inst_27652 = (state_27673[13]);var inst_27604 = (state_27673[7]);var inst_27652__$1 = topic_fn.call(null,inst_27604);var inst_27653 = cljs.core.deref.call(null,mults);var inst_27654__$1 = cljs.core.get.call(null,inst_27653,inst_27652__$1);var state_27673__$1 = (function (){var statearr_27681 = state_27673;(statearr_27681[12] = inst_27654__$1);
(statearr_27681[13] = inst_27652__$1);
return statearr_27681;
})();if(cljs.core.truth_(inst_27654__$1))
{var statearr_27682_28969 = state_27673__$1;(statearr_27682_28969[1] = 19);
} else
{var statearr_27683_28970 = state_27673__$1;(statearr_27683_28970[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 7))
{var inst_27669 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27684_28971 = state_27673__$1;(statearr_27684_28971[2] = inst_27669);
(statearr_27684_28971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 8))
{var inst_27616 = (state_27673[9]);var inst_27617 = (state_27673[10]);var inst_27619 = (inst_27617 < inst_27616);var inst_27620 = inst_27619;var state_27673__$1 = state_27673;if(cljs.core.truth_(inst_27620))
{var statearr_27688_28972 = state_27673__$1;(statearr_27688_28972[1] = 10);
} else
{var statearr_27689_28973 = state_27673__$1;(statearr_27689_28973[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 9))
{var inst_27650 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27690_28974 = state_27673__$1;(statearr_27690_28974[2] = inst_27650);
(statearr_27690_28974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 10))
{var inst_27615 = (state_27673[8]);var inst_27616 = (state_27673[9]);var inst_27617 = (state_27673[10]);var inst_27614 = (state_27673[11]);var inst_27622 = cljs.core._nth.call(null,inst_27615,inst_27617);var inst_27623 = cljs.core.async.muxch_STAR_.call(null,inst_27622);var inst_27624 = cljs.core.async.close_BANG_.call(null,inst_27623);var inst_27625 = (inst_27617 + 1);var tmp27685 = inst_27615;var tmp27686 = inst_27616;var tmp27687 = inst_27614;var inst_27614__$1 = tmp27687;var inst_27615__$1 = tmp27685;var inst_27616__$1 = tmp27686;var inst_27617__$1 = inst_27625;var state_27673__$1 = (function (){var statearr_27691 = state_27673;(statearr_27691[8] = inst_27615__$1);
(statearr_27691[14] = inst_27624);
(statearr_27691[9] = inst_27616__$1);
(statearr_27691[10] = inst_27617__$1);
(statearr_27691[11] = inst_27614__$1);
return statearr_27691;
})();var statearr_27692_28975 = state_27673__$1;(statearr_27692_28975[2] = null);
(statearr_27692_28975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 11))
{var inst_27628 = (state_27673[15]);var inst_27614 = (state_27673[11]);var inst_27628__$1 = cljs.core.seq.call(null,inst_27614);var state_27673__$1 = (function (){var statearr_27693 = state_27673;(statearr_27693[15] = inst_27628__$1);
return statearr_27693;
})();if(inst_27628__$1)
{var statearr_27694_28976 = state_27673__$1;(statearr_27694_28976[1] = 13);
} else
{var statearr_27695_28977 = state_27673__$1;(statearr_27695_28977[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 12))
{var inst_27648 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27696_28978 = state_27673__$1;(statearr_27696_28978[2] = inst_27648);
(statearr_27696_28978[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 13))
{var inst_27628 = (state_27673[15]);var inst_27630 = cljs.core.chunked_seq_QMARK_.call(null,inst_27628);var state_27673__$1 = state_27673;if(inst_27630)
{var statearr_27697_28979 = state_27673__$1;(statearr_27697_28979[1] = 16);
} else
{var statearr_27698_28980 = state_27673__$1;(statearr_27698_28980[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 14))
{var state_27673__$1 = state_27673;var statearr_27699_28981 = state_27673__$1;(statearr_27699_28981[2] = null);
(statearr_27699_28981[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 15))
{var inst_27646 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27700_28982 = state_27673__$1;(statearr_27700_28982[2] = inst_27646);
(statearr_27700_28982[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 16))
{var inst_27628 = (state_27673[15]);var inst_27632 = cljs.core.chunk_first.call(null,inst_27628);var inst_27633 = cljs.core.chunk_rest.call(null,inst_27628);var inst_27634 = cljs.core.count.call(null,inst_27632);var inst_27614 = inst_27633;var inst_27615 = inst_27632;var inst_27616 = inst_27634;var inst_27617 = 0;var state_27673__$1 = (function (){var statearr_27701 = state_27673;(statearr_27701[8] = inst_27615);
(statearr_27701[9] = inst_27616);
(statearr_27701[10] = inst_27617);
(statearr_27701[11] = inst_27614);
return statearr_27701;
})();var statearr_27702_28983 = state_27673__$1;(statearr_27702_28983[2] = null);
(statearr_27702_28983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 17))
{var inst_27628 = (state_27673[15]);var inst_27637 = cljs.core.first.call(null,inst_27628);var inst_27638 = cljs.core.async.muxch_STAR_.call(null,inst_27637);var inst_27639 = cljs.core.async.close_BANG_.call(null,inst_27638);var inst_27640 = cljs.core.next.call(null,inst_27628);var inst_27614 = inst_27640;var inst_27615 = null;var inst_27616 = 0;var inst_27617 = 0;var state_27673__$1 = (function (){var statearr_27703 = state_27673;(statearr_27703[16] = inst_27639);
(statearr_27703[8] = inst_27615);
(statearr_27703[9] = inst_27616);
(statearr_27703[10] = inst_27617);
(statearr_27703[11] = inst_27614);
return statearr_27703;
})();var statearr_27704_28984 = state_27673__$1;(statearr_27704_28984[2] = null);
(statearr_27704_28984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 18))
{var inst_27643 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27705_28985 = state_27673__$1;(statearr_27705_28985[2] = inst_27643);
(statearr_27705_28985[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 19))
{var inst_27654 = (state_27673[12]);var inst_27604 = (state_27673[7]);var inst_27656 = cljs.core.async.muxch_STAR_.call(null,inst_27654);var state_27673__$1 = state_27673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27673__$1,22,inst_27656,inst_27604);
} else
{if((state_val_27674 === 20))
{var state_27673__$1 = state_27673;var statearr_27706_28986 = state_27673__$1;(statearr_27706_28986[2] = null);
(statearr_27706_28986[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 21))
{var inst_27666 = (state_27673[2]);var state_27673__$1 = (function (){var statearr_27707 = state_27673;(statearr_27707[17] = inst_27666);
return statearr_27707;
})();var statearr_27708_28987 = state_27673__$1;(statearr_27708_28987[2] = null);
(statearr_27708_28987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 22))
{var inst_27658 = (state_27673[2]);var state_27673__$1 = state_27673;if(cljs.core.truth_(inst_27658))
{var statearr_27709_28988 = state_27673__$1;(statearr_27709_28988[1] = 23);
} else
{var statearr_27710_28989 = state_27673__$1;(statearr_27710_28989[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 23))
{var state_27673__$1 = state_27673;var statearr_27711_28990 = state_27673__$1;(statearr_27711_28990[2] = null);
(statearr_27711_28990[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 24))
{var inst_27652 = (state_27673[13]);var inst_27661 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27652);var state_27673__$1 = state_27673;var statearr_27712_28991 = state_27673__$1;(statearr_27712_28991[2] = inst_27661);
(statearr_27712_28991[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27674 === 25))
{var inst_27663 = (state_27673[2]);var state_27673__$1 = state_27673;var statearr_27713_28992 = state_27673__$1;(statearr_27713_28992[2] = inst_27663);
(statearr_27713_28992[1] = 21);
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
});})(c__22567__auto___28964,mults,ensure_mult,p))
;return ((function (switch__22491__auto__,c__22567__auto___28964,mults,ensure_mult,p){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27717[0] = state_machine__22492__auto__);
(statearr_27717[1] = 1);
return statearr_27717;
});
var state_machine__22492__auto____1 = (function (state_27673){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27673);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27718){if((e27718 instanceof Object))
{var ex__22495__auto__ = e27718;var statearr_27719_28993 = state_27673;(statearr_27719_28993[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27673);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28994 = state_27673;
state_27673 = G__28994;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27673){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28964,mults,ensure_mult,p))
})();var state__22569__auto__ = (function (){var statearr_27720 = f__22568__auto__.call(null);(statearr_27720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28964);
return statearr_27720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28964,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__22567__auto___28995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27827){var state_val_27828 = (state_27827[1]);if((state_val_27828 === 1))
{var state_27827__$1 = state_27827;var statearr_27829_28996 = state_27827__$1;(statearr_27829_28996[2] = null);
(statearr_27829_28996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 2))
{var inst_27790 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_27791 = 0;var state_27827__$1 = (function (){var statearr_27830 = state_27827;(statearr_27830[7] = inst_27791);
(statearr_27830[8] = inst_27790);
return statearr_27830;
})();var statearr_27831_28997 = state_27827__$1;(statearr_27831_28997[2] = null);
(statearr_27831_28997[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 3))
{var inst_27825 = (state_27827[2]);var state_27827__$1 = state_27827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27827__$1,inst_27825);
} else
{if((state_val_27828 === 4))
{var inst_27791 = (state_27827[7]);var inst_27793 = (inst_27791 < cnt);var state_27827__$1 = state_27827;if(cljs.core.truth_(inst_27793))
{var statearr_27832_28998 = state_27827__$1;(statearr_27832_28998[1] = 6);
} else
{var statearr_27833_28999 = state_27827__$1;(statearr_27833_28999[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 5))
{var inst_27811 = (state_27827[2]);var state_27827__$1 = (function (){var statearr_27834 = state_27827;(statearr_27834[9] = inst_27811);
return statearr_27834;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27827__$1,12,dchan);
} else
{if((state_val_27828 === 6))
{var state_27827__$1 = state_27827;var statearr_27835_29000 = state_27827__$1;(statearr_27835_29000[2] = null);
(statearr_27835_29000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 7))
{var state_27827__$1 = state_27827;var statearr_27836_29001 = state_27827__$1;(statearr_27836_29001[2] = null);
(statearr_27836_29001[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 8))
{var inst_27809 = (state_27827[2]);var state_27827__$1 = state_27827;var statearr_27837_29002 = state_27827__$1;(statearr_27837_29002[2] = inst_27809);
(statearr_27837_29002[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 9))
{var inst_27791 = (state_27827[7]);var inst_27804 = (state_27827[2]);var inst_27805 = (inst_27791 + 1);var inst_27791__$1 = inst_27805;var state_27827__$1 = (function (){var statearr_27838 = state_27827;(statearr_27838[7] = inst_27791__$1);
(statearr_27838[10] = inst_27804);
return statearr_27838;
})();var statearr_27839_29003 = state_27827__$1;(statearr_27839_29003[2] = null);
(statearr_27839_29003[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 10))
{var inst_27795 = (state_27827[2]);var inst_27796 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_27827__$1 = (function (){var statearr_27840 = state_27827;(statearr_27840[11] = inst_27795);
return statearr_27840;
})();var statearr_27841_29004 = state_27827__$1;(statearr_27841_29004[2] = inst_27796);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27827__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 11))
{var inst_27791 = (state_27827[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27827,10,Object,null,9);var inst_27800 = chs__$1.call(null,inst_27791);var inst_27801 = done.call(null,inst_27791);var inst_27802 = cljs.core.async.take_BANG_.call(null,inst_27800,inst_27801);var state_27827__$1 = state_27827;var statearr_27842_29005 = state_27827__$1;(statearr_27842_29005[2] = inst_27802);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27827__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 12))
{var inst_27813 = (state_27827[12]);var inst_27813__$1 = (state_27827[2]);var inst_27814 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27813__$1);var state_27827__$1 = (function (){var statearr_27843 = state_27827;(statearr_27843[12] = inst_27813__$1);
return statearr_27843;
})();if(cljs.core.truth_(inst_27814))
{var statearr_27844_29006 = state_27827__$1;(statearr_27844_29006[1] = 13);
} else
{var statearr_27845_29007 = state_27827__$1;(statearr_27845_29007[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 13))
{var inst_27816 = cljs.core.async.close_BANG_.call(null,out);var state_27827__$1 = state_27827;var statearr_27846_29008 = state_27827__$1;(statearr_27846_29008[2] = inst_27816);
(statearr_27846_29008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 14))
{var inst_27813 = (state_27827[12]);var inst_27818 = cljs.core.apply.call(null,f,inst_27813);var state_27827__$1 = state_27827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27827__$1,16,out,inst_27818);
} else
{if((state_val_27828 === 15))
{var inst_27823 = (state_27827[2]);var state_27827__$1 = state_27827;var statearr_27847_29009 = state_27827__$1;(statearr_27847_29009[2] = inst_27823);
(statearr_27847_29009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27828 === 16))
{var inst_27820 = (state_27827[2]);var state_27827__$1 = (function (){var statearr_27848 = state_27827;(statearr_27848[13] = inst_27820);
return statearr_27848;
})();var statearr_27849_29010 = state_27827__$1;(statearr_27849_29010[2] = null);
(statearr_27849_29010[1] = 2);
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
});})(c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__22491__auto__,c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27853[0] = state_machine__22492__auto__);
(statearr_27853[1] = 1);
return statearr_27853;
});
var state_machine__22492__auto____1 = (function (state_27827){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27827);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27854){if((e27854 instanceof Object))
{var ex__22495__auto__ = e27854;var statearr_27855_29011 = state_27827;(statearr_27855_29011[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29012 = state_27827;
state_27827 = G__29012;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27827){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__22569__auto__ = (function (){var statearr_27856 = f__22568__auto__.call(null);(statearr_27856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___28995);
return statearr_27856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___28995,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29013,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29013,out){
return (function (state_27940){var state_val_27941 = (state_27940[1]);if((state_val_27941 === 1))
{var inst_27911 = cljs.core.vec.call(null,chs);var inst_27912 = inst_27911;var state_27940__$1 = (function (){var statearr_27942 = state_27940;(statearr_27942[7] = inst_27912);
return statearr_27942;
})();var statearr_27943_29014 = state_27940__$1;(statearr_27943_29014[2] = null);
(statearr_27943_29014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 2))
{var inst_27912 = (state_27940[7]);var inst_27914 = cljs.core.count.call(null,inst_27912);var inst_27915 = (inst_27914 > 0);var state_27940__$1 = state_27940;if(cljs.core.truth_(inst_27915))
{var statearr_27944_29015 = state_27940__$1;(statearr_27944_29015[1] = 4);
} else
{var statearr_27945_29016 = state_27940__$1;(statearr_27945_29016[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 3))
{var inst_27938 = (state_27940[2]);var state_27940__$1 = state_27940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27940__$1,inst_27938);
} else
{if((state_val_27941 === 4))
{var inst_27912 = (state_27940[7]);var state_27940__$1 = state_27940;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27940__$1,7,inst_27912);
} else
{if((state_val_27941 === 5))
{var inst_27934 = cljs.core.async.close_BANG_.call(null,out);var state_27940__$1 = state_27940;var statearr_27946_29017 = state_27940__$1;(statearr_27946_29017[2] = inst_27934);
(statearr_27946_29017[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 6))
{var inst_27936 = (state_27940[2]);var state_27940__$1 = state_27940;var statearr_27947_29018 = state_27940__$1;(statearr_27947_29018[2] = inst_27936);
(statearr_27947_29018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 7))
{var inst_27920 = (state_27940[8]);var inst_27919 = (state_27940[9]);var inst_27919__$1 = (state_27940[2]);var inst_27920__$1 = cljs.core.nth.call(null,inst_27919__$1,0,null);var inst_27921 = cljs.core.nth.call(null,inst_27919__$1,1,null);var inst_27922 = (inst_27920__$1 == null);var state_27940__$1 = (function (){var statearr_27948 = state_27940;(statearr_27948[10] = inst_27921);
(statearr_27948[8] = inst_27920__$1);
(statearr_27948[9] = inst_27919__$1);
return statearr_27948;
})();if(cljs.core.truth_(inst_27922))
{var statearr_27949_29019 = state_27940__$1;(statearr_27949_29019[1] = 8);
} else
{var statearr_27950_29020 = state_27940__$1;(statearr_27950_29020[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 8))
{var inst_27912 = (state_27940[7]);var inst_27921 = (state_27940[10]);var inst_27920 = (state_27940[8]);var inst_27919 = (state_27940[9]);var inst_27924 = (function (){var c = inst_27921;var v = inst_27920;var vec__27917 = inst_27919;var cs = inst_27912;return ((function (c,v,vec__27917,cs,inst_27912,inst_27921,inst_27920,inst_27919,state_val_27941,c__22567__auto___29013,out){
return (function (p1__27857_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__27857_SHARP_);
});
;})(c,v,vec__27917,cs,inst_27912,inst_27921,inst_27920,inst_27919,state_val_27941,c__22567__auto___29013,out))
})();var inst_27925 = cljs.core.filterv.call(null,inst_27924,inst_27912);var inst_27912__$1 = inst_27925;var state_27940__$1 = (function (){var statearr_27951 = state_27940;(statearr_27951[7] = inst_27912__$1);
return statearr_27951;
})();var statearr_27952_29021 = state_27940__$1;(statearr_27952_29021[2] = null);
(statearr_27952_29021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 9))
{var inst_27920 = (state_27940[8]);var state_27940__$1 = state_27940;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27940__$1,11,out,inst_27920);
} else
{if((state_val_27941 === 10))
{var inst_27932 = (state_27940[2]);var state_27940__$1 = state_27940;var statearr_27954_29022 = state_27940__$1;(statearr_27954_29022[2] = inst_27932);
(statearr_27954_29022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27941 === 11))
{var inst_27912 = (state_27940[7]);var inst_27929 = (state_27940[2]);var tmp27953 = inst_27912;var inst_27912__$1 = tmp27953;var state_27940__$1 = (function (){var statearr_27955 = state_27940;(statearr_27955[11] = inst_27929);
(statearr_27955[7] = inst_27912__$1);
return statearr_27955;
})();var statearr_27956_29023 = state_27940__$1;(statearr_27956_29023[2] = null);
(statearr_27956_29023[1] = 2);
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
});})(c__22567__auto___29013,out))
;return ((function (switch__22491__auto__,c__22567__auto___29013,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_27960 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27960[0] = state_machine__22492__auto__);
(statearr_27960[1] = 1);
return statearr_27960;
});
var state_machine__22492__auto____1 = (function (state_27940){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_27940);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e27961){if((e27961 instanceof Object))
{var ex__22495__auto__ = e27961;var statearr_27962_29024 = state_27940;(statearr_27962_29024[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29025 = state_27940;
state_27940 = G__29025;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_27940){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_27940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29013,out))
})();var state__22569__auto__ = (function (){var statearr_27963 = f__22568__auto__.call(null);(statearr_27963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29013);
return statearr_27963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29013,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29026,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29026,out){
return (function (state_28033){var state_val_28034 = (state_28033[1]);if((state_val_28034 === 1))
{var inst_28010 = 0;var state_28033__$1 = (function (){var statearr_28035 = state_28033;(statearr_28035[7] = inst_28010);
return statearr_28035;
})();var statearr_28036_29027 = state_28033__$1;(statearr_28036_29027[2] = null);
(statearr_28036_29027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 2))
{var inst_28010 = (state_28033[7]);var inst_28012 = (inst_28010 < n);var state_28033__$1 = state_28033;if(cljs.core.truth_(inst_28012))
{var statearr_28037_29028 = state_28033__$1;(statearr_28037_29028[1] = 4);
} else
{var statearr_28038_29029 = state_28033__$1;(statearr_28038_29029[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 3))
{var inst_28030 = (state_28033[2]);var inst_28031 = cljs.core.async.close_BANG_.call(null,out);var state_28033__$1 = (function (){var statearr_28039 = state_28033;(statearr_28039[8] = inst_28030);
return statearr_28039;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28033__$1,inst_28031);
} else
{if((state_val_28034 === 4))
{var state_28033__$1 = state_28033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28033__$1,7,ch);
} else
{if((state_val_28034 === 5))
{var state_28033__$1 = state_28033;var statearr_28040_29030 = state_28033__$1;(statearr_28040_29030[2] = null);
(statearr_28040_29030[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 6))
{var inst_28028 = (state_28033[2]);var state_28033__$1 = state_28033;var statearr_28041_29031 = state_28033__$1;(statearr_28041_29031[2] = inst_28028);
(statearr_28041_29031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 7))
{var inst_28015 = (state_28033[9]);var inst_28015__$1 = (state_28033[2]);var inst_28016 = (inst_28015__$1 == null);var inst_28017 = cljs.core.not.call(null,inst_28016);var state_28033__$1 = (function (){var statearr_28042 = state_28033;(statearr_28042[9] = inst_28015__$1);
return statearr_28042;
})();if(inst_28017)
{var statearr_28043_29032 = state_28033__$1;(statearr_28043_29032[1] = 8);
} else
{var statearr_28044_29033 = state_28033__$1;(statearr_28044_29033[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 8))
{var inst_28015 = (state_28033[9]);var state_28033__$1 = state_28033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28033__$1,11,out,inst_28015);
} else
{if((state_val_28034 === 9))
{var state_28033__$1 = state_28033;var statearr_28045_29034 = state_28033__$1;(statearr_28045_29034[2] = null);
(statearr_28045_29034[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 10))
{var inst_28025 = (state_28033[2]);var state_28033__$1 = state_28033;var statearr_28046_29035 = state_28033__$1;(statearr_28046_29035[2] = inst_28025);
(statearr_28046_29035[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28034 === 11))
{var inst_28010 = (state_28033[7]);var inst_28020 = (state_28033[2]);var inst_28021 = (inst_28010 + 1);var inst_28010__$1 = inst_28021;var state_28033__$1 = (function (){var statearr_28047 = state_28033;(statearr_28047[10] = inst_28020);
(statearr_28047[7] = inst_28010__$1);
return statearr_28047;
})();var statearr_28048_29036 = state_28033__$1;(statearr_28048_29036[2] = null);
(statearr_28048_29036[1] = 2);
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
});})(c__22567__auto___29026,out))
;return ((function (switch__22491__auto__,c__22567__auto___29026,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28052 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28052[0] = state_machine__22492__auto__);
(statearr_28052[1] = 1);
return statearr_28052;
});
var state_machine__22492__auto____1 = (function (state_28033){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28033);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28053){if((e28053 instanceof Object))
{var ex__22495__auto__ = e28053;var statearr_28054_29037 = state_28033;(statearr_28054_29037[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29038 = state_28033;
state_28033 = G__29038;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28033){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29026,out))
})();var state__22569__auto__ = (function (){var statearr_28055 = f__22568__auto__.call(null);(statearr_28055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29026);
return statearr_28055;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29026,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t28063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28063 = (function (ch,f,map_LT_,meta28064){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28064 = meta28064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28063.cljs$lang$type = true;
cljs.core.async.t28063.cljs$lang$ctorStr = "cljs.core.async/t28063";
cljs.core.async.t28063.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28063");
});
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t28066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28066 = (function (fn1,_,meta28064,ch,f,map_LT_,meta28067){
this.fn1 = fn1;
this._ = _;
this.meta28064 = meta28064;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28067 = meta28067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28066.cljs$lang$type = true;
cljs.core.async.t28066.cljs$lang$ctorStr = "cljs.core.async/t28066";
cljs.core.async.t28066.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28066");
});})(___$1))
;
cljs.core.async.t28066.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28066.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t28066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__28056_SHARP_){return f1.call(null,(((p1__28056_SHARP_ == null))?null:self__.f.call(null,p1__28056_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t28066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28068){var self__ = this;
var _28068__$1 = this;return self__.meta28067;
});})(___$1))
;
cljs.core.async.t28066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28068,meta28067__$1){var self__ = this;
var _28068__$1 = this;return (new cljs.core.async.t28066(self__.fn1,self__._,self__.meta28064,self__.ch,self__.f,self__.map_LT_,meta28067__$1));
});})(___$1))
;
cljs.core.async.__GT_t28066 = ((function (___$1){
return (function __GT_t28066(fn1__$1,___$2,meta28064__$1,ch__$2,f__$2,map_LT___$2,meta28067){return (new cljs.core.async.t28066(fn1__$1,___$2,meta28064__$1,ch__$2,f__$2,map_LT___$2,meta28067));
});})(___$1))
;
}
return (new cljs.core.async.t28066(fn1,___$1,self__.meta28064,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28063.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28065){var self__ = this;
var _28065__$1 = this;return self__.meta28064;
});
cljs.core.async.t28063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28065,meta28064__$1){var self__ = this;
var _28065__$1 = this;return (new cljs.core.async.t28063(self__.ch,self__.f,self__.map_LT_,meta28064__$1));
});
cljs.core.async.__GT_t28063 = (function __GT_t28063(ch__$1,f__$1,map_LT___$1,meta28064){return (new cljs.core.async.t28063(ch__$1,f__$1,map_LT___$1,meta28064));
});
}
return (new cljs.core.async.t28063(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t28072 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28072 = (function (ch,f,map_GT_,meta28073){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28073 = meta28073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28072.cljs$lang$type = true;
cljs.core.async.t28072.cljs$lang$ctorStr = "cljs.core.async/t28072";
cljs.core.async.t28072.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28072");
});
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28072.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28074){var self__ = this;
var _28074__$1 = this;return self__.meta28073;
});
cljs.core.async.t28072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28074,meta28073__$1){var self__ = this;
var _28074__$1 = this;return (new cljs.core.async.t28072(self__.ch,self__.f,self__.map_GT_,meta28073__$1));
});
cljs.core.async.__GT_t28072 = (function __GT_t28072(ch__$1,f__$1,map_GT___$1,meta28073){return (new cljs.core.async.t28072(ch__$1,f__$1,map_GT___$1,meta28073));
});
}
return (new cljs.core.async.t28072(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t28078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28078 = (function (ch,p,filter_GT_,meta28079){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28079 = meta28079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28078.cljs$lang$type = true;
cljs.core.async.t28078.cljs$lang$ctorStr = "cljs.core.async/t28078";
cljs.core.async.t28078.cljs$lang$ctorPrWriter = (function (this__20370__auto__,writer__20371__auto__,opt__20372__auto__){return cljs.core._write.call(null,writer__20371__auto__,"cljs.core.async/t28078");
});
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t28078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t28078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28080){var self__ = this;
var _28080__$1 = this;return self__.meta28079;
});
cljs.core.async.t28078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28080,meta28079__$1){var self__ = this;
var _28080__$1 = this;return (new cljs.core.async.t28078(self__.ch,self__.p,self__.filter_GT_,meta28079__$1));
});
cljs.core.async.__GT_t28078 = (function __GT_t28078(ch__$1,p__$1,filter_GT___$1,meta28079){return (new cljs.core.async.t28078(ch__$1,p__$1,filter_GT___$1,meta28079));
});
}
return (new cljs.core.async.t28078(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29039,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29039,out){
return (function (state_28142){var state_val_28143 = (state_28142[1]);if((state_val_28143 === 1))
{var state_28142__$1 = state_28142;var statearr_28144_29040 = state_28142__$1;(statearr_28144_29040[2] = null);
(statearr_28144_29040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 2))
{var state_28142__$1 = state_28142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28142__$1,4,ch);
} else
{if((state_val_28143 === 3))
{var inst_28140 = (state_28142[2]);var state_28142__$1 = state_28142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28142__$1,inst_28140);
} else
{if((state_val_28143 === 4))
{var inst_28124 = (state_28142[7]);var inst_28124__$1 = (state_28142[2]);var inst_28125 = (inst_28124__$1 == null);var state_28142__$1 = (function (){var statearr_28145 = state_28142;(statearr_28145[7] = inst_28124__$1);
return statearr_28145;
})();if(cljs.core.truth_(inst_28125))
{var statearr_28146_29041 = state_28142__$1;(statearr_28146_29041[1] = 5);
} else
{var statearr_28147_29042 = state_28142__$1;(statearr_28147_29042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 5))
{var inst_28127 = cljs.core.async.close_BANG_.call(null,out);var state_28142__$1 = state_28142;var statearr_28148_29043 = state_28142__$1;(statearr_28148_29043[2] = inst_28127);
(statearr_28148_29043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 6))
{var inst_28124 = (state_28142[7]);var inst_28129 = p.call(null,inst_28124);var state_28142__$1 = state_28142;if(cljs.core.truth_(inst_28129))
{var statearr_28149_29044 = state_28142__$1;(statearr_28149_29044[1] = 8);
} else
{var statearr_28150_29045 = state_28142__$1;(statearr_28150_29045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 7))
{var inst_28138 = (state_28142[2]);var state_28142__$1 = state_28142;var statearr_28151_29046 = state_28142__$1;(statearr_28151_29046[2] = inst_28138);
(statearr_28151_29046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 8))
{var inst_28124 = (state_28142[7]);var state_28142__$1 = state_28142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28142__$1,11,out,inst_28124);
} else
{if((state_val_28143 === 9))
{var state_28142__$1 = state_28142;var statearr_28152_29047 = state_28142__$1;(statearr_28152_29047[2] = null);
(statearr_28152_29047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 10))
{var inst_28135 = (state_28142[2]);var state_28142__$1 = (function (){var statearr_28153 = state_28142;(statearr_28153[8] = inst_28135);
return statearr_28153;
})();var statearr_28154_29048 = state_28142__$1;(statearr_28154_29048[2] = null);
(statearr_28154_29048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28143 === 11))
{var inst_28132 = (state_28142[2]);var state_28142__$1 = state_28142;var statearr_28155_29049 = state_28142__$1;(statearr_28155_29049[2] = inst_28132);
(statearr_28155_29049[1] = 10);
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
});})(c__22567__auto___29039,out))
;return ((function (switch__22491__auto__,c__22567__auto___29039,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28159 = [null,null,null,null,null,null,null,null,null];(statearr_28159[0] = state_machine__22492__auto__);
(statearr_28159[1] = 1);
return statearr_28159;
});
var state_machine__22492__auto____1 = (function (state_28142){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28142);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28160){if((e28160 instanceof Object))
{var ex__22495__auto__ = e28160;var statearr_28161_29050 = state_28142;(statearr_28161_29050[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29051 = state_28142;
state_28142 = G__29051;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28142){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29039,out))
})();var state__22569__auto__ = (function (){var statearr_28162 = f__22568__auto__.call(null);(statearr_28162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29039);
return statearr_28162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29039,out))
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
return (function (state_28328){var state_val_28329 = (state_28328[1]);if((state_val_28329 === 1))
{var state_28328__$1 = state_28328;var statearr_28330_29052 = state_28328__$1;(statearr_28330_29052[2] = null);
(statearr_28330_29052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 2))
{var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,4,in$);
} else
{if((state_val_28329 === 3))
{var inst_28326 = (state_28328[2]);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else
{if((state_val_28329 === 4))
{var inst_28269 = (state_28328[7]);var inst_28269__$1 = (state_28328[2]);var inst_28270 = (inst_28269__$1 == null);var state_28328__$1 = (function (){var statearr_28331 = state_28328;(statearr_28331[7] = inst_28269__$1);
return statearr_28331;
})();if(cljs.core.truth_(inst_28270))
{var statearr_28332_29053 = state_28328__$1;(statearr_28332_29053[1] = 5);
} else
{var statearr_28333_29054 = state_28328__$1;(statearr_28333_29054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 5))
{var inst_28272 = cljs.core.async.close_BANG_.call(null,out);var state_28328__$1 = state_28328;var statearr_28334_29055 = state_28328__$1;(statearr_28334_29055[2] = inst_28272);
(statearr_28334_29055[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 6))
{var inst_28269 = (state_28328[7]);var inst_28278 = f.call(null,inst_28269);var inst_28279 = cljs.core.seq.call(null,inst_28278);var inst_28280 = inst_28279;var inst_28281 = null;var inst_28282 = 0;var inst_28283 = 0;var state_28328__$1 = (function (){var statearr_28335 = state_28328;(statearr_28335[8] = inst_28280);
(statearr_28335[9] = inst_28281);
(statearr_28335[10] = inst_28282);
(statearr_28335[11] = inst_28283);
return statearr_28335;
})();var statearr_28336_29056 = state_28328__$1;(statearr_28336_29056[2] = null);
(statearr_28336_29056[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 7))
{var inst_28324 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28337_29057 = state_28328__$1;(statearr_28337_29057[2] = inst_28324);
(statearr_28337_29057[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 8))
{var inst_28282 = (state_28328[10]);var inst_28283 = (state_28328[11]);var inst_28285 = (inst_28283 < inst_28282);var inst_28286 = inst_28285;var state_28328__$1 = state_28328;if(cljs.core.truth_(inst_28286))
{var statearr_28338_29058 = state_28328__$1;(statearr_28338_29058[1] = 10);
} else
{var statearr_28339_29059 = state_28328__$1;(statearr_28339_29059[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 9))
{var inst_28316 = (state_28328[2]);var inst_28317 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_28328__$1 = (function (){var statearr_28340 = state_28328;(statearr_28340[12] = inst_28316);
return statearr_28340;
})();if(cljs.core.truth_(inst_28317))
{var statearr_28341_29060 = state_28328__$1;(statearr_28341_29060[1] = 21);
} else
{var statearr_28342_29061 = state_28328__$1;(statearr_28342_29061[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 10))
{var inst_28281 = (state_28328[9]);var inst_28283 = (state_28328[11]);var inst_28288 = cljs.core._nth.call(null,inst_28281,inst_28283);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,13,out,inst_28288);
} else
{if((state_val_28329 === 11))
{var inst_28294 = (state_28328[13]);var inst_28280 = (state_28328[8]);var inst_28294__$1 = cljs.core.seq.call(null,inst_28280);var state_28328__$1 = (function (){var statearr_28346 = state_28328;(statearr_28346[13] = inst_28294__$1);
return statearr_28346;
})();if(inst_28294__$1)
{var statearr_28347_29062 = state_28328__$1;(statearr_28347_29062[1] = 14);
} else
{var statearr_28348_29063 = state_28328__$1;(statearr_28348_29063[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 12))
{var inst_28314 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28349_29064 = state_28328__$1;(statearr_28349_29064[2] = inst_28314);
(statearr_28349_29064[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 13))
{var inst_28280 = (state_28328[8]);var inst_28281 = (state_28328[9]);var inst_28282 = (state_28328[10]);var inst_28283 = (state_28328[11]);var inst_28290 = (state_28328[2]);var inst_28291 = (inst_28283 + 1);var tmp28343 = inst_28280;var tmp28344 = inst_28281;var tmp28345 = inst_28282;var inst_28280__$1 = tmp28343;var inst_28281__$1 = tmp28344;var inst_28282__$1 = tmp28345;var inst_28283__$1 = inst_28291;var state_28328__$1 = (function (){var statearr_28350 = state_28328;(statearr_28350[14] = inst_28290);
(statearr_28350[8] = inst_28280__$1);
(statearr_28350[9] = inst_28281__$1);
(statearr_28350[10] = inst_28282__$1);
(statearr_28350[11] = inst_28283__$1);
return statearr_28350;
})();var statearr_28351_29065 = state_28328__$1;(statearr_28351_29065[2] = null);
(statearr_28351_29065[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 14))
{var inst_28294 = (state_28328[13]);var inst_28296 = cljs.core.chunked_seq_QMARK_.call(null,inst_28294);var state_28328__$1 = state_28328;if(inst_28296)
{var statearr_28352_29066 = state_28328__$1;(statearr_28352_29066[1] = 17);
} else
{var statearr_28353_29067 = state_28328__$1;(statearr_28353_29067[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 15))
{var state_28328__$1 = state_28328;var statearr_28354_29068 = state_28328__$1;(statearr_28354_29068[2] = null);
(statearr_28354_29068[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 16))
{var inst_28312 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28355_29069 = state_28328__$1;(statearr_28355_29069[2] = inst_28312);
(statearr_28355_29069[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 17))
{var inst_28294 = (state_28328[13]);var inst_28298 = cljs.core.chunk_first.call(null,inst_28294);var inst_28299 = cljs.core.chunk_rest.call(null,inst_28294);var inst_28300 = cljs.core.count.call(null,inst_28298);var inst_28280 = inst_28299;var inst_28281 = inst_28298;var inst_28282 = inst_28300;var inst_28283 = 0;var state_28328__$1 = (function (){var statearr_28356 = state_28328;(statearr_28356[8] = inst_28280);
(statearr_28356[9] = inst_28281);
(statearr_28356[10] = inst_28282);
(statearr_28356[11] = inst_28283);
return statearr_28356;
})();var statearr_28357_29070 = state_28328__$1;(statearr_28357_29070[2] = null);
(statearr_28357_29070[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 18))
{var inst_28294 = (state_28328[13]);var inst_28303 = cljs.core.first.call(null,inst_28294);var state_28328__$1 = state_28328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,20,out,inst_28303);
} else
{if((state_val_28329 === 19))
{var inst_28309 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28358_29071 = state_28328__$1;(statearr_28358_29071[2] = inst_28309);
(statearr_28358_29071[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 20))
{var inst_28294 = (state_28328[13]);var inst_28305 = (state_28328[2]);var inst_28306 = cljs.core.next.call(null,inst_28294);var inst_28280 = inst_28306;var inst_28281 = null;var inst_28282 = 0;var inst_28283 = 0;var state_28328__$1 = (function (){var statearr_28359 = state_28328;(statearr_28359[8] = inst_28280);
(statearr_28359[9] = inst_28281);
(statearr_28359[10] = inst_28282);
(statearr_28359[11] = inst_28283);
(statearr_28359[15] = inst_28305);
return statearr_28359;
})();var statearr_28360_29072 = state_28328__$1;(statearr_28360_29072[2] = null);
(statearr_28360_29072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 21))
{var state_28328__$1 = state_28328;var statearr_28361_29073 = state_28328__$1;(statearr_28361_29073[2] = null);
(statearr_28361_29073[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 22))
{var state_28328__$1 = state_28328;var statearr_28362_29074 = state_28328__$1;(statearr_28362_29074[2] = null);
(statearr_28362_29074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28329 === 23))
{var inst_28322 = (state_28328[2]);var state_28328__$1 = state_28328;var statearr_28363_29075 = state_28328__$1;(statearr_28363_29075[2] = inst_28322);
(statearr_28363_29075[1] = 7);
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
var state_machine__22492__auto____0 = (function (){var statearr_28367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28367[0] = state_machine__22492__auto__);
(statearr_28367[1] = 1);
return statearr_28367;
});
var state_machine__22492__auto____1 = (function (state_28328){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28328);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28368){if((e28368 instanceof Object))
{var ex__22495__auto__ = e28368;var statearr_28369_29076 = state_28328;(statearr_28369_29076[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29077 = state_28328;
state_28328 = G__29077;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__))
})();var state__22569__auto__ = (function (){var statearr_28370 = f__22568__auto__.call(null);(statearr_28370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_28370;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29078,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29078,out){
return (function (state_28442){var state_val_28443 = (state_28442[1]);if((state_val_28443 === 1))
{var inst_28419 = null;var state_28442__$1 = (function (){var statearr_28444 = state_28442;(statearr_28444[7] = inst_28419);
return statearr_28444;
})();var statearr_28445_29079 = state_28442__$1;(statearr_28445_29079[2] = null);
(statearr_28445_29079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 2))
{var state_28442__$1 = state_28442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28442__$1,4,ch);
} else
{if((state_val_28443 === 3))
{var inst_28439 = (state_28442[2]);var inst_28440 = cljs.core.async.close_BANG_.call(null,out);var state_28442__$1 = (function (){var statearr_28446 = state_28442;(statearr_28446[8] = inst_28439);
return statearr_28446;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28442__$1,inst_28440);
} else
{if((state_val_28443 === 4))
{var inst_28422 = (state_28442[9]);var inst_28422__$1 = (state_28442[2]);var inst_28423 = (inst_28422__$1 == null);var inst_28424 = cljs.core.not.call(null,inst_28423);var state_28442__$1 = (function (){var statearr_28447 = state_28442;(statearr_28447[9] = inst_28422__$1);
return statearr_28447;
})();if(inst_28424)
{var statearr_28448_29080 = state_28442__$1;(statearr_28448_29080[1] = 5);
} else
{var statearr_28449_29081 = state_28442__$1;(statearr_28449_29081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 5))
{var inst_28422 = (state_28442[9]);var inst_28419 = (state_28442[7]);var inst_28426 = cljs.core._EQ_.call(null,inst_28422,inst_28419);var state_28442__$1 = state_28442;if(inst_28426)
{var statearr_28450_29082 = state_28442__$1;(statearr_28450_29082[1] = 8);
} else
{var statearr_28451_29083 = state_28442__$1;(statearr_28451_29083[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 6))
{var state_28442__$1 = state_28442;var statearr_28453_29084 = state_28442__$1;(statearr_28453_29084[2] = null);
(statearr_28453_29084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 7))
{var inst_28437 = (state_28442[2]);var state_28442__$1 = state_28442;var statearr_28454_29085 = state_28442__$1;(statearr_28454_29085[2] = inst_28437);
(statearr_28454_29085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 8))
{var inst_28419 = (state_28442[7]);var tmp28452 = inst_28419;var inst_28419__$1 = tmp28452;var state_28442__$1 = (function (){var statearr_28455 = state_28442;(statearr_28455[7] = inst_28419__$1);
return statearr_28455;
})();var statearr_28456_29086 = state_28442__$1;(statearr_28456_29086[2] = null);
(statearr_28456_29086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 9))
{var inst_28422 = (state_28442[9]);var state_28442__$1 = state_28442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28442__$1,11,out,inst_28422);
} else
{if((state_val_28443 === 10))
{var inst_28434 = (state_28442[2]);var state_28442__$1 = state_28442;var statearr_28457_29087 = state_28442__$1;(statearr_28457_29087[2] = inst_28434);
(statearr_28457_29087[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28443 === 11))
{var inst_28422 = (state_28442[9]);var inst_28431 = (state_28442[2]);var inst_28419 = inst_28422;var state_28442__$1 = (function (){var statearr_28458 = state_28442;(statearr_28458[7] = inst_28419);
(statearr_28458[10] = inst_28431);
return statearr_28458;
})();var statearr_28459_29088 = state_28442__$1;(statearr_28459_29088[2] = null);
(statearr_28459_29088[1] = 2);
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
});})(c__22567__auto___29078,out))
;return ((function (switch__22491__auto__,c__22567__auto___29078,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28463 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28463[0] = state_machine__22492__auto__);
(statearr_28463[1] = 1);
return statearr_28463;
});
var state_machine__22492__auto____1 = (function (state_28442){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28442);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28464){if((e28464 instanceof Object))
{var ex__22495__auto__ = e28464;var statearr_28465_29089 = state_28442;(statearr_28465_29089[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29090 = state_28442;
state_28442 = G__29090;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28442){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29078,out))
})();var state__22569__auto__ = (function (){var statearr_28466 = f__22568__auto__.call(null);(statearr_28466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29078);
return statearr_28466;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29078,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29091,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29091,out){
return (function (state_28571){var state_val_28572 = (state_28571[1]);if((state_val_28572 === 1))
{var inst_28534 = (new Array(n));var inst_28535 = inst_28534;var inst_28536 = 0;var state_28571__$1 = (function (){var statearr_28573 = state_28571;(statearr_28573[7] = inst_28536);
(statearr_28573[8] = inst_28535);
return statearr_28573;
})();var statearr_28574_29092 = state_28571__$1;(statearr_28574_29092[2] = null);
(statearr_28574_29092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 2))
{var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28571__$1,4,ch);
} else
{if((state_val_28572 === 3))
{var inst_28569 = (state_28571[2]);var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28571__$1,inst_28569);
} else
{if((state_val_28572 === 4))
{var inst_28539 = (state_28571[9]);var inst_28539__$1 = (state_28571[2]);var inst_28540 = (inst_28539__$1 == null);var inst_28541 = cljs.core.not.call(null,inst_28540);var state_28571__$1 = (function (){var statearr_28575 = state_28571;(statearr_28575[9] = inst_28539__$1);
return statearr_28575;
})();if(inst_28541)
{var statearr_28576_29093 = state_28571__$1;(statearr_28576_29093[1] = 5);
} else
{var statearr_28577_29094 = state_28571__$1;(statearr_28577_29094[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 5))
{var inst_28536 = (state_28571[7]);var inst_28535 = (state_28571[8]);var inst_28544 = (state_28571[10]);var inst_28539 = (state_28571[9]);var inst_28543 = (inst_28535[inst_28536] = inst_28539);var inst_28544__$1 = (inst_28536 + 1);var inst_28545 = (inst_28544__$1 < n);var state_28571__$1 = (function (){var statearr_28578 = state_28571;(statearr_28578[10] = inst_28544__$1);
(statearr_28578[11] = inst_28543);
return statearr_28578;
})();if(cljs.core.truth_(inst_28545))
{var statearr_28579_29095 = state_28571__$1;(statearr_28579_29095[1] = 8);
} else
{var statearr_28580_29096 = state_28571__$1;(statearr_28580_29096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 6))
{var inst_28536 = (state_28571[7]);var inst_28557 = (inst_28536 > 0);var state_28571__$1 = state_28571;if(cljs.core.truth_(inst_28557))
{var statearr_28582_29097 = state_28571__$1;(statearr_28582_29097[1] = 12);
} else
{var statearr_28583_29098 = state_28571__$1;(statearr_28583_29098[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 7))
{var inst_28567 = (state_28571[2]);var state_28571__$1 = state_28571;var statearr_28584_29099 = state_28571__$1;(statearr_28584_29099[2] = inst_28567);
(statearr_28584_29099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 8))
{var inst_28535 = (state_28571[8]);var inst_28544 = (state_28571[10]);var tmp28581 = inst_28535;var inst_28535__$1 = tmp28581;var inst_28536 = inst_28544;var state_28571__$1 = (function (){var statearr_28585 = state_28571;(statearr_28585[7] = inst_28536);
(statearr_28585[8] = inst_28535__$1);
return statearr_28585;
})();var statearr_28586_29100 = state_28571__$1;(statearr_28586_29100[2] = null);
(statearr_28586_29100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 9))
{var inst_28535 = (state_28571[8]);var inst_28549 = cljs.core.vec.call(null,inst_28535);var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28571__$1,11,out,inst_28549);
} else
{if((state_val_28572 === 10))
{var inst_28555 = (state_28571[2]);var state_28571__$1 = state_28571;var statearr_28587_29101 = state_28571__$1;(statearr_28587_29101[2] = inst_28555);
(statearr_28587_29101[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 11))
{var inst_28551 = (state_28571[2]);var inst_28552 = (new Array(n));var inst_28535 = inst_28552;var inst_28536 = 0;var state_28571__$1 = (function (){var statearr_28588 = state_28571;(statearr_28588[7] = inst_28536);
(statearr_28588[8] = inst_28535);
(statearr_28588[12] = inst_28551);
return statearr_28588;
})();var statearr_28589_29102 = state_28571__$1;(statearr_28589_29102[2] = null);
(statearr_28589_29102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 12))
{var inst_28535 = (state_28571[8]);var inst_28559 = cljs.core.vec.call(null,inst_28535);var state_28571__$1 = state_28571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28571__$1,15,out,inst_28559);
} else
{if((state_val_28572 === 13))
{var state_28571__$1 = state_28571;var statearr_28590_29103 = state_28571__$1;(statearr_28590_29103[2] = null);
(statearr_28590_29103[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 14))
{var inst_28564 = (state_28571[2]);var inst_28565 = cljs.core.async.close_BANG_.call(null,out);var state_28571__$1 = (function (){var statearr_28591 = state_28571;(statearr_28591[13] = inst_28564);
return statearr_28591;
})();var statearr_28592_29104 = state_28571__$1;(statearr_28592_29104[2] = inst_28565);
(statearr_28592_29104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28572 === 15))
{var inst_28561 = (state_28571[2]);var state_28571__$1 = state_28571;var statearr_28593_29105 = state_28571__$1;(statearr_28593_29105[2] = inst_28561);
(statearr_28593_29105[1] = 14);
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
});})(c__22567__auto___29091,out))
;return ((function (switch__22491__auto__,c__22567__auto___29091,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28597[0] = state_machine__22492__auto__);
(statearr_28597[1] = 1);
return statearr_28597;
});
var state_machine__22492__auto____1 = (function (state_28571){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28571);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28598){if((e28598 instanceof Object))
{var ex__22495__auto__ = e28598;var statearr_28599_29106 = state_28571;(statearr_28599_29106[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29107 = state_28571;
state_28571 = G__29107;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28571){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29091,out))
})();var state__22569__auto__ = (function (){var statearr_28600 = f__22568__auto__.call(null);(statearr_28600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29091);
return statearr_28600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29091,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22567__auto___29108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__22567__auto___29108,out){
return (function (){var f__22568__auto__ = (function (){var switch__22491__auto__ = ((function (c__22567__auto___29108,out){
return (function (state_28713){var state_val_28714 = (state_28713[1]);if((state_val_28714 === 1))
{var inst_28672 = [];var inst_28673 = inst_28672;var inst_28674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28713__$1 = (function (){var statearr_28715 = state_28713;(statearr_28715[7] = inst_28674);
(statearr_28715[8] = inst_28673);
return statearr_28715;
})();var statearr_28716_29109 = state_28713__$1;(statearr_28716_29109[2] = null);
(statearr_28716_29109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 2))
{var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28713__$1,4,ch);
} else
{if((state_val_28714 === 3))
{var inst_28711 = (state_28713[2]);var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28713__$1,inst_28711);
} else
{if((state_val_28714 === 4))
{var inst_28677 = (state_28713[9]);var inst_28677__$1 = (state_28713[2]);var inst_28678 = (inst_28677__$1 == null);var inst_28679 = cljs.core.not.call(null,inst_28678);var state_28713__$1 = (function (){var statearr_28717 = state_28713;(statearr_28717[9] = inst_28677__$1);
return statearr_28717;
})();if(inst_28679)
{var statearr_28718_29110 = state_28713__$1;(statearr_28718_29110[1] = 5);
} else
{var statearr_28719_29111 = state_28713__$1;(statearr_28719_29111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 5))
{var inst_28681 = (state_28713[10]);var inst_28677 = (state_28713[9]);var inst_28674 = (state_28713[7]);var inst_28681__$1 = f.call(null,inst_28677);var inst_28682 = cljs.core._EQ_.call(null,inst_28681__$1,inst_28674);var inst_28683 = cljs.core.keyword_identical_QMARK_.call(null,inst_28674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28684 = (inst_28682) || (inst_28683);var state_28713__$1 = (function (){var statearr_28720 = state_28713;(statearr_28720[10] = inst_28681__$1);
return statearr_28720;
})();if(cljs.core.truth_(inst_28684))
{var statearr_28721_29112 = state_28713__$1;(statearr_28721_29112[1] = 8);
} else
{var statearr_28722_29113 = state_28713__$1;(statearr_28722_29113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 6))
{var inst_28673 = (state_28713[8]);var inst_28698 = inst_28673.length;var inst_28699 = (inst_28698 > 0);var state_28713__$1 = state_28713;if(cljs.core.truth_(inst_28699))
{var statearr_28724_29114 = state_28713__$1;(statearr_28724_29114[1] = 12);
} else
{var statearr_28725_29115 = state_28713__$1;(statearr_28725_29115[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 7))
{var inst_28709 = (state_28713[2]);var state_28713__$1 = state_28713;var statearr_28726_29116 = state_28713__$1;(statearr_28726_29116[2] = inst_28709);
(statearr_28726_29116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 8))
{var inst_28681 = (state_28713[10]);var inst_28677 = (state_28713[9]);var inst_28673 = (state_28713[8]);var inst_28686 = inst_28673.push(inst_28677);var tmp28723 = inst_28673;var inst_28673__$1 = tmp28723;var inst_28674 = inst_28681;var state_28713__$1 = (function (){var statearr_28727 = state_28713;(statearr_28727[11] = inst_28686);
(statearr_28727[7] = inst_28674);
(statearr_28727[8] = inst_28673__$1);
return statearr_28727;
})();var statearr_28728_29117 = state_28713__$1;(statearr_28728_29117[2] = null);
(statearr_28728_29117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 9))
{var inst_28673 = (state_28713[8]);var inst_28689 = cljs.core.vec.call(null,inst_28673);var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28713__$1,11,out,inst_28689);
} else
{if((state_val_28714 === 10))
{var inst_28696 = (state_28713[2]);var state_28713__$1 = state_28713;var statearr_28729_29118 = state_28713__$1;(statearr_28729_29118[2] = inst_28696);
(statearr_28729_29118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 11))
{var inst_28681 = (state_28713[10]);var inst_28677 = (state_28713[9]);var inst_28691 = (state_28713[2]);var inst_28692 = [];var inst_28693 = inst_28692.push(inst_28677);var inst_28673 = inst_28692;var inst_28674 = inst_28681;var state_28713__$1 = (function (){var statearr_28730 = state_28713;(statearr_28730[12] = inst_28693);
(statearr_28730[13] = inst_28691);
(statearr_28730[7] = inst_28674);
(statearr_28730[8] = inst_28673);
return statearr_28730;
})();var statearr_28731_29119 = state_28713__$1;(statearr_28731_29119[2] = null);
(statearr_28731_29119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 12))
{var inst_28673 = (state_28713[8]);var inst_28701 = cljs.core.vec.call(null,inst_28673);var state_28713__$1 = state_28713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28713__$1,15,out,inst_28701);
} else
{if((state_val_28714 === 13))
{var state_28713__$1 = state_28713;var statearr_28732_29120 = state_28713__$1;(statearr_28732_29120[2] = null);
(statearr_28732_29120[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 14))
{var inst_28706 = (state_28713[2]);var inst_28707 = cljs.core.async.close_BANG_.call(null,out);var state_28713__$1 = (function (){var statearr_28733 = state_28713;(statearr_28733[14] = inst_28706);
return statearr_28733;
})();var statearr_28734_29121 = state_28713__$1;(statearr_28734_29121[2] = inst_28707);
(statearr_28734_29121[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28714 === 15))
{var inst_28703 = (state_28713[2]);var state_28713__$1 = state_28713;var statearr_28735_29122 = state_28713__$1;(statearr_28735_29122[2] = inst_28703);
(statearr_28735_29122[1] = 14);
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
});})(c__22567__auto___29108,out))
;return ((function (switch__22491__auto__,c__22567__auto___29108,out){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_28739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28739[0] = state_machine__22492__auto__);
(statearr_28739[1] = 1);
return statearr_28739;
});
var state_machine__22492__auto____1 = (function (state_28713){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_28713);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object))
{var ex__22495__auto__ = e28740;var statearr_28741_29123 = state_28713;(statearr_28741_29123[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29124 = state_28713;
state_28713 = G__29124;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_28713){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_28713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto___29108,out))
})();var state__22569__auto__ = (function (){var statearr_28742 = f__22568__auto__.call(null);(statearr_28742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto___29108);
return statearr_28742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto___29108,out))
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
lt.plugins.lt_lint.__GT_cm_lint_msg = (function __GT_cm_lint_msg(p__29342){var map__29344 = p__29342;var map__29344__$1 = ((cljs.core.seq_QMARK_.call(null,map__29344))?cljs.core.apply.call(null,cljs.core.hash_map,map__29344):map__29344);var msg = map__29344__$1;var to = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"from","from",1017056028));return cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"range","range",1122184367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),new cljs.core.Keyword(null,"from","from",1017056028),CodeMirror.Pos(cljs.core.first.call(null,from),cljs.core.last.call(null,from)),new cljs.core.Keyword(null,"to","to",1013907949),CodeMirror.Pos(cljs.core.first.call(null,to),cljs.core.last.call(null,to)));
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
return (function (state_29436){var state_val_29437 = (state_29436[1]);if((state_val_29437 === 2))
{var inst_29434 = (state_29436[2]);var state_29436__$1 = state_29436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29436__$1,inst_29434);
} else
{if((state_val_29437 === 1))
{var inst_29431 = (function (){return ((function (state_val_29437,c__22567__auto__,ch){
return (function (p1__29345_SHARP_){return cljs.core.assoc.call(null,p1__29345_SHARP_,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701),obj);
});
;})(state_val_29437,c__22567__auto__,ch))
})();var inst_29432 = cljs.core.map.call(null,inst_29431,results);var state_29436__$1 = state_29436;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29436__$1,2,ch,inst_29432);
} else
{return null;
}
}
});})(c__22567__auto__,ch))
;return ((function (switch__22491__auto__,c__22567__auto__,ch){
return (function() {
var state_machine__22492__auto__ = null;
var state_machine__22492__auto____0 = (function (){var statearr_29441 = [null,null,null,null,null,null,null];(statearr_29441[0] = state_machine__22492__auto__);
(statearr_29441[1] = 1);
return statearr_29441;
});
var state_machine__22492__auto____1 = (function (state_29436){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_29436);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object))
{var ex__22495__auto__ = e29442;var statearr_29443_29533 = state_29436;(statearr_29443_29533[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29534 = state_29436;
state_29436 = G__29534;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,ch))
})();var state__22569__auto__ = (function (){var statearr_29444 = f__22568__auto__.call(null);(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_29444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22569__auto__);
});})(c__22567__auto__,ch))
);
return c__22567__auto__;
});})(ch))
;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch,callback_fn,obj], null);
}),linter_objs);var seq__29445_29535 = cljs.core.seq.call(null,validate_chans);var chunk__29446_29536 = null;var count__29447_29537 = 0;var i__29448_29538 = 0;while(true){
if((i__29448_29538 < count__29447_29537))
{var vec__29449_29539 = cljs.core._nth.call(null,chunk__29446_29536,i__29448_29538);var __29540 = cljs.core.nth.call(null,vec__29449_29539,0,null);var f_29541 = cljs.core.nth.call(null,vec__29449_29539,1,null);var obj_29542 = cljs.core.nth.call(null,vec__29449_29539,2,null);lt.object.raise.call(null,obj_29542,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29541,ed);
{
var G__29543 = seq__29445_29535;
var G__29544 = chunk__29446_29536;
var G__29545 = count__29447_29537;
var G__29546 = (i__29448_29538 + 1);
seq__29445_29535 = G__29543;
chunk__29446_29536 = G__29544;
count__29447_29537 = G__29545;
i__29448_29538 = G__29546;
continue;
}
} else
{var temp__4092__auto___29547 = cljs.core.seq.call(null,seq__29445_29535);if(temp__4092__auto___29547)
{var seq__29445_29548__$1 = temp__4092__auto___29547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29445_29548__$1))
{var c__20551__auto___29549 = cljs.core.chunk_first.call(null,seq__29445_29548__$1);{
var G__29550 = cljs.core.chunk_rest.call(null,seq__29445_29548__$1);
var G__29551 = c__20551__auto___29549;
var G__29552 = cljs.core.count.call(null,c__20551__auto___29549);
var G__29553 = 0;
seq__29445_29535 = G__29550;
chunk__29446_29536 = G__29551;
count__29447_29537 = G__29552;
i__29448_29538 = G__29553;
continue;
}
} else
{var vec__29450_29554 = cljs.core.first.call(null,seq__29445_29548__$1);var __29555 = cljs.core.nth.call(null,vec__29450_29554,0,null);var f_29556 = cljs.core.nth.call(null,vec__29450_29554,1,null);var obj_29557 = cljs.core.nth.call(null,vec__29450_29554,2,null);lt.object.raise.call(null,obj_29557,new cljs.core.Keyword("lt.plugins.lt-lint","validate","lt.plugins.lt-lint/validate",2932857937),editor_text,f_29556,ed);
{
var G__29558 = cljs.core.next.call(null,seq__29445_29548__$1);
var G__29559 = null;
var G__29560 = 0;
var G__29561 = 0;
seq__29445_29535 = G__29558;
chunk__29446_29536 = G__29559;
count__29447_29537 = G__29560;
i__29448_29538 = G__29561;
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
return (function (state_29492){var state_val_29493 = (state_29492[1]);if((state_val_29493 === 1))
{var inst_29456 = cljs.core.nth.call(null,validate_chans,0,null);var inst_29457 = cljs.core.nth.call(null,inst_29456,0,null);var inst_29458 = cljs.core.nth.call(null,inst_29456,1,null);var inst_29459 = cljs.core.nth.call(null,inst_29456,2,null);var inst_29460 = cljs.core.nthnext.call(null,validate_chans,1);var inst_29461 = validate_chans;var inst_29462 = cljs.core.PersistentVector.EMPTY;var state_29492__$1 = (function (){var statearr_29494 = state_29492;(statearr_29494[7] = inst_29457);
(statearr_29494[8] = inst_29458);
(statearr_29494[9] = inst_29462);
(statearr_29494[10] = inst_29459);
(statearr_29494[11] = inst_29460);
(statearr_29494[12] = inst_29461);
return statearr_29494;
})();var statearr_29495_29562 = state_29492__$1;(statearr_29495_29562[2] = null);
(statearr_29495_29562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 2))
{var inst_29461 = (state_29492[12]);var inst_29466 = cljs.core.nth.call(null,inst_29461,0,null);var inst_29467 = cljs.core.nth.call(null,inst_29466,0,null);var inst_29468 = cljs.core.nth.call(null,inst_29466,1,null);var inst_29469 = cljs.core.nth.call(null,inst_29466,2,null);var inst_29470 = cljs.core.nthnext.call(null,inst_29461,1);var state_29492__$1 = (function (){var statearr_29496 = state_29492;(statearr_29496[13] = inst_29468);
(statearr_29496[14] = inst_29470);
(statearr_29496[15] = inst_29469);
return statearr_29496;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,4,inst_29467);
} else
{if((state_val_29493 === 3))
{var inst_29490 = (state_29492[2]);var state_29492__$1 = state_29492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else
{if((state_val_29493 === 4))
{var inst_29469 = (state_29492[15]);var inst_29473 = (state_29492[16]);var inst_29472 = (state_29492[2]);var inst_29473__$1 = lt.plugins.lt_lint.verify_linter_result.call(null,inst_29469,inst_29472);var state_29492__$1 = (function (){var statearr_29497 = state_29492;(statearr_29497[16] = inst_29473__$1);
return statearr_29497;
})();if(cljs.core.truth_(inst_29473__$1))
{var statearr_29498_29563 = state_29492__$1;(statearr_29498_29563[1] = 5);
} else
{var statearr_29499_29564 = state_29492__$1;(statearr_29499_29564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 5))
{var inst_29462 = (state_29492[9]);var inst_29473 = (state_29492[16]);var inst_29475 = cljs.core.conj.call(null,inst_29462,inst_29473);var state_29492__$1 = state_29492;var statearr_29500_29565 = state_29492__$1;(statearr_29500_29565[2] = inst_29475);
(statearr_29500_29565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 6))
{var inst_29462 = (state_29492[9]);var state_29492__$1 = state_29492;var statearr_29501_29566 = state_29492__$1;(statearr_29501_29566[2] = inst_29462);
(statearr_29501_29566[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 7))
{var inst_29470 = (state_29492[14]);var inst_29478 = (state_29492[2]);var inst_29479 = cljs.core.seq.call(null,inst_29470);var state_29492__$1 = (function (){var statearr_29502 = state_29492;(statearr_29502[17] = inst_29478);
return statearr_29502;
})();if(inst_29479)
{var statearr_29503_29567 = state_29492__$1;(statearr_29503_29567[1] = 8);
} else
{var statearr_29504_29568 = state_29492__$1;(statearr_29504_29568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 8))
{var inst_29470 = (state_29492[14]);var inst_29478 = (state_29492[17]);var inst_29461 = inst_29470;var inst_29462 = inst_29478;var state_29492__$1 = (function (){var statearr_29505 = state_29492;(statearr_29505[9] = inst_29462);
(statearr_29505[12] = inst_29461);
return statearr_29505;
})();var statearr_29506_29569 = state_29492__$1;(statearr_29506_29569[2] = null);
(statearr_29506_29569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 9))
{var inst_29478 = (state_29492[17]);var inst_29483 = cljs.core.apply.call(null,cljs.core.concat,inst_29478);var inst_29484 = cljs.core.map.call(null,lt.plugins.lt_lint.__GT_cm_lint_msg,inst_29483);var inst_29485 = cljs.core.clj__GT_js.call(null,inst_29484);var inst_29486 = callback.call(null,inst_29485);var state_29492__$1 = state_29492;var statearr_29507_29570 = state_29492__$1;(statearr_29507_29570[2] = inst_29486);
(statearr_29507_29570[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29493 === 10))
{var inst_29488 = (state_29492[2]);var state_29492__$1 = state_29492;var statearr_29508_29571 = state_29492__$1;(statearr_29508_29571[2] = inst_29488);
(statearr_29508_29571[1] = 3);
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
var state_machine__22492__auto____0 = (function (){var statearr_29512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29512[0] = state_machine__22492__auto__);
(statearr_29512[1] = 1);
return statearr_29512;
});
var state_machine__22492__auto____1 = (function (state_29492){while(true){
var ret_value__22493__auto__ = (function (){try{while(true){
var result__22494__auto__ = switch__22491__auto__.call(null,state_29492);if(cljs.core.keyword_identical_QMARK_.call(null,result__22494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22494__auto__;
}
break;
}
}catch (e29513){if((e29513 instanceof Object))
{var ex__22495__auto__ = e29513;var statearr_29514_29572 = state_29492;(statearr_29514_29572[5] = ex__22495__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22493__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29573 = state_29492;
state_29492 = G__29573;
continue;
}
} else
{return ret_value__22493__auto__;
}
break;
}
});
state_machine__22492__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return state_machine__22492__auto____0.call(this);
case 1:
return state_machine__22492__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22492__auto____0;
state_machine__22492__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22492__auto____1;
return state_machine__22492__auto__;
})()
;})(switch__22491__auto__,c__22567__auto__,validate_chans))
})();var state__22569__auto__ = (function (){var statearr_29515 = f__22568__auto__.call(null);(statearr_29515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22567__auto__);
return statearr_29515;
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
validate_with_all_linters.cljs$lang$applyTo = (function (arglist__29574){
var ed = cljs.core.first(arglist__29574);
var linter_objs = cljs.core.rest(arglist__29574);
return validate_with_all_linters__delegate(ed,linter_objs);
});
validate_with_all_linters.cljs$core$IFn$_invoke$arity$variadic = validate_with_all_linters__delegate;
return validate_with_all_linters;
})()
;
lt.plugins.lt_lint.add_linter = (function add_linter(linters,linter_obj,ed,args){var obj = cljs.core.apply.call(null,lt.object.create,linter_obj,ed,args);return cljs.core.conj.call(null,cljs.core.remove.call(null,((function (obj){
return (function (p1__29516_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__29516_SHARP_)),linter_obj);
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
lt.plugins.lt_lint.set_cm_lint_settings_BANG_ = (function set_cm_lint_settings_BANG_(ed){var map__29518 = new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)));var map__29518__$1 = ((cljs.core.seq_QMARK_.call(null,map__29518))?cljs.core.apply.call(null,cljs.core.hash_map,map__29518):map__29518);var change_timeout = cljs.core.get.call(null,map__29518__$1,new cljs.core.Keyword(null,"change-timeout","change-timeout",4761814966),500);var auto_QMARK_ = cljs.core.get.call(null,map__29518__$1,new cljs.core.Keyword(null,"auto?","auto?",1107086306),true);var lint_QMARK_ = cljs.core.get.call(null,map__29518__$1,new cljs.core.Keyword(null,"lint?","lint?",1116881934));return lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lint","lint",1017226101),(cljs.core.truth_(lint_QMARK_)?{"delay": change_timeout, "lintOnChange": auto_QMARK_, "getAnnotations": cljs.core.partial.call(null,lt.plugins.lt_lint.editor_linting,ed), "async": true}:null),new cljs.core.Keyword(null,"fixedGutter","fixedGutter",1733738785),false], null));
});
lt.plugins.lt_lint.prepare_editor_for_linter = (function prepare_editor_for_linter(ed,p__29519){var vec__29521 = p__29519;var linter_obj = cljs.core.nth.call(null,vec__29521,0,null);var args = cljs.core.nthnext.call(null,vec__29521,1);lt.objs.editor.add_gutter.call(null,ed,"CodeMirror-lint-markers",10);
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
lt.plugins.lt_lint.doc_message_text = (function doc_message_text(p__29522){var map__29524 = p__29522;var map__29524__$1 = ((cljs.core.seq_QMARK_.call(null,map__29524))?cljs.core.apply.call(null,cljs.core.hash_map,map__29524):map__29524);var from_linter = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));var message = cljs.core.get.call(null,map__29524__$1,new cljs.core.Keyword(null,"message","message",1968829305));return [cljs.core.str(new cljs.core.Keyword(null,"linter-name","linter-name",2860858810).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,from_linter))),cljs.core.str(":\n\n"),cljs.core.str(message)].join('');
});
lt.plugins.lt_lint.inline_doc_for_lint_messages = (function inline_doc_for_lint_messages(msgs){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loc","loc",1014011570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msgs)).line], null),new cljs.core.Keyword(null,"name","name",1017277949),"Lint results",new cljs.core.Keyword(null,"doc","doc",1014003882),clojure.string.join.call(null,"\n\n",cljs.core.map.call(null,lt.plugins.lt_lint.doc_message_text,msgs))], null);
});
lt.plugins.lt_lint.show_lint_message = (function show_lint_message(ed,lint_messages){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),lt.plugins.lt_lint.inline_doc_for_lint_messages.call(null,lint_messages));
});
lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_ = (function doc_shown_for_lint_message_QMARK_(ed,lint_messages){var lines_in_lint_messages = cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,cljs.core.ffirst,new cljs.core.Keyword(null,"range","range",1122184367)),cljs.core.comp.call(null,cljs.core.first,cljs.core.last,new cljs.core.Keyword(null,"range","range",1122184367))),lint_messages));return cljs.core.some.call(null,cljs.core.partial.call(null,lt.plugins.doc.doc_on_line_QMARK_,ed),cljs.core.range.call(null,cljs.core.apply.call(null,cljs.core.min,lines_in_lint_messages),(cljs.core.apply.call(null,cljs.core.max,lines_in_lint_messages) + 1)));
});
lt.plugins.lt_lint.toggle_lint_message = (function toggle_lint_message(ed){var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.map.call(null,lt.plugins.lt_lint.text_mark__GT_lint_result,lt.plugins.lt_lint.lint_messages_for_cursor.call(null,ed)));if(temp__4090__auto__)
{var lint_messages = temp__4090__auto__;var loc = lt.objs.editor.__GT_cursor.call(null,ed);var temp__4090__auto____$1 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,lint_messages);if(cljs.core.truth_(temp__4090__auto____$1))
{var cur = temp__4090__auto____$1;return lt.plugins.doc.remove_BANG_.call(null,ed,cur);
} else
{return lt.plugins.lt_lint.show_lint_message.call(null,ed,lint_messages);
}
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No lint message found at cursor...",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","toggle-lint-message","lt.plugins.lt-lint/toggle-lint-message",2461476177),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: toggle lint message",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_lint.toggle_lint_message.call(null,ed);
} else
{return null;
}
})], null));
lt.plugins.lt_lint.toggle_all_lint_messages = (function toggle_all_lint_messages(ed){var temp__4092__auto__ = cljs.core.seq.call(null,cljs.core.map.call(null,lt.plugins.lt_lint.text_mark__GT_lint_result,lt.plugins.lt_lint.lint_messages_for_ed.call(null,ed)));if(temp__4092__auto__)
{var lint_messages = temp__4092__auto__;var all_shown_QMARK_ = (function (){var or__19803__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword("lt.plugins.lt-lint","settings","lt.plugins.lt-lint/settings",1149876038),new cljs.core.Keyword(null,"all-shown?","all-shown?",1120148076)], null));if(cljs.core.truth_(or__19803__auto__))
{return or__19803__auto__;
} else
{return false;
}
})();var seq__29529_29575 = cljs.core.seq.call(null,lint_messages);var chunk__29530_29576 = null;var count__29531_29577 = 0;var i__29532_29578 = 0;while(true){
if((i__29532_29578 < count__29531_29577))
{var msg_29579 = cljs.core._nth.call(null,chunk__29530_29576,i__29532_29578);cljs.core.dissoc.call(null,msg_29579,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));
if(cljs.core.truth_(all_shown_QMARK_))
{var temp__4092__auto___29580__$1 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29579], null));if(cljs.core.truth_(temp__4092__auto___29580__$1))
{var cur_29581 = temp__4092__auto___29580__$1;lt.plugins.doc.remove_BANG_.call(null,ed,cur_29581);
} else
{}
} else
{if(cljs.core.truth_(lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29579], null))))
{} else
{lt.plugins.lt_lint.show_lint_message.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29579], null));
}
}
{
var G__29582 = seq__29529_29575;
var G__29583 = chunk__29530_29576;
var G__29584 = count__29531_29577;
var G__29585 = (i__29532_29578 + 1);
seq__29529_29575 = G__29582;
chunk__29530_29576 = G__29583;
count__29531_29577 = G__29584;
i__29532_29578 = G__29585;
continue;
}
} else
{var temp__4092__auto___29586__$1 = cljs.core.seq.call(null,seq__29529_29575);if(temp__4092__auto___29586__$1)
{var seq__29529_29587__$1 = temp__4092__auto___29586__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29529_29587__$1))
{var c__20551__auto___29588 = cljs.core.chunk_first.call(null,seq__29529_29587__$1);{
var G__29589 = cljs.core.chunk_rest.call(null,seq__29529_29587__$1);
var G__29590 = c__20551__auto___29588;
var G__29591 = cljs.core.count.call(null,c__20551__auto___29588);
var G__29592 = 0;
seq__29529_29575 = G__29589;
chunk__29530_29576 = G__29590;
count__29531_29577 = G__29591;
i__29532_29578 = G__29592;
continue;
}
} else
{var msg_29593 = cljs.core.first.call(null,seq__29529_29587__$1);cljs.core.dissoc.call(null,msg_29593,new cljs.core.Keyword(null,"from-linter","from-linter",3884841701));
if(cljs.core.truth_(all_shown_QMARK_))
{var temp__4092__auto___29594__$2 = lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29593], null));if(cljs.core.truth_(temp__4092__auto___29594__$2))
{var cur_29595 = temp__4092__auto___29594__$2;lt.plugins.doc.remove_BANG_.call(null,ed,cur_29595);
} else
{}
} else
{if(cljs.core.truth_(lt.plugins.lt_lint.doc_shown_for_lint_message_QMARK_.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29593], null))))
{} else
{lt.plugins.lt_lint.show_lint_message.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_29593], null));
}
}
{
var G__29596 = cljs.core.next.call(null,seq__29529_29587__$1);
var G__29597 = null;
var G__29598 = 0;
var G__29599 = 0;
seq__29529_29575 = G__29596;
chunk__29530_29576 = G__29597;
count__29531_29577 = G__29598;
i__29532_29578 = G__29599;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.lt-lint","toggle-all-lint-messages","lt.plugins.lt-lint/toggle-all-lint-messages",2763619820),new cljs.core.Keyword(null,"desc","desc",1016984067),"Linting: toggle all lint messages in editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.lt_lint.toggle_all_lint_messages.call(null,ed);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=linting_compiled.js.map